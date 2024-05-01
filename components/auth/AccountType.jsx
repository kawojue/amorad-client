import React from 'react'

const AccountType = ({ item, isSelected, onSelect }) => {

    const { value, title, desc } = item

    return (
        <div onClick={() => onSelect(value)} className="bg-white p-3 border-[#5862830A] w-full rounded-lg space-y-3 cursor-pointer">

            <div className="flex items-center justify-between">
                <h2 className="font-bold text-xs text-dark "> { title } </h2>

                <div className={`w-5 h-5 p-1 flex items-center justify-center ${isSelected ? 'bg-primary' : 'bg-secondary' } rounded-full`}>
                    <svg width="10" height="7" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4 8L11 1" stroke={`${isSelected ? '#FFF' : '#586283' }`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>

            <p className="text-xs font-light text-textColor"> { desc } </p>

        </div>
    )
}

export default AccountType