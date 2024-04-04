import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { ga, skeleton } from '../../helpers/utils';
import { FaLightbulb } from 'react-icons/fa';

const sendEmail = async ({ apiEndpoint, projectDescription, email, name }) => {
  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      subject: `austinjhunt.com - Build Request from ${email}`,
      body: projectDescription,
      from_email: email,
      from_name: name,
      recipient: 'austincodescleanly@gmail.com'
    }),
  });
  return response.json();
};

const Skeleton = () => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div className="card compact bg-base-100 shadow bg-opacity-40">
            <div className="card-body">
              <div className="mx-3 flex items-center justify-between mb-2">
                <h5 className="card-title">
                  {skeleton({ width: 'w-40', height: 'h-8' })}
                </h5>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-1 gap-6">
                  {skeleton({ width: 'w-full', height: 'h-12' })}
                  {skeleton({ width: 'w-full', height: 'h-12' })}
                  {skeleton({ width: 'w-full', height: 'h-12' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BuildRequestForm = ({ apiEndpoint, loading, googleAnalytics }) => {
  // render a What Can I Build For You form  
  const [projectDescription, setProjectDescription] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [messageSendStatus, setMessageSendStatus] = useState(null);
  const [sendingMessage, setSendingMessage] = useState(false);

  if (loading || sendingMessage) {
    return (
      <Skeleton />
    );
  } else if (messageSendStatus && messageSendStatus === 'success') {
    // show success message
    return (
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    <span className="text-base-content opacity-70">
                      Thanks for reaching out! I'll get back to you soon.
                    </span>
                  </h5>
                  <span className="ml-auto">
                    <FaLightbulb fontSize={"2em"} style={{ display: 'inline-flex', marginRight: '0.5rem' }} className='' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  } else if (messageSendStatus && messageSendStatus === 'error') {
    // show error message
    return (
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    <span className="text-base-content opacity-70">
                      Aw man! There was an error sending your message. Please try again later. OR you can email me at{" "}
                      <a href="mailto:austincodescleanly@gmail.com" className="text-primary">austincodescleanly@gmail.com</a>
                    </span>
                  </h5>
                  <span className="ml-auto">
                    <FaLightbulb fontSize={"2em"} style={{ display: 'inline-flex', marginRight: '0.5rem' }} className='' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (messageSendStatus === null) {

    return (
      <Fragment>
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="card compact bg-base-100 shadow bg-opacity-40">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-40', height: 'h-8' })
                      ) : (
                        <>
                          <span className="text-base-content opacity-70">
                            Can I Build Something For You?
                          </span>
                        </>
                      )}
                    </h5>
                    <span className="ml-auto">
                      <FaLightbulb fontSize={"2em"} style={{ display: 'inline-flex', marginRight: '0.5rem' }} className='' />
                    </span>
                  </div>
                  <form onSubmit={() => {
                    setSendingMessage(true);
                    if (googleAnalytics?.id) {
                      ga.event({
                        action: 'request_build_project',
                        params: {
                          description: projectDescription,
                          email: email,
                        },
                      });
                      sendEmail({
                        apiEndpoint,
                        projectDescription,
                        email,
                      }).then(data => {
                        console.log(data);
                        setMessageSendStatus('success');
                        setSendingMessage(false);
                      }).catch(error => {
                        console.error(error);
                        setMessageSendStatus('error');
                        setSendingMessage(false);
                      })
                    }
                  }}>
                    <div className="col-span-2">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="col-span-1">

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">
                                What can I build for you?
                              </span>
                            </label>
                            <textarea
                              placeholder="I'd like to build..."
                              value={projectDescription}
                              onChange={(e) => {
                                setProjectDescription(e.target.value);
                              }}
                              className="textarea h-24 textarea textarea-bordered textarea-primary"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">
                                What's your email?
                              </span>
                            </label>
                            <input
                              type="text"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              placeholder="supercoolemail@gmail.com"
                              className="input input-bordered input-primary"
                            ></input>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">
                                What's your name?
                              </span>
                            </label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                              placeholder="Hank Hill The Eleventh"
                              className="input input-bordered input-primary"
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 mt-5 text-end">
                      <button
                        type="submit"
                        className="btn btn-primary "
                      >
                        Send Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

BuildRequestForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default BuildRequestForm;
