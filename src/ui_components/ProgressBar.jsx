import React from 'react';

const ProgressBar = ({ num, width }) => {
    return (
        <div className="w-full max-w-xs mx-auto">
            <div className="bg-gray-200 h-2 rounded-full mb-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
            </div>
            <p className="text-center text-sm font-semibold">{num} of 2</p>
        </div>
    );
};

export default ProgressBar;
