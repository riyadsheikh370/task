import React from 'react';
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import Container from './Container';
import Logo from "../assets/logo.png"
import Logo2 from "../assets/logo2.png"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className='py-4 font-style'>
            <Container>
                <div className="flex items-center">
                    <div className="flex w-[20%] justify-between">
                        <img src={Logo} alt="" />
                        <div className=" relative group">
                            <a className='flex items-center bg-[#EFF0F5]  ml-5 p-[7px] border-[1px] rounded-xl border-[#f5efef]'>Category<IoIosArrowDown /></a>
                            <div className="absolute hidden group-hover:flex z-50 h-[480px] w-[300px] bg-white top-[42px] ease-out duration-300 ...">
                                <Link to="/product">
                                    <ul>
                                        {/* <div className="flex"> */}
                                        <li className='text-[#2E2E2E] pt-[30px] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center'>Womens’ & Girls’ Fashion <IoIosArrowForward className='ml-[60px]' /></li>
                                        {/* <div className="menu absolute h-[460px] w-[300px] border-r-[1px] border-r-[#F97316] border-l-[1px] border-l-[#F97316] bg-white top-[20px] left-[300px]">
                                            <h4 className='pl-2 pt-[5px]'>kids bags</h4>
                                        </div>
                                    </div> */}
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Health & Beauty <IoIosArrowForward className='ml-[129px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Watches, Bags, Jewellery <IoIosArrowForward className='ml-[56px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center'>Men's & Boys' Fashion <IoIosArrowForward className='ml-[78px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Mother & Baby <IoIosArrowForward className='ml-[136px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Electronics Devices <IoIosArrowForward className='ml-[99px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>TV & Home Appliances <IoIosArrowForward className='ml-[73px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Electronic Accessories <IoIosArrowForward className='ml-[74px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Groceries <IoIosArrowForward className='ml-[170px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Home & Lifestyle <IoIosArrowForward className='ml-[116px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Sports & Outdoors <IoIosArrowForward className='ml-[105px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Automobile  <IoIosArrowForward className='ml-[158px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Computer and laptop  <IoIosArrowForward className='ml-[86px]' /></li>
                                        <li className='text-[#2E2E2E] hover:text-[#F97316] text-[16px] py-1 duration-300 ease-in-out pl-3 hover:pl-6 flex items-center group'>Pet Supplies <IoIosArrowForward className='ml-[150px]' /></li>
                                    </ul>
                                </Link>
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