import React, { useState } from 'react';
import { Alert } from 'reactstrap';

function AlertDismiss(props) {
  const {
    message="Sou um alerta e posso ser dispensado!",
    style={}
  } = props

  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="info" isOpen={visible} toggle={onDismiss} style={style}>
      {message}
    </Alert>
  )
}

export default AlertDismiss