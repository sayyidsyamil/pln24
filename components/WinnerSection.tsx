import React from 'react';
import Image from 'next/image';

const WinnerSection = () => {
    return (
        <div>
            <h1 className="text-xl font-semibold text-center my-4">Open Category</h1>
            <div className="relative w-full h-64">
                <Image
                    src="/winner/open.jpg"
                    alt="Open Category Winner"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <h1 className="text-xl font-semibold text-center my-4">Closed Category</h1>
            <div className="relative w-full h-64">
                <Image
                    src="/winner/close.jpg"
                    alt="Closed Category Winner"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    );
}

export default WinnerSection;
