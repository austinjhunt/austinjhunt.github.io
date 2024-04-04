import { useState } from 'react';
import PropTypes from 'prop-types';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';
import FormSkeleton from './FormSkeleton';
import Form from './Form';

const BuildRequestForm = ({ sendEmailEndpoint, verifyCaptchaEndpoint, loading, googleAnalytics }) => {
  // render a What Can I Build For You form  

  const [messageSendStatus, setMessageSendStatus] = useState(null);
  const [sendingMessage, setSendingMessage] = useState(false);

  if (loading || sendingMessage) {
    return <FormSkeleton />
  } else if (messageSendStatus && messageSendStatus === 'success') {
    return <SuccessMessage />;
  } else if (messageSendStatus && messageSendStatus === 'error') {
    return <ErrorMessage />;
  } else if (messageSendStatus === null) {
    return <Form
      sendEmailEndpoint={sendEmailEndpoint}
      verifyCaptchaEndpoint={verifyCaptchaEndpoint}
      setMessageSendStatus={setMessageSendStatus}
      loading={loading}
      googleAnalytics={googleAnalytics}
      setSendingMessage={setSendingMessage}

    />
  }
};

BuildRequestForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default BuildRequestForm;
