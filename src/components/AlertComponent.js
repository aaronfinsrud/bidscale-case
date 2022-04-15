import * as React from "react"
import PropTypes from "prop-types"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import Button from "@mui/material/Button"

function AlertComponent({ text, link, alertType, alertTitle }) {
  const openInNewTab = (url) => {
    let revisedUrl = url
    if (revisedUrl.indexOf("www." === -1)) revisedUrl = `www.${revisedUrl}`
    if (revisedUrl.indexOf("https://") === -1)
      revisedUrl = `https://${revisedUrl}`
    const newWindow = window.open(revisedUrl, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }

  return (
    <Alert
      severity={alertType}
      action={
        link ? (
          <Button
            color="inherit"
            size="small"
            onClick={() => openInNewTab(link)}
          >
            Visit Link
          </Button>
        ) : (
          false
        )
      }
    >
      <AlertTitle>{alertTitle.toUpperCase()}</AlertTitle>
      {text}
    </Alert>
  )
}

AlertComponent.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  alertType: PropTypes.string.isRequired,
  alertTitle: PropTypes.string.isRequired,
}

export default AlertComponent
