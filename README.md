# Multi Step Form

It's a simple step-by-step form using React/Context Api. Created to solve this challenge.
Build a GUI that at least:
-Show one page of the form at a time.

- Show the current page position of the form.
- Validate the input fields upon submission of each page.
- If there are any validation errors, show an error message in the form
  and block progress.
- Console.logs the resultant data on the final page.

## The project

### The structure

```
|- src/
   |- components
   |- containers
   |- context
   |- hooks
```

### Presentational components

First of all I created the `components` module containing all presentational components and within the folder a subfolder with the test for the components

```
|- components
    | - __tests__
        | -Steps.test.tsx
    |- Steps
        |- index.js
```

### Context

The `content` folder was created to combine the context, provider and consumers..

```
|- context
    | - FormContext.tsx
    |- index
```

## Layout

To help me to build web the interface I used several components from [react-semantic-ui](https://react.semantic-ui.com/).

## Technologies I use

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- **JavaScript** - _ES6+ (Babel)_;
- **UI Components** - _React, react-semantic-ui_;
- **State management** - _React Context that provides a way to share values between components without having to explicitly pass a prop through every level of the tree._;
- **Unit tests**: _Jest, Enzyme, React, testing libry_;
- **Clean code** - _Typescript, Strong types make your code more reliable when you work in larger and good opportunity to continue learning._;

## Getting started

I encourage you to use the `yarn` to install the packages, you'll enjoy the yarn.lock to a faster installation, and the scripts will be fast too.

### Install

##Prerequisites

You will need too install the dependecies

You’ll need to have Node >= 8.10 on your local development machine and
I am going to use yarn in my examples but you can use npm to install the various modules needed during the setup. If you don’t have yarn, you can see the installation instructions [here](https://yarnpkg.com/en/docs/install).

```
  $ yarn  start
```

### Start app

```
  $ yarn or npm start
```

This will runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Running tests

```
  yarn test
```

When you run yarn test, Jest will launch in watch mode\*. Every time you save a file, it will re-run the tests.

### Production build

```
  yarn build
```

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
