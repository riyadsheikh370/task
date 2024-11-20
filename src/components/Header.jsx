import React from 'react'
import Container from './Container'
import { RiArrowUpWideFill } from "react-icons/ri";

const Header = () => {
    return (
        <>
            <section className='bg-[#F0F1F1] py-[8px] font-style'>
                <Container>
                    <div className="flex justify-between text-[#434343]">
                        <div className="flex items-center justify-between w-[30%]">
                            <a className='hover:text-[#F97316] flex items-center'>English<RiArrowUpWideFill /></a>
                            <a className='hover:text-[#F97316]'>Help Center</a>
                            <a className='hover:text-[#F97316]'>Helpline: 0964781656</a>
                        </div>
                        <div className="flex items-center justify-between w-[30%]">
                            <a className='hover:text-[#F97316]'>Become a Seller</a>
                            <a className='hover:text-[#F97316]'>Order Track</a>
                            <a className='hover:text-[#F97316]'>Sign up / Login</a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Header
