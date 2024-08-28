# 0x04. TypeScript

## Description

This project is part of the ALX backend JavaScript curriculum. It involves understanding and implementing TypeScript, including creating interfaces, classes, functions, working with the DOM, using generic types, namespaces, declaration merging, ambient namespaces, and nominal typing.

## Learning Objectives

By the end of this project, you should be able to explain the following concepts without using Google:
- Basic types in TypeScript
- Interfaces, classes, and functions
- How to work with the DOM and TypeScript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient namespace to import an external library
- Basic nominal typing with TypeScript

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- All files will be transpiled on Ubuntu 18.04
- Your TypeScript scripts will be checked with Jest (version 24.9.*)
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.ts` extension when possible
- The TypeScript compiler should not show any warning or error when compiling your code

## Configuration Files

The following configuration files are provided for the project tasks:

### `package.json`
```json
{
  "name": "0x04-Typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}

