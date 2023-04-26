import React from "react"
import handphone from "../assets/handphone.png"
const Hsession1 =() => {
    return(
        <div className="bg-[#022B69] md:flex sm:grid justify-between pl-[60px] pt-[100px] pb-[20px] w-full">
            <div className="pt-[80px]">
                <h1 className="text-[#fff] font-medium text-3xl pb-[30px] md:w-[372px]">Save Invest & Earn Anywhere !</h1>
                <p className="text-[#fff] text-base md:w-[327px] pb-[30px]">Ipsum massa at cursus lacus erat lacus magna volutpat habitasse. Eu mauris et .</p>
                <button className="bg-[#fff] text-[#0000FF] px-12 mt-5 py-2 rounded-full hover:bg-[#1AD5FE]">
                     Get Started
                </button>
            </div>
            <div>
                <img src={handphone} alt="" />
            </div>

        </div>
    )
}


export default Hsession1