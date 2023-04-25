import React from "react"
import finance from "../assets/finance.png"
import payment from "../assets/payment.png"
import use from "../assets/use.png"
const Hsession4 =() => {
    return(
        <div className="bg-[#E5E5E5] pt-[120px] pb-[80px] px-[60px]">
            <div className="text-center">
                <h1 className="text-[#022B69] font-semibold text-4xl pb-[10px]">Zero Commissions</h1>
                <p className="text-[#3D3D46] text-sm pb-[35px]">Our Company non pretium eget etiam tempus. Vitae <br></br>sollicitudin in vulputate montes, </p>
            </div>
            
            <div className="md:flex sm:grid  justify-center">
                <div className="bg-[#fff] text-[#022B69] grid items-center mb-[5px] mr-[40px] shadow-lg pl-[10px] pt-[5px] pb-[2px] hover:bg-[blue]">
                    <img src={finance} alt="" className="pl-[70px] pt-[20px] pb-[10px]"/>
                    <h1 className="font-bold pl-[45px] pb-[15px]">Financial Stablity</h1>
                    <p className="w-[234px] pl-[15px] pb-[30px]">Our Payment gateway is secured with military grade encryption </p>
                </div>

                <div className="bg-[#fff] text-[#022B69] grid items-center mb-[5px] mr-[40px] shadow-lg pl-[10px] pt-[5px] pb-[2px] hover:bg-[blue]">
                    <img src={payment} alt="" className="pl-[70px] pt-[20px] pb-[10px]"/>
                    <h1 className="font-bold pl-[45px] pb-[15px]">Swift Payment</h1>
                    <p className="w-[234px] pl-[15px] pb-[30px]">Our Payment gateway is secured with military grade encryption </p>
                </div>

                <div className="bg-[#fff] text-[#022B69] grid items-center mb-[5px] mr-[40px] shadow-lg pl-[10px] pt-[5px] pb-[2px] hover:bg-[blue]">
                    <img src={use} alt="" className="pl-[70px] pt-[20px] pb-[10px]"/>
                    <h1 className="font-bold pl-[45px] pb-[15px]">Easy to use</h1>
                    <p className="w-[234px] pl-[15px] pb-[30px]">Our Payment gateway is secured with military grade encryption </p>
                </div>
            </div>
        </div>
    )
}


export default Hsession4