import React from "react"
import { GrFormAdd } from 'react-icons/gr'
import { useState } from "react"
import { HiOutlineMinusSm } from 'react-icons/hi'

const Hsession4 = () => {
    const [show, setShow] = useState(false)
    const showHandler = () => {
        setShow((prev) => !prev)
    }
    const [show2, setShow2] = useState(false)
    const showHandler2 = () => {
        setShow2((prev) => !prev)
    }
    return (
        <div className="bg-[#F4F8FC] pt-[120px] pb-[60px] px-[60px]">
            <div className="text-center">
                <h1 className="text-[#022B69] font-semibold text-4xl pb-[40px]">Simple, Transparent Plans</h1>
            </div>

            <div className="md:flex sm:grid justify-center space-y-4 md:space-y-[0px] ">
                <div className="space-y-4">
                    <div className="bg-[#fff] text-black text-center items-center  mr-[10px] shadow-lg pl-[0px] pt-[5px] pb-[2px]">
                        <h1 className="font-semibold pt-[15px] text-4xl pb-[15px]">Basic</h1>
                        <h1 className="font-bold pl-[15px] text-[#022B69] pb-[15px]">7% for 2month</h1>
                        <p className="md:w-[381px] px-[22px] pb-[20px]">Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                        <button className="bg-[#0000FF] text-white px-[70px] mb-[30px] py-1 rounded-xl hover:bg-[#1AD5FE]">Get Started</button>
                    </div>

                    <div className=" bg-[#fff] text-black pl-[15px] pr-[15px] mr-[10px] shadow-lg pt-[15px] pb-[15px]">
                        <div className="flex items-center justify-between">
                            <h1 className="font-medium text-lg ">What’s Included</h1>
                            {show ? (
                                <HiOutlineMinusSm onClick={showHandler} />

                            ) : (
                                <GrFormAdd onClick={showHandler} />

                            )}
                        </div>
                        {show ? (
                            <div>
                                <ul className="list-disc px-[20px]">
                                    <li className="pb-[20px]">With a minimum of 5,000 you can  invest and earn</li>
                                    <li className="pb-[20px]">Earn 7% on any investment for 2month</li>
                                    <li className="pb-[20px]">Withdrawal process instant no delay</li>
                                </ul>
                            </div>
                        ) : (
                            null
                        )}


                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-[#fff] text-black text-center items-center  shadow-lg pl-[0px] pt-[5px] pb-[2px]">
                        <h1 className="font-semibold pt-[15px] text-4xl pb-[15px]">Plus</h1>
                        <h1 className="font-bold pl-[15px] text-[#022B69] pb-[15px]">22% for 6month</h1>
                        <p className="md:w-[381px] px-[22px] pb-[20px]">Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                        <button className="bg-[#0000FF] text-white px-[70px] mb-[30px] py-1 rounded-xl hover:bg-[#1AD5FE]">Get Started</button>
                    </div>

                    <div className=" bg-[#fff] text-black pl-[15px] pr-[15px] shadow-lg pt-[15px] pb-[15px]">
                        <div className="flex items-center justify-between">
                            <h1 className="font-medium text-lg  ">What’s Included</h1>
                            {show ? (
                                <HiOutlineMinusSm onClick={showHandler2} />

                            ) : (
                                <GrFormAdd onClick={showHandler2} />

                            )}
                        </div>
                        {show2 ? (
                            <div>
                                <ul className="list-disc px-[20px]">
                                    <li className="pb-[20px]">With a minimum of 5,000 you can  invest and earn</li>
                                    <li className="pb-[20px]">Earn 7% on any investment for 2month</li>
                                    <li className="pb-[20px]">Withdrawal process instant no delay</li>
                                </ul>
                            </div>
                        ) : (
                            null
                        )}


                    </div>
                </div>

            </div>
        </div>
    )
}


export default Hsession4