import React from 'react'
import Image from 'next/image'

const WinnerSection = () => {
    return (
        <div>
            <h1 className="text-xl font-semibold text-center">Open Category</h1>
            <img src="/winner/open.jpg" alt="winneropencategory" className="w-full h-full object-contain" />
            <h1 className="text-xl font-semibold text-center">Closed Category</h1>
            <img src="/winner/close.jpg" alt="winnerclosecategory" className="w-full h-full object-contain" />
        </div>
    )
}

export default WinnerSection