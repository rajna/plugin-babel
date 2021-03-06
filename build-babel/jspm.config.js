SystemJS.config({
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.10"
    }
  },
  transpiler: "plugin-babel",
  map: {
    "regenerator": "github:facebook/regenerator@0.8.46"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "babel": "npm:babel-core@6.11.4",
    "babel-helpers": "npm:babel-helpers@6.8.0",
    "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
    "babel-plugin-external-helpers": "npm:babel-plugin-external-helpers@6.8.0",
    "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
    "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
    "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.10.1",
    "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.9.0",
    "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
    "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.9.0",
    "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
    "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
    "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
    "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.12.0",
    "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
    "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.11.4",
    "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0",
    "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
    "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
    "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
    "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0",
    "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0",
    "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.11.4",
    "babel-plugin-transform-runtime": "npm:babel-plugin-transform-runtime@6.12.0",
    "babel-preset-stage-1": "npm:babel-preset-stage-1@6.5.0",
    "babel-preset-stage-2": "npm:babel-preset-stage-2@6.11.0",
    "babel-preset-stage-3": "npm:babel-preset-stage-3@6.11.0",
    "core-js": "npm:core-js@2.4.1",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "regenerator-runtime": "npm:regenerator-runtime@0.9.5",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:babel-helper-bindify-decorators@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0": {
      "map": {
        "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-helper-call-delegate@6.8.0": {
      "map": {
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-helper-explode-assignable-expression@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-helper-explode-class@6.8.0": {
      "map": {
        "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-helper-function-name@6.8.0": {
      "map": {
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-helper-get-function-arity@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-helper-hoist-variables@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-helper-optimise-call-expression@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-helper-replace-supers@6.8.0": {
      "map": {
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-helpers@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-template": "npm:babel-template@6.9.0"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-check-es2015-constants@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-external-helpers@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-syntax-async-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-syntax-class-constructor-call@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-syntax-class-properties@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-syntax-decorators@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-syntax-exponentiation-operator@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-syntax-export-extensions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-syntax-object-rest-spread@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-syntax-trailing-function-commas@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-async-to-generator@6.8.0": {
      "map": {
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.11.2",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-class-constructor-call@6.8.0": {
      "map": {
        "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-template": "npm:babel-template@6.9.0"
      }
    },
    "npm:babel-plugin-transform-decorators@6.8.0": {
      "map": {
        "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
        "babel-helper-explode-class": "npm:babel-helper-explode-class@6.8.0",
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.8.0": {
      "map": {
        "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-template": "npm:babel-template@6.9.0"
      }
    },
    "npm:babel-plugin-transform-es2015-for-of@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-literals@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-object-super@6.8.0": {
      "map": {
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-plugin-transform-es2015-spread@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0": {
      "map": {
        "babel-helper-regex": "npm:babel-helper-regex@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
      "map": {
        "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0",
        "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-export-extensions@6.8.0": {
      "map": {
        "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-object-rest-spread@6.8.0": {
      "map": {
        "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-preset-stage-1@6.5.0": {
      "map": {
        "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.8.0",
        "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.11.5",
        "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.8.0",
        "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.8.0",
        "babel-preset-stage-2": "npm:babel-preset-stage-2@6.11.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:detect-indent@3.0.1": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "minimist": "npm:minimist@1.2.0",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:home-or-tmp@1.0.0": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.1",
        "user-home": "npm:user-home@1.1.1"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:source-map-support@0.2.10": {
      "map": {
        "source-map": "npm:source-map@0.1.32"
      }
    },
    "npm:source-map@0.1.32": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.1"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.1"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:babel-plugin-transform-es2015-classes@6.9.0": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-function-name@6.9.0": {
      "map": {
        "babel-types": "npm:babel-types@6.11.1",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-helper-define-map@6.9.0": {
      "map": {
        "babel-types": "npm:babel-types@6.11.1",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
        "lodash": "npm:lodash@4.14.1",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-template@6.9.0": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-types": "npm:babel-types@6.11.1",
        "lodash": "npm:lodash@4.14.1",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babylon": "npm:babylon@6.8.4"
      }
    },
    "npm:babel-helper-regex@6.9.0": {
      "map": {
        "lodash": "npm:lodash@4.14.1",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:babel-plugin-transform-regenerator@6.11.4": {
      "map": {
        "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.10.1",
        "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
        "babel-core": "npm:babel-core@6.11.4",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0",
        "private": "npm:private@0.1.6",
        "babylon": "npm:babylon@6.8.4",
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-core@6.11.4": {
      "map": {
        "babel-helpers": "npm:babel-helpers@6.8.0",
        "babel-generator": "npm:babel-generator@6.11.4",
        "babel-register": "npm:babel-register@6.11.6",
        "shebang-regex": "npm:shebang-regex@1.0.0",
        "debug": "npm:debug@2.2.0",
        "source-map": "npm:source-map@0.5.6",
        "private": "npm:private@0.1.6",
        "babel-code-frame": "npm:babel-code-frame@6.11.0",
        "slash": "npm:slash@1.0.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "babylon": "npm:babylon@6.8.4",
        "lodash": "npm:lodash@4.14.1",
        "json5": "npm:json5@0.4.0",
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "path-exists": "npm:path-exists@1.0.0",
        "convert-source-map": "npm:convert-source-map@1.3.0",
        "minimatch": "npm:minimatch@3.0.2"
      }
    },
    "npm:babel-preset-stage-2@6.11.0": {
      "map": {
        "babel-preset-stage-3": "npm:babel-preset-stage-3@6.11.0",
        "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.8.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.10.1": {
      "map": {
        "lodash": "npm:lodash@4.14.1",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-plugin-transform-es2015-parameters@6.11.4": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.8.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.12.0": {
      "map": {
        "babel-template": "npm:babel-template@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0"
      }
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-helper-regex": "npm:babel-helper-regex@6.9.0",
        "regexpu-core": "npm:regexpu-core@2.0.0"
      }
    },
    "npm:babel-plugin-transform-runtime@6.12.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-generator@6.11.4": {
      "map": {
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-types": "npm:babel-types@6.11.1",
        "source-map": "npm:source-map@0.5.6",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "lodash": "npm:lodash@4.14.1",
        "detect-indent": "npm:detect-indent@3.0.1"
      }
    },
    "npm:babylon@6.8.4": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-traverse@6.12.0": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.11.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-types": "npm:babel-types@6.11.1",
        "debug": "npm:debug@2.2.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babylon": "npm:babylon@6.8.4",
        "lodash": "npm:lodash@4.14.1",
        "invariant": "npm:invariant@2.2.1",
        "globals": "npm:globals@8.18.0"
      }
    },
    "npm:babel-runtime@6.11.6": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:babel-preset-stage-3@6.11.0": {
      "map": {
        "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.8.0",
        "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.8.0",
        "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0"
      }
    },
    "npm:babel-types@6.11.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "lodash": "npm:lodash@4.14.1",
        "esutils": "npm:esutils@2.0.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babel-register@6.11.6": {
      "map": {
        "path-exists": "npm:path-exists@1.0.0",
        "babel-core": "npm:babel-core@6.11.4",
        "core-js": "npm:core-js@2.4.1",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "lodash": "npm:lodash@4.14.1",
        "source-map-support": "npm:source-map-support@0.2.10",
        "mkdirp": "npm:mkdirp@0.5.1",
        "home-or-tmp": "npm:home-or-tmp@1.0.0"
      }
    },
    "npm:babel-code-frame@6.11.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "js-tokens": "npm:js-tokens@2.0.0",
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:babel-plugin-transform-class-properties@6.11.5": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.8.0"
      }
    },
    "npm:buffer@4.7.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "npm:regexpu-core@2.0.0": {
      "map": {
        "regenerate": "npm:regenerate@1.3.1",
        "regjsgen": "npm:regjsgen@0.2.0",
        "regjsparser": "npm:regjsparser@0.1.5"
      }
    },
    "npm:minimatch@3.0.2": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:babel-helper-remap-async-to-generator@6.11.2": {
      "map": {
        "babel-template": "npm:babel-template@6.9.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-traverse": "npm:babel-traverse@6.12.0",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:stream-http@2.3.1": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "xtend": "npm:xtend@4.0.1",
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    }
  }
});