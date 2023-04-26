import React from "react"
import mobile from "../assets/mobile.png"
import googleplay from "../assets/googleplay.png"
import appstore from "../assets/appstore.png"

const Hsession3 =() => {
    return(
        <div className=" bg-[#E5E5E5] md:flex sm:grid justify-between px-[60px] pt-[90px] pb-[90px]">
            <div>
                <img src={mobile} alt="" className="" />
            </div>

            <div className="text-center">
                <h1 className="font-semibold text-4xl text-[#022B69] pb-[40px]"> Invest.Earn</h1>
                <p className="text-base md:w-[369px] pb-[60px]">Our Company  non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes.</p>
                <div className="md:flex items-center">
                    <img src={googleplay} alt="" className="pb-[15px] pr-[15px]" />
                    <img src={appstore} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Hsession3