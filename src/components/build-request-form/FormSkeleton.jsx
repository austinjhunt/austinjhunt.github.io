import React from 'react';
import { skeleton } from '../../helpers/utils';

const FormSkeleton = () => {
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
};

export default FormSkeleton;