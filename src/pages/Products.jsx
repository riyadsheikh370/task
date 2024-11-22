import React, { useContext } from 'react'
import { apiData } from '../components/ContextApi'
import Container from "../components/Container"
import Items from './Items';
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className='h-[50px] w-[50px] bg-[#00000033] rounded-full text-center leading-[50px] text-white absolute right-0 lg:right-[-11px] top-[36%] z-50'><FaLongArrowAltRight className='inline-block' /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className='h-[50px] w-[50px] bg-[#00000033] rounded-full text-center leading-[50px] text-white absolute left-0 lg:left-[-23px] top-[36%] z-50'><FaLongArrowAltLeft className='inline-block' /></div>
    );
}



const Products = () => {

    let data = useContext(apiData)
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    };


    return (
        <>

            <section>
                <Container>
                    <h2 className='text-[#262626] font-sans lg:text-[36px] text-[23px] font-bold mt-[70px]'>New Arrivals</h2>
                    <Slider {...settings}>
                        {data.map((item) => (
                            <Items item={item} />
                        ))}
                    </Slider>
                </Container>
            </section>

        </>
    )
}

export default Products
