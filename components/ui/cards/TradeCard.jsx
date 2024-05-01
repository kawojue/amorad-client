import React from 'react'
import TradeCardShape from './TradeCardShape'

const TradeCard = ({ bg, title, desc, comingsoon }) => {

    let color

    if (bg === '#E7EAEE40') {
        color = '#202046';
    } else if (bg === '#FFD7F1') {
        color = '#DE4897'
    } else if (bg === '#F1EDFE') {
        color = '#8E48EF'
    } else if (bg === '#E8F6FF') {
        color = '#2193F1'
    } else if (bg === '#EFF5F5') {
        color = '#42BD53'
    } else if (bg === '#F9FEED') {
        color = '#8BBE1B'
    } else if(bg === '#F4F6F6') {
        color = '#8E48EF'
    }

    return (
        <div className='flex-1 h-full relative p-5 2xl:p-6 rounded-lg tracking-tighter flex flex-col justify-center' style={{ backgroundColor: bg }}>

            <div className="w-[80%]">

                <h2 className='text-lg 2xl:text-xl font-semibold text-[#71717A] pb-1' style={{ color: color }}> {title} </h2>

                <p className={`text-[12px] 2xl:text-xs leading-[17.5px] ${comingsoon && 'mb-2'} `}> {desc} </p>

            </div>

            {comingsoon && <span className='text-xs font-bold underline-offset-1 underline text-primary' >Coming soon</span>}

            <TradeCardShape color={color} className='absolute bottom-0 right-0' />

        </div>
    )
}

export default TradeCard