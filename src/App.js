import * as React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import AlertManager, { useAlertReducer } from "./components/AlertManager"
import AlertExample from "./components/AlertExample"

function App() {
  const [alerts, dispatchAlert] = React.useReducer(useAlertReducer, [])
  return (
    <Box m={5}>
      <h1>BidScale Alerts</h1>
      <AlertExample dispatchAlert={dispatchAlert} />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item xs>
          <h2>Prompt</h2>
          Develop a standalone front end react application that aligns with the
          following user stories. Please start your application by using
          create-react-app and then installing Material-UI. You may use
          additional libraries if you would like, but be prepared to explain
          your decisions to do so.
        </Grid>

        <Grid item xs>
          <h2>User Stories</h2>
          <ul>
            <li>Alert Reducer</li>
            <ul>
              <li>
                Alerts must time out after a default or provided timeLimit of 10
                seconds and be removed from the state.
              </li>
              <li>
                timeLimit, text, link, alertType, id, alertTitle should be able
                to be passed into the dispatch command.
              </li>
              <li>
                A unique ID should be generated if not provided in dispatch
              </li>
              <li>
                Reduce must be importable to other components with import
                `useAlertReducer` from &quot;./(../)*AlertManager.js&quot;
              </li>
              <li>Reducer should allow adding or removing alerts.</li>
              <li>
                Must support the alertTypes: error, warning, info, success
              </li>
            </ul>

            <li>Alert Manager</li>
            <ul>
              <li>AlertManager component should display all active Alerts.</li>
              <li>
                Alerts should be positioned on the top right hand side of the
                screen.
              </li>
              <li>
                AlertManager Component should be positioned in the App.js
                component.
              </li>
              <li>
                Key and id attributes of alerts should be the ID of the alert
                itself.
              </li>
              <li>
                This component cannot utilize any tags other than those provided
                via Material-UI
              </li>
              <li>
                Component should be a clickable link to provided link and not
                clickable if link is not provided.
              </li>
              <li>Alert Title should be displayed if provided.</li>
            </ul>

            <li>Alerts Example</li>
            <ul>
              <li>Look and Feel of this component will not be judged.</li>
              <li>Material-UI is not necessary for this component.</li>
              <li>Would expect to see AlertExample component in App.js</li>
              <li>Submission button would fire dispatch to the AlertReducer</li>
            </ul>
          </ul>
        </Grid>

        <Grid item xs>
          <AlertManager alerts={alerts} dispatchAlert={dispatchAlert} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
