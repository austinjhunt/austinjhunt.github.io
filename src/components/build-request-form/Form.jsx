import React, { Fragment, useEffect, useState } from 'react';
import { ga, skeleton } from '../../helpers/utils';
import { FaLightbulb } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendEmail, verifyCaptcha } from './util';


const Form = ({
    sendEmailEndpoint,
    verifyCaptchaEndpoint,
    loading,
    googleAnalytics,
    setMessageSendStatus,
    setSendingMessage,

}) => {
    const [projectDescription, setProjectDescription] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [captchaVal, setCaptchaVal] = useState(null);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    // alternative: drawing
    const [requestType, setRequestType] = useState('development');

    useEffect(() => {
        if (captchaVal === null) {
            return
        }
        verifyCaptcha({
            token: captchaVal,
            verifyCaptchaEndpoint: verifyCaptchaEndpoint,
        }).then((response) => {
            if (response.success === false) {
                throw new Error('Captcha verification failed');
            }
            else { setCaptchaVerified(true) }
        }).catch(e => {
            setCaptchaVerified(false);
        })
    }, [captchaVal]);

    const handleSubmit = () => {
        if (!captchaVerified) {
            return;
        }
        setSendingMessage(true);
        if (googleAnalytics?.id) {
            ga.event({
                action: 'request_build_project',
                params: {
                    description: projectDescription,
                    email: email,
                },
            });
        }
        sendEmail({
            sendEmailEndpoint: sendEmailEndpoint,
            projectDescription: projectDescription,
            email: email,
            name: name,
            recipient: requestType === 'development' ? 'austincodescleanly@gmail.com' : 'austinsketches@gmail.com'
        }).then(sendEmailData => {
            console.log(sendEmailData);
            setMessageSendStatus('success');
            setSendingMessage(false);
        }).catch(e => {
            console.error(e);
            setMessageSendStatus('error');
            setSendingMessage(false);
        })
    }

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
                                                    What can I do for you?
                                                </span>
                                            </>
                                        )}
                                    </h5>
                                    <span className="ml-auto">
                                        <FaLightbulb fontSize={"2em"} style={{ display: 'inline-flex', marginRight: '0.5rem' }} className='' />
                                    </span>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="col-span-2 mb-5">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">
                                                    Please select the type of project I can help you with.
                                                </span>
                                            </label>
                                            <div className="flex flex-row w-100">
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setRequestType('drawing');
                                                    }}
                                                    type='button'
                                                    className={`m-1 text-sm justify-center inline-flex items-center font-bold uppercase px-3 py-3 rounded-full w-1/2 ${requestType === "drawing" ? "badge-secondary" : "bg-slate-800 text-gray-600 ring-1 ring-inset ring-gray-500/10"}`}
                                                >
                                                    Drawing
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setRequestType('development');
                                                    }}
                                                    type='button'
                                                    className={`m-1 text-sm justify-center inline-flex items-center font-bold uppercase px-3 py-3 rounded-full w-1/2  ${requestType === "development" ? "badge-secondary" : "bg-slate-800 text-gray-600 ring-1 ring-inset ring-gray-500/10"}`}
                                                >
                                                    Software or Web Development
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-2">
                                        <div className="grid grid-cols-1 gap-6">
                                            <div className="col-span-1">

                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">
                                                            What can I {requestType === 'development' ? 'build' : 'draw'} for you?
                                                        </span>
                                                    </label>
                                                    <textarea
                                                        placeholder={
                                                            requestType === 'development' ? 'I need to build a website that does X, Y, and Z.' : 'I want a realistic ballpoint drawing of my parents'
                                                        }
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
                                                        placeholder="John Doe"
                                                        className="input input-bordered input-primary"
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 mt-5 text-end">
                                        <ReCAPTCHA
                                            sitekey="6LddrK8pAAAAACxSTRA1SpOEcPYt_q4c0oSN7hgK"
                                            onChange={(val) => {
                                                setCaptchaVal(val);
                                            }}
                                        />
                                        <button
                                            disabled={captchaVal === null || !captchaVerified || loading}
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
            </div >
        </Fragment >
    );
}

export default Form;