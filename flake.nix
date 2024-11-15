{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    devenv.inputs.nixpkgs.follows = "nixpkgs";
    systems.url = "github:nix-systems/default";
    devenv.url = "github:cachix/devenv";
  };

  nixConfig = {
    extra-trusted-public-keys = "devenv.cachix.org-1:w1cLUi8dv3hnoSPGAuibQv+f9TZLr6cv/Hm9XgU50cw=";
    # this must be configured in /etc/nix/nix.conf
    # see https://nix.dev/manual/nix/2.18/command-ref/conf-file#conf-substituters
    extra-substituters = "https://devenv.cachix.org";
  };

  outputs = { self, nixpkgs, devenv, systems, ... } @ inputs:
    let
      forEachSystem = nixpkgs.lib.genAttrs (import systems);
    in
    {
      packages = forEachSystem (system: {
        devenv-up = self.devShells.${system}.default.config.procfileScript;
      });

      devShells = forEachSystem
        (system:
          let
            inherit (nixpkgs) lib;
            pkgs = import nixpkgs
              {
                inherit system;
                config = {
                  # allowUnfree = true;
                };
              };
          in
          let
            distDir = ".dist";
            cwd = builtins.getEnv "PWD";
          in
          {
            default = devenv.lib.mkShell {
              inherit inputs pkgs;

              modules =
                [
                  ({ pkgs, config, ... }:
                    let
                    in
                    {
                      packages = [
                        # am tired of the ts-node issues, just want to run a script damn it
                        pkgs.bun
                      ];
                      env.TERM = "wezterm";
                      env.DIST_DIR = distDir;
                      env.ROOT_DIR = cwd;
                                       languages = {
                        javascript = {
                          enable = true;
                          package = pkgs.nodejs_22;
                          pnpm.enable = true;
                        };
                      };
                      process-managers.process-compose.settings.theme = "One Dark";
                      # export NPM_TOKEN=$(cat $SECRETS_DIR/NPM_TOKEN)
                      # export GH_TOKEN=$(cat $SECRETS_DIR/GH_TOKEN)
                      enterShell = ''
                        export LOCALHOST_PEM="$SECRETS_DIR/localhost.pem"
                        export LOCALHOST_KEY_PEM="$SECRETS_DIR/localhost-key.pem"

                        devHelp
                        devPrepare
                        devInfo
                      '';
                      scripts.devHelp = {
                        description = "List available scripts.";
                        exec = ''
                          echo "Scripts:"
                          ${pkgs.gnused}/bin/sed -e 's| |••|g' -e 's|=| |' <<EOF | ${pkgs.util-linuxMinimal}/bin/column -t | ${pkgs.gnused}/bin/sed -e 's|^|- |' -e 's|••| |g'
                          ${lib.generators.toKeyValue {} (lib.mapAttrs (name: value: if value.description != "" then value.description else "(no description)") config.scripts)}
                        '';
                      };
                      # note that scripts cant export env vars ???
                      scripts.devPrepare = {
                        description = "Prepares the project for development.";
                        exec = ''
                          echo "Preparing Env..."
                          if [ ! -d node_modules ]; then pnpm i; else printf "Found node_modules, Skipping Pnpm Install\n"; fi
                        '';
                      };
                      scripts.devInfo = {
                        description = "Prints out some information about the environment.";
                        exec = ''
                          echo "Environment Package Versions:"
                          echo "node `${pkgs.nodejs}/bin/node --version`"
                          echo "pnpm `${pkgs.nodePackages.pnpm}/bin/pnpm --version`"
                        '';
                      };
                    })
                ];
            };
          });
    };
}
