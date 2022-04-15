import * as React from "react"
import PropTypes from "prop-types"

import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

function AlertExample({ dispatchAlert }) {
  const [open, setOpen] = React.useState(false)
  const [timeLimit, setTimeLimit] = React.useState(10000)
  const [alertType, setAlertType] = React.useState("info")
  const [text, setText] = React.useState("")
  const [link, setLink] = React.useState("")
  const [id, setId] = React.useState(1)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const resetInputs = () => {
    setAlertType("info")
    setTimeLimit(10000)
    setLink("")
    setText("")
  }

  const handleClose = () => {
    setOpen(false)
    resetInputs()
  }

  const handleSubmit = () => {
    dispatchAlert({ text, link, timeLimit, alertType, type: "add", id })
    setTimeout(() => dispatchAlert({ type: "remove", id }), timeLimit)
    setId(id + 1)
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Alert
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Alert</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the form below to create a new alert.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="text"
            label="Text"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setText(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="link"
            label="Link"
            fullWidth
            variant="standard"
            onChange={(e) => setLink(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Time Limit"
            type="numbers"
            fullWidth
            variant="standard"
            onChange={(e) => setTimeLimit(e.target.value)}
          />

          <Select
            labelId="alert-type-select-label"
            id="alert-type-selector"
            value={alertType}
            label="Alert type"
            onChange={(e) => setAlertType(e.target.value)}
          >
            <MenuItem value="info">Info</MenuItem>
            <MenuItem value="success">Success</MenuItem>
            <MenuItem value="warning">Warning</MenuItem>
            <MenuItem value="error">Error</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create alert</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

AlertExample.propTypes = {
  dispatchAlert: PropTypes.func.isRequired,
}

export default AlertExample
