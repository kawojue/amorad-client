import React from 'react'

const Breadcrumb = ({ title, desc }) => {
    return (
        <div className="mb-5 items-center text-center m-auto tracking-tight max-w-sm space-y-2">

            <h2 className="text-lg text-dark font-bold">
                {title}
            </h2>

            <p className='text-xs 2xl:text-sm text-textColor leading-5'> {desc} </p>

        </div>
    )
}

export default Breadcrumb