import React from 'react';
import { Alert } from 'react-bootstrap';

// <---- MESSAGE FUNCTION - variant, children ---->
const Message = ({ variant, children }) => {
  const role = variant === 'danger' ? 'alert' : 'status';

  return (
    <Alert
      className={`burnsville-message burnsville-message--${variant}`}
      role={role}
      variant={variant}
    >
      {children}
    </Alert>
  );
};

// <---- MESSAGE FUNCTION - defaultProps ---->
Message.defaultProps = {
  variant: 'info',
};

// <---- EXPORT ---->
export default Message;
