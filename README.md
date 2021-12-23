# React Typescript App

Base configuration for building React apps in Typescript with Webpack and workflow
tools such as ESLint, StyleLint, Prettier, and others.

# Table of Contents

- [Creating the Project](#creatingTheProject)
    - [Create React App](#createReactApp)
    - [Install ESLint](#installESLint)
    - [Install StyleLint (optional)](#installStyleLint)
    - [Install Prettier](#installPrettier)
    - [ESLint Config](#ESLintConfig)
    - [Prettier Config](#prettierConfig)
    - [Scripts](#scripts)
    - [Git Hooks](#gitHooks)
- [Available Scripts](#availableScripts)

## Creating the Project {#creatingTheProject}

This is a basic tutorial that goes over the installation and configuration of the
modules, plugins, and config files for the app to have an easy-to-use, consistent,
and error free workflow.

### Create React App {#createReactApp}

Create the project [create-react-app](https://create-react-app.dev/docs/adding-typescript/#installation):  

```
npx create-react-app APP_NAME --template typescript
```

Change the directory to the app and then eject it to get control of the configuration:  

```bash
npm run eject
```

### Install ESLint {#installESLint}

Install the dependencies for ESLint typescript, react, and airbnb style guide:  

 ```bash
 npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin 
 eslint-config-airbnb-typescript eslint-plugin-react-hooks eslint-plugin-jest 
 eslint-plugin-import
```

Then install airbnb peer dependencies:  

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

### Install StyleLint (optional) {#installStyleLint}

Install the StyleLint to find problems in the style and can be combined with
Prettier to enforce a consistent style. It requires the standard config for
basic rules and the prettier config:

```bash
npm i --save-dev stylelint stylelint-config-standard stylelint-config-prettier 
stylelint-prettier
```

Create the `.stylelintrc` configration file:

```js
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-prettier"
  ],
  "rules": {
    "font-family-name-quotes": "always-where-recommended",
    // optional, this uses a Upper case initial letter kebab-case pattern
    "selector-class-pattern": "^([A-Z][a-z0-9]*)(-[a-z0-9]+)*$",
    "keyframes-name-pattern": "^([A-Z][a-z0-9]*)(-[a-z0-9]+)*$"
  }
}
```

### Install Prettier {#installPrettier}

```bash
npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

### ESLint config {#ESLintConfig}

Create the `.eslintrc` configuration file:

```js
// .eslintrc
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "useJSXTextNode": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:import/recommended" // this is added to allow esModule import syntax
  ],
  "plugins": ["react", "react-hooks", "@typescript-eslint", "jest"],
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "rules": {
    "linebreak-style": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  }
}
```

Add the `.eslintignore` file to prevent lint checking certain files:

```
// .eslintignore
.idea
.storybook
.config
node_modules/*
config/*
public/*
scripts/*
src/react-app-env.d.ts
src/reportWebVitals.ts
```

### Prettier Config {#prettierConfig}

```js
// .prettierrc
{
  "arrowParens": "always",
  "singleQuote": true,
  "printWidth": 100,
  "jsxBracketSameLine": false,
  "trailingComma": "none",
  "semi": true
}
```

### Scripts {#scripts}

In `package.json` add the scripts for linting:

```js
// scripts
{
  "lint": "eslint src/**/*.{js,jsx,ts,tsx}",
  "lint:fix": "eslint src/**/*.{js,jsx,ts,tsx} --fix",
  // add these if StyleLint is installed
  "lint:css": "stylelint src/**/*.css",
  "lint:css:fix": "stylelint --fix src/**/*.css",
}
```

### Git Hooks {#gitHook}

Hooks allow scripts to be run during certain phases of Git actions
such as the commit. We are primarily concerned with ensuring that
the files are error free and formatted before committing. This
requires two modules; [husky](https://github.com/typicode/husky) 
and [lint-staged](https://github.com/okonet/lint-staged):

```bash
npm i --save-dev husky lint-staged
```

#### lint-staged {#lint-staged}

With lint-staged installed, it will do the actual work of running the
lint command and staging the new changes to the commit automatically.
We want to add the npm script for husky to execute in the pre-commit
hook:

```js
// package.json
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": "eslint --cache --fix",
    // add this if using StyleLint
    "src/**/*.css": "stylelint --cache --fix"
  }
}
```

The property values are glob patterns for the files to check and the
value is the command to execute for each file that is resolved from
the glob. In this case, all our js files are checked and fixed. Notice
how there is no path argument specified because it is called on each
file.

#### husky {#husky}

With husky installed we can set it up by running the install command:

```bash
npx husky install
```

To add a new hook run `npx husky add .husky/[HOOK] [HOOK_COMMAND]` where `HOOK`
is the type of hook such as the "pre-commit" and then the actual hook function.

We will add a pre-commit hook to lint the files before committing to ensure
the files are error free to save loads of time of dealing with the problem
in the future when something breaks. It can be added through the husky command:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

or we can manually create the `.husky/pre-commit` script:

```bash
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

## Available Scripts {#availableScripts}

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.