import React from "react"
import invest from "../assets/Invest.png"
import save from "../assets/save.png"
import grow from "../assets/grow.png"
const Hsession2 =() => {
    return(
        <div className="md:flex sm:grid justify-center bg-[#E5E5E5] pb-[80px] pl-[60px] pr-[80px]">
            <div className=" pt-[90px] ">
                <h1 className="text-black font-semibold text-3xl pb-[15px] pr-[298px]">Your guide to financial wellness</h1>
                <p className="text-base pr-[293px] pb-[15px]">We’ll help you invest, save and spend responsibly for just $1, $2 or $3 per month. No surprise fees, just surprise upgrades</p>
                <span className="text-[#0000FF] cursor-pointer hover:text-[black]">Learn more</span>
            </div>

            <div className="mt-[70px]">
                <div className="bg-[#fff] mb-[5px] mr-[40px] shadow-lg pl-[20px] pt-[15px] pb-[5px] hover:bg-[blue]">
                   <div className="flex">
                     <img src={invest} alt="" className="pr-[10px]"/>
                    <h1 className="font-bold">Invest your spare change</h1>
                   </div>
                    <p className="pl-[38px] pr-[px]">Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                </div>

                <div className="bg-[#fff] mb-[5px] mr-[40px] shadow-lg pl-[20px] pt-[15px] pb-[5px] hover:bg-[blue]">
                   <div className="flex">
                     <img src={save} alt="" className="pr-[10px]"/>
                    <h1 className="font-bold">Save for later</h1>
                   </div>
                    <p className="pl-[38px] pr-[px]">Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                </div>

                <div className="bg-[#fff] mr-[40px] shadow-lg pl-[20px] pt-[15px] pb-[5px] hover:bg-[blue]">
                   <div className="flex">
                     <img src={grow} alt="" className="pr-[17px]"/>
                    <h1 className="font-bold">Grow your knowledge</h1>
                   </div>
                    <p className="pl-[38px] pr-[px]">Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                </div>

                
            </div>
        </div>
    )
}


export default Hsession2