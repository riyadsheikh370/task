import React from 'react';
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import Container from './Container';
import Logo from "../assets/logo.png"
import Logo2 from "../assets/logo2.png"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navbar = () => {

    return (
        <nav className='py-4 font-style'>
            <Container>
                <div className="flex items-center">
                    <div className="flex w-[20%] justify-between">
                        <img src={Logo} alt="" />
                        <div className=" relative group overflow-hidden">
                            <a className='flex items-center bg-[#EFF0F5]  ml-5 p-[7px] border-[1px] rounded-xl border-[#f5efef]'>Category<IoIosArrowDown /></a>
                            <div className="absolute h-[458px] w-[300px] bg-white top-[60px] group-hover:top-[20px]  duration-300 ease-in-out left-[80px]">
                                <ul>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Womens’ & Girls’ Fashion <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Health & Beauty <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Watches, Bags, Jewellery <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Men's & Boys' Fashion <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Mother & Baby <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Electronics Devices <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>TV & Home Appliances <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Electronic Accessories <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Groceries <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Home & Lifestyle <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Sports & Outdoors <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Automobile  <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Computer and laptop  <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                    <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Pet Supplies <IoIosArrowForward className='text-white group-hover:text-[#F97316] text-[21px] duration-300 ease-in-out ml-5 group-hover:ml-6' /></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="w-[49%] lg:ml-[2%]">
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