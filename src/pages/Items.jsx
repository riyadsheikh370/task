import React from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { SlBasket } from "react-icons/sl";


const Items = ({ item }) => {
    return (
        <>
            <div className='w-[96%] lg:py-5 py-2'>
                <div className="relative group overflow-hidden">
                    <img src={item.thumbnail} className="h-[300px]" alt="" />
                    <div className="bg-white absolute left-0 h-[120px] bottom-[-120px] w-full group-hover:bottom-0 duration-300 ease-in-out flex items-center justify-end">
                        <ul className='pr-5'>
                            <li className='flex items-center justify-end gap-x-4'>Add to Wish List <FaHeart /></li>
                            <li className='flex items-center justify-end gap-x-4 py-2'>Compare <TfiReload /></li>
                            <li className='flex items-center justify-end gap-x-4'>Add to Cart <SlBasket /></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between py-3">
                    <h2 className='text-[#262626] font-sans text-[20px] font-bold'>{item.title}</h2>
                    <p className='text-[#767676] font-sans text-[16px] font-bold'>${item.price}</p>
                </div>
            </div>
        </>
    )
}

export default Items
