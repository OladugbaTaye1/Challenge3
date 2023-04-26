import React from "react"
import padlock from "../assets/padlock.png"
const Hsession3 =() => {
    return(
        <div className="bg-[#022B69] md:flex justify-between pl-[100px] pb-[30px] pt-[100px]">
            <div>
                <img src={padlock} alt="" />
            </div>

            <div className="pr-[70px]  text-center pt-[20px]">
                <h1 className=" text-white text-3xl text-center font-semibold pb-[35px] md:w-[375px]">Security that's strong as oak</h1>
                <p className="text-white text-base text-center pb-[35px] md:w-[405px]">All your data is protected by bank-level security and 256-bit encryption.</p>
                <span className="text-[#1AD5FE] md:pl-[150px] cursor-pointer hover:text-[black]">Learn more</span>
                <p className="text-white text-base text-center pt-[35px] md:w-[395px]">Our Company  non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes.</p>
            </div>
        </div>
    )
}


export default Hsession3