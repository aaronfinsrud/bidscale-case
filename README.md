# BidScale Case

## Screenshots
![Peek 2022-04-17 23-32](https://user-images.githubusercontent.com/52397472/163750527-b7ac5d68-4b7e-467e-9fcd-014afb354ad9.gif)


## Prompt
Develop a standalone front end react application that aligns with the following user stories. Please start your application by using create-react-app and then installing Material-UI. You may use additional libraries if you would like, but be prepared to explain your decisions to do so.

## Stories
1. Alert Reducer
- Alerts must time out after a default or provided timeLimit of 10 seconds and be removed from the state.
- timeLimit, text, link, alertType, id, alertTitle should be able to be passed into the dispatch command.
- A unique ID should be generated if not provided in dispatch
- Reducer must be importable to other components with import `useAlertReducer` from "./(../)*AlertManager.js"
- Reducer should allow adding or removing alerts.
- Must support the alertTypes ['error','warning','info','success']
2. Alert Manager
- AlertManager component should display all active Alerts.
- Alerts should be positioned on the top right hand side of the screen.
- AlertManager Component should be positioned in the App.js component.
- Key and id attributes of alerts should be the ID of the alert itself.
- This component cannot utilize any tags other than those provided via Material-UI
- Component should be a clickable link to provided link and not clickable if link is not provided.
- Alert Title should be displayed if provided.
3. Alerts Example
- Look and Feel of this component will not be judged.
- Material-UI is not necessary for this component.
- Would expect to see AlertExample component in App.js
- Submission button would fire dispatch to the AlertReducer

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
