import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const ErrorMessage = () => {
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
        </div>);
}

export default ErrorMessage;