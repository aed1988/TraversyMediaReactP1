import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
  const alertContext = useContext(AlertContext);
  
  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <h3>{alert.msg}</h3>
      </div>
    )
  )
}

export default Alert
