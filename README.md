This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## By pratiksha

1. Cleanup -
    1. Deleted App.js, logo.png, setupTests.js
    2. Counter.module.css -> Counter.css
    3. Delete whole <header></header> part from App.js
    4. Get rid of logo and counter of import from App.js
    5. Delete all the css App.css
    6. Folder features/counter -> features
    7. store.js - It is like onion which consist of all layers like app slice, user slice etc.
        Change counter to user all over
        Change CouterSlice.js to userSlice.js
        userSlice.js make all the change



2. Shortcut - 
    1. Go to component word's end like if <Sidebar /> -> sidebar| then ctrl+space to import it to app.
    
3. Installations -
    1. material ui - npm install @material-ui/core
    icons - npm install @material-ui/icons
    2. Firebase - npm i firebase

4. To deploy project on firebase - 
    1. npm install -g firebase-tools
    2. firebase login
    3. firebase init
    4. npm run build
    5. firebase deploy