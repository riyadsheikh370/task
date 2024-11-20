import React from 'react';
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import Container from './Container';
import Logo from "../assets/logo.png"
import Logo2 from "../assets/logo2.png"

const Navbar = () => {

    return (
        <nav className='py-4 font-style'>
            <Container>
                <div className="flex items-center">
                    <div className="w-[20%]">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="w-[50%]">
                        <div className="relative">
                            <input
                                placeholder='Search Product'
                                className='bg-[#EFF0F5] w-full h-[45px] border-[1px] rounded-xl border-[#f5efef] outline-none px-2'
                            />
                            <div className="absolute text-white top-[50%] right-0 translate-y-[-50%] bg-[#F97316] p-[15px] rounded-xl">
                                <FaSearch />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-[15%]">
                        <a className='bg-[#EFF0F5] ml-5 p-[10px] border-[1px] rounded-xl border-[#f5efef]'><FaRegUser /></a>
                        <a className='bg-[#EFF0F5] mx-4 p-[10px] border-[1px] rounded-xl border-[#f5efef]'><FaRegHeart /></a>
                        <a className='bg-[#EFF0F5] p-[10px] border-[1px] rounded-xl border-[#f5efef]'><PiShoppingCartLight /></a>
                    </div>
                    <div className="w-[15%]">
                        <img src={Logo2} alt="" />
                    </div>

                </div>
            </Container>
        </nav>
    );
};

export default Navbar;