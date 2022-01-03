# React Typescript App

Base configuration for building React apps in Typescript with Webpack and workflow
tools such as ESLint, StyleLint, Prettier, and others.

# Table of Contents
- [React Typescript App](#react-typescript-app)
- [Table of Contents](#table-of-contents)
- [TODO](#todo)
- [About](#about)
- [Quickstart](#quickstart)
- [Setup the Project {#setupTheProject}](#setup-the-project-setuptheproject)
  - [VSCode Extensions {#vscodeExtensions}](#vscode-extensions-vscodeextensions)
  - [ESLint](#eslint)
  - [Stylelint](#stylelint)
  - [Visual Studio IntelliCode](#visual-studio-intellicode)
  - [IntelliSense for CSS](#intellisense-for-css)
  - [CSS Peek](#css-peek)
  - [Tailwind CSS IntelliSense](#tailwind-css-intellisense)
  - [Path Intellisense](#path-intellisense)
  - [Auto Close Tag](#auto-close-tag)
  - [Auto Rename Tag](#auto-rename-tag)
  - [Configuration {#vscodeConfig}](#configuration-vscodeconfig)
- [Installing the Development Dependencies](#installing-the-development-dependencies)
  - [Create React App {#createReactApp}](#create-react-app-createreactapp)
  - [Install ESLint {#installESLint}](#install-eslint-installeslint)
  - [Install StyleLint {#installStyleLint}](#install-stylelint-installstylelint)
  - [Install Prettier {#installPrettier}](#install-prettier-installprettier)
  - [TailwindCSS Config {#Tailwind}](#tailwindcss-config-tailwind)
  - [ESLint Config {#ESLintConfig}](#eslint-config-eslintconfig)
  - [Prettier Config {#prettierConfig}](#prettier-config-prettierconfig)
  - [Scripts {#scripts}](#scripts-scripts)
- [Git Hooks {#gitHook}](#git-hooks-githook)
  - [lint-staged {#lint-staged}](#lint-staged-lint-staged)
  - [husky {#husky}](#husky-husky)
- [Available Scripts {#availableScripts}](#available-scripts-availablescripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
- [Deployment](#deployment)
  - [Heroku](#heroku)
    - [Deploying Code](#deploying-code)

# TODO 

- [ ] Add a ServiceWorker
- [ ] Enable HTTP2 support
- [ ] Support Heroku deployment out of the box
- [ ] Add headlessui React components
- [ ] Add heroicons for icons

# About 

This project is a starter for Typescript React apps and includes configured files for the VSCode IDE,
modules, and configuration files like package.json *(includes the Heroku deployment fix)*.

# Quickstart

To use the initial configuration of the files in the project, simply run the install command, 
`npm install` to install all the npm modules in the `package.json`. You will, however, need to check 
out the [VSCode Extentions](#vscodeExtensions) section if you want the workflow 
tools to work.

# Setup the Project {#setupTheProject}

The following will cover the extensions and modules used to help the workflow of building the app or is
required for it to work. These are used to create the initial start project structure. To start right
away, check out the [quickstart](#quickstart) section.

## VSCode Extensions {#vscodeExtensions}

The extensions help the workflow by provding snippets or error checking. Some will 
be the same as some modules that will be installed in the next part with `npm` but,
won't have the full functionality without the extension in the VSCode IDE.

## [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

The extension fully integrates the ESLint module with the VSCode IDE to highlight
problems and to fix them on save.

## [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Similar to ESLint but to be able to highlight problems and to fix them on save. 

**NOTE:** you will want to disable the built-in vscode validator in the settings to
prevent duplicate error warnings and to allow Stylelint to allow the configured rules
to include or exclude certain errors that you may or may not want the default validator
to shout at you about.

To disable it, you can change the global setting or the local project `.vscode/settings.json`

```jsonc
{
  "css.validate": false,
  "scss.validate": false  // If using sass
}
```

## [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

This is required to allow the suggestions to improve workflow and for the following extensions
to work that also give additional benefits to the workflow.

## [IntelliSense for CSS](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)

Suggests CSS classes based on definitions found in files in the workspace. Useful when creating
styles for components to easily autocomplete.

## [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)

Allows use to peek definitions of CSS classes found in the workspace directory.
## [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

Allows for IntelliSense suggestions for TailwindCSS classes, linting, and hover preview.

## [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

Allows a very efficient way or giving suggestions for paths of files as you type them
including an icon of it.

## [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

This is just a little time saver and helps prevent errors from forgetting a closing tag
by automatically creating it once the opening tag is created.

## [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

Helpful tool and helps prevent errors when changing a tag by automatically changing the
closing tag synchronously.

## Configuration {#vscodeConfig}

With the extensions installed, we can set the `.vscode/settings.json` configuration file 
for them to work with the project. Their actual functionality will go in effect once the
modules are installed into the project and the modules themselves are configured to perform
the actions we want.

Creating the `settings.json` file:

```jsonc
// settings.json
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",  // Sets default formatter to ESLint
  "editor.codeActionsOnSave": {         
    "source.fixAll": true               // Auto fix basic errors on save
  },
  "eslint.alwaysShowStatus": false,     // Hides the ESLint status bar; no need for server status
  "eslint.lintTask.enable": true,       // Allows the ESLint task to lint the whole workspace
  "emmet.triggerExpansionOnTab": true,  // Allows emmet to create the abbreviation on tab press
  "emmet.includeLanguages": {           // Allows the emmet abbreviations for react
    "javascript": "javascriptreact",
    "typescript": "typescriptreact",
  },
  "stylelint.enable": true,             // Ensure Stylelint is enabled
  "css.validate": false,                // Prevent VSCode from validating css files while using stylelint
  "scss.validate": false,               // Prevent VSCode from validating css files while using stylelint
  "auto-close-tag.disableOnLanguage": [ // Prevent the AutoCloseTag from making closing tags on types
    "typescript",
    "typescriptreact"
  ]
}
```

For development, and especially with React hooks, you're going to want to be able to debug the
code you're working on. To be able to do that with the VSCode IDE, we need to create a launch
configuration to work with the WebpackDevServer.

```jsonc
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:3000",           // The url webpack is configured to launch
      "webRoot": "${workspaceFolder}/src",      // Specifies the absolute path for the webserver root
      "sourceMapPathOverrides": {               // Specifies the sourcemap files location  
        "webpack:///src/*": "${webRoot}/*",
      }
    }
  ]
}
```

*Note:* You only need to turn off the VSCode scss validation if using sass.

For deployment and general development purposes we will include the `engines` property in our
`package.json` file for reference of the NodeJS environment to use. As of writing this the major
Node version being used is 16 and we prepend it the the caret symbol to allow any newer version:

```jsonc
// package.json
{
  "engines": {
    "node": "^16.x"
  }
}
```

# Installing the Development Dependencies

This is a basic tutorial that goes over the installation and configuration of the
modules, plugins, and config files for the app to have an easy-to-use, consistent,
and error free workflow.

## Create React App {#createReactApp}

Create the project [create-react-app](https://create-react-app.dev/docs/adding-typescript/#installation):  

```bash
npx create-react-app APP_NAME --template typescript
```

Change the directory to the app and then eject it to get control of the configuration:  

```bash
npm run eject
```

## Install ESLint {#installESLint}

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

## Install StyleLint {#installStyleLint}

Install the StyleLint to find problems in the style and can be combined with
Prettier to enforce a consistent style. It requires the standard config for
basic rules and the prettier config:

```bash
npm i --save-dev stylelint stylelint-config-standard stylelint-config-prettier 
stylelint-prettier
```

If using sass, then you want the shared config for scss as noted in the configuration above,
otherwise, you don't need to install it. If you are install sass and the config:

```bash
npm i --save-dev sass stylelint-config-standard-scss
```

Create the `.stylelintrc` configration file:

```jsonc
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",   // If using sass
    "stylelint-config-prettier"
  ],
  "rules": {
    "font-family-name-quotes": null,
    "declaration-colon-space-after": "always",
    "declaration-block-trailing-semicolon": "always",
    "block-opening-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always"
  }
}
```

The last two rules enforce a style to make styles easier to read by ensuring there is
a newline after the opening curly brace and before the closing brace:

```css
section {
  margin: 2rem;
}
```

## Install Prettier {#installPrettier}

```bash
npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

## TailwindCSS Config {#Tailwind}

`create-react-app` ships with TailwindCSS out of the box. We do need to create the
configuration file for it to work which we can do with it's default theme:

```bash
npx tailwindcss init -f
```

Then we need to add the location of the files where the Tailwind will be used in our
project in the `tailwind.config.js` file that has just been created:

```js
// tailwind.config.js
{
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
}
```

Now to enable the Tailwind styles, we have to add the directives to the `src/index.css`
file:

```css
/* index.css */
/* stylelint-disable at-rule-no-unknown -- TailwindCSS */
@tailwind base;
@tailwind components;
@tailwind utilities;
/* stylelint-enable at-rule-no-unknown */
```

**NOTE:** If using sass, you need to modify the rule for the scss Stylelint by prefixing the rule
with `scss`:

```css
/* index.scss */
/* stylelint-disable scss/at-rule-no-unknown -- TailwindCSS */
@tailwind base;
@tailwind components;
@tailwind utilities;
/* stylelint-enable scss/at-rule-no-unknown */
```

This just one point of why Stylelint is powerful as it gives us more control of the
validation of CSS files. The `@tailwind` directives have to be ignored to prevent
unwanted errors shouting at us.

To make any custom classes that consist of TailwindCSS classes:

```css
@layer components {
  .btn {
    @apply font-medium py-2 px-3 m-2 rounded
  }
}
```

## ESLint Config {#ESLintConfig}

Create the `.eslintrc` configuration file:

```jsonc
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
    "plugin:prettier/recommended",
    "plugin:import/recommended"
  ],
  "plugins": [
    "react", 
    "react-hooks", 
    "@typescript-eslint", 
    "jest"
  ],
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
    ],
    "space-before-function-paren": ["error", "never"]
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

## Prettier Config {#prettierConfig}

```jsonc
// .prettierrc
{
  "arrowParens": "always",
  "singleQuote": true,
  "printWidth": 100,
  "bracketSameLine": false,
  "trailingComma": "none",
  "semi": false
}
```

## Scripts {#scripts}

In `package.json` add the scripts for linting:

```jsonc
// scripts
{
  "lint": "eslint src/**/*.{js,jsx,ts,tsx}",
  "lint:fix": "eslint src/**/*.{js,jsx,ts,tsx} --fix",
  "lint:css": "stylelint src/**/*.{css,scss}",
  "lint:css:fix": "stylelint --fix src/**/*.{css,scss}",
}
```

# Git Hooks {#gitHook}

Hooks allow scripts to be run during certain phases of Git actions
such as the commit. We are primarily concerned with ensuring that
the files are error free and formatted before committing. This
requires two modules; [husky](https://github.com/typicode/husky) 
and [lint-staged](https://github.com/okonet/lint-staged):

```bash
npm i --save-dev husky lint-staged
```

## lint-staged {#lint-staged}

With lint-staged installed, it will do the actual work of running the
lint command and staging the new changes to the commit automatically.
We want to add the npm script for husky to execute in the pre-commit
hook:

```jsonc
// package.json
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": "eslint --cache --fix",
    "src/**/*.{css,scss}": "stylelint --cache --fix"
  }
}
```

The property values are glob patterns for the files to check and the
value is the command to execute for each file that is resolved from
the glob. In this case, all our js files are checked and fixed. Notice
how there is no path argument specified because it is called on each
file.

## husky {#husky}

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

Now any commit will first be verified with the pre-commit hook linting and if it failes with a 
non-zero exit code, it will cancel the commit. If you want to bypass the hook you would use the
`--no-verify` argument or the shorthand `-n`:

```bash
git commit -m --no-verify "test commit"
```

# Available Scripts {#availableScripts}

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

# Deployment

## Heroku

To deploy the app to Heroku we first need to make a minor fix that will otherwise cause the build
to fail. We need to install `fsevents` as a optional dependency because a gives an error of:
`fsevents not accessible from jest-haste-map`. We use this [solution](https://stackoverflow.com/questions/68021121/fsevents-not-accessible-from-jest-haste-map) to fix it:

```bash
npm i fsevents@latest -f --save-optional
```

**The following guide is based on the official [Heroku deployment with Git](https://devcenter.heroku.com/articles/git)**:

We will be deploying for a NodeJS backend so we want to create the application using Heroku's buildpack:

```bash
heroku create APP_NAME --buildpack heroku/nodejs
```

If the Heroku app already exists add the Heroku remote repository to our local Git list:

```bash
heroku git:remote -a HEROKU_APP_NAME
```

### Deploying Code

To deploy the code to the Heroku app:

```bash
git push heroku master
```

Where `heroku` is the name of the remote repository and we want to push to the main or master branch.

If you want to push code from a branch other than the local master branch such as `work`:

```bash
git push heroku work:master
```

Once the build suceeds you can open the app:

```bash
heroku open
```