import * as React from "react"
import PropTypes from "prop-types"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"

function AlertComponent({ text, link, alertType, alertTitle }) {
  const openInNewTab = (url) => {
    let revisedUrl = url
    if (revisedUrl.indexOf("www." === -1)) revisedUrl = `www.${revisedUrl}`
    if (revisedUrl.indexOf("https://") === -1)
      revisedUrl = `https://${revisedUrl}`
    const newWindow = window.open(revisedUrl, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }

  const handleClick = link
    ? () => {
        openInNewTab(link)
      }
    : () => {}

  return (
    <Alert onClick={handleClick} severity={alertType}>
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
