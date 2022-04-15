import * as React from "react"
import PropTypes from "prop-types"
import AlertComponent from "./AlertComponent"

function AlertManager({ alerts }) {
  return (
    <div>
      <h2>Alerts</h2>
      {alerts.map(({ text, link, timeLimit, alertType, id, key }) => (
        <AlertComponent
          alertTitle={alertType}
          key={key}
          id={id}
          timeLimit={timeLimit}
          text={text}
          link={link}
          alertType={alertType}
        />
      ))}
    </div>
  )
}

function useAlertReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { key: action.id, ...action }]
    case "remove":
      return state.filter((el) => el.id !== action.id)
    default:
      throw new Error()
  }
}

AlertManager.defaultProps = {
  alerts: [],
}

AlertManager.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      timeLimit: PropTypes.number.isRequired,
      alertType: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      key: PropTypes.number.isRequired,
    })
  ),
}

export { useAlertReducer }
export default AlertManager
