import React from "react"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import quote from "../assets/quote.png"
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Hsession7 =() => {
    return(
        <div className="bg-[#E5E5E5] pt-[120px] pb-[250px] px-[60px]">
            <div className="text-center">
                <h1 className="text-[#022B69] font-semibold text-4xl pb-[60px]">See what others have to say</h1>
            </div>
            
           
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div className="md:flex sm:grid justify-center">
                <div className="bg-[#fff] text-[#022B69] text-center grid items-center mb-[5px] pr-[10px] rounded-lg mr-[40px] shadow-lg pl-[10px] pt-[5px] pb-[2px]">
                    <img src={img1} alt="" className="pl-[70px] pt-[20px] pb-[10px]"/>
                    <h1 className="font-bold pl-[45px]">Kolawole Tobi</h1>
                    <img src={quote} alt="" className="pl-[80px] pt-[0px] pb-[15px]"/>
                    <p className="md:w-[234px] pl-[15px] pb-[30px]">Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p>
                </div>

                <div className="bg-[#fff] text-[#022B69] text-center grid items-center mb-[5px] pr-[10px] rounded-lg mr-[40px] shadow-lg pl-[10px] pt-[5px] pb-[2px]">
                    <img src={img2} alt="" className="pl-[70px] pt-[20px] pb-[10px]"/>
                    <h1 className="font-bold pl-[45px]">Kolawole Tobi</h1>
                    <img src={quote} alt="" className="pl-[80px] pt-[0px] pb-[15px]"/>
                    <p className="md:w-[234px] pl-[15px] pb-[30px]">Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p>
                </div>

                <div className="bg-[#fff] text-[#022B69] text-center grid items-center mb-[5px] pr-[10px] rounded-lg mr-[40px] shadow-lg pl-[10px] pt-[5px] pb-[2px]">
                    <img src={img3} alt="" className="pl-[70px] pt-[20px] pb-[10px]"/>
                    <h1 className="font-bold pl-[45px]">Kolawole Tobi</h1>
                    <img src={quote} alt="" className="pl-[80px] pt-[0px] pb-[15px]"/>
                    <p className="md:w-[234px] pl-[15px] pb-[30px]">Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide> <div className="md:flex sm:grid justify-center">
                <div className="bg-[#fff] text-[#022B69] text-center grid items-center mb-[5px] pr-[10px] rounded-lg mr-[40px] shadow-lg pl-[10px] pt-[5px] pb-[2px]">
                    <img src={img1} alt="" className="pl-[70px] pt-[20px] pb-[10px]"/>
                    <h1 className="font-bold pl-[45px]">Kolawole Tobi</h1>
                    <img src={quote} alt="" className="pl-[80px] pt-[0px] pb-[15px]"/>
                    <p className="md:w-[234px] pl-[15px] pb-[30px]">Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p>
                </div>

                <div className="bg-[#fff] text-[#022B69] text-center grid items-center mb-[5px] pr-[10px] rounded-lg mr-[40px] shadow-lg pl-[10px] pt-[5px] pb-[2px]">
                    <img src={img2} alt="" className="pl-[70px] pt-[20px] pb-[10px]"/>
                    <h1 className="font-bold pl-[45px]">Kolawole Tobi</h1>
                    <img src={quote} alt="" className="pl-[80px] pt-[0px] pb-[15px]"/>
                    <p className="md:w-[234px] pl-[15px] pb-[30px]">Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p>
                </div>

                <div className="bg-[#fff] text-[#022B69] text-center grid items-center mb-[5px] pr-[10px] rounded-lg mr-[40px] shadow-lg pl-[10px] pt-[5px] pb-[2px]">
                    <img src={img3} alt="" className="pl-[70px] pt-[20px] pb-[10px]"/>
                    <h1 className="font-bold pl-[45px]">Kolawole Tobi</h1>
                    <img src={quote} alt="" className="pl-[80px] pt-[0px] pb-[15px]"/>
                    <p className="md:w-[234px] pl-[15px] pb-[30px]">Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p>
                </div>
            </div></SwiperSlide>
      
      ...
    </Swiper>
            
        </div>
        
    )
}


export default Hsession7