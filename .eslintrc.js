export default {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,

  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "impliedStrict": true,
    },
    "ecmaVersion": 6,
    "sourceType": "module"

  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2, {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/prop-types": [0],
    "settings": {
      "react": {
        "version": "16"
      }
    }
  }
}
