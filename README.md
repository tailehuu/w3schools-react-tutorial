# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Take away

- npm vs npx
- JSX

### ES6

- Classes
  - constructor
- Arrow Functions
- Variables
  - var, let, const
  - scope: global, function and block
- Array
- Modules
  - export
  - import
- JSX
  - stands for JavaScript XML
  - allow to write HTML in React
  - fragment: `<></>`
  - must be closed
  - class => className

### React

#### React Tutorial

- Components
  - like function but return HTML
  - type of component
    - Class
      - extends React.Components
      - requires a `render()` method
    - Function
  - props
    - are arguments passed into React components
    - are passed to components via HTML attributes
    - are read-only
  - events
    - camel case,ie: `onClick`
  - conditionals
    - `if`
    - `&&`
  - list
    - `.map`
    - keys: id attribute
  - Form
    - `<form onSubmit=...`
    - `useState`
  - Router
    - `react-router-dom`
      - `npm i -D react-router-dom`
  - state
    - built-in object
    - when `state` object changes, the component re-renders
  - `memo`
    - wrap components to avoid re-render
  - Styling React using CSS
    - inline styling, `style={{ color: "red" }}`
      - camel case: `backgroundColor` instead of `background-color`
    - javascript object
    - CSS stylesheet
    - CSS module
  - lifecycle of components
    - mounting
      - `constructor()`
      - `getDerivedStateFromProps()`
      - `render()`
      - `componentDidMount()`
    - updating
      - `getDerivedStateFromProps()`
      - `shouldComponentUpdate()`
      - `render()`
      - `getSnapshotBeforeUpdate()`
      - `componentDidUpdate()`
    - unmounting
      - `componentWillUnmount()`

#### React Hooks

- What is a hook?
  - added to React in version 16.8
  - will not work in class components
  - rules
    - only be called inside react function components
    - only be called at the top level of a component
    - can nod be conditional
- `useState` hook
  - manage state of components
  - set default state & method when state was changed