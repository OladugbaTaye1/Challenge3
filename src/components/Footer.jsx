import React from 'react'
import Logo from '../assets/Logo2.png'
import media from '../assets/media.png'

const Footer = () => {
  return (
    <div className='flex-col justify-center w-full'>
        <footer className='bg-[#022B69] px-[30px] py-[30px] md:flex sm:grid items-center gap-8 justify-center lg:justify-evenly border-t-2 border-b-2 border-[#1AD5FE]'>
            <div>
                <img className='mb-2 pt-[25px]' src={Logo} alt='logo'/>
                
            </div>
            <div>
                <p className='text-white text-[10px] pb-[10px] pt-[60px] font-bold lg:text-[14px]'>Company</p>
                <p className='text-[#1AD5FE] text-[10px] pb-[10px] font-light lg:text-[14px]'>Home</p>
                <p className='text-[#1AD5FE] text-[10px] pb-[10px] font-light lg:text-[14px]'>About Us</p>
                <p className='text-[#1AD5FE] text-[10px] pb-[10px] font-light lg:text-[14px]'>Investment Plan</p>
                <p className='text-[#1AD5FE] text-[10px] font-light lg:text-[14px]'>Mail Us</p>
            </div>
            <div>
                <p className='text-white text-[10px] pb-[10px] pt-[px] font-bold lg:text-[14px]'>Product</p>
                <p className='text-[#1AD5FE] text-[10px] pb-[10px] font-light lg:text-[14px]'>Saving Plan</p>
                <p className='text-[#1AD5FE] text-[10px] font-light lg:text-[14px]'>Value Plan</p>
            </div>
            <div>
                <p className='text-white text-[10px] pb-[10px] pt-[15px] font-bold lg:text-[14px]'>Quick links</p>
                <p className='text-[#1AD5FE] text-[10px] pb-[10px] font-light lg:text-[14px]'>Create an account</p>
                <p className='text-[#1AD5FE] text-[10px] font-light lg:text-[14px]'>Log In</p>
                <p className='text-[#1AD5FE] text-[10px] font-light lg:text-[14px]'>Instructions</p>
            </div>
            <div>
                <p className='text-white text-[10px] pb-[10px] pt-[85px] font-bold lg:text-[14px]'>Connect</p>
                <img src={media} alt="" className='pb-[10px]' />
                <p className='text-[#1AD5FE] pt-[10px] pb-[10px] text-[10px] font-light lg:text-[14px]'>support@tompurse.com</p>
                <p className='text-[#1AD5FE] text-[10px] pb-[10px] font-light lg:text-[14px]'>+2345685921</p>
                <p className='text-[#1AD5FE] text-[10px] font-light lg:text-[14px] w-[209px]'>Suite C201, Plot 1245 Adetokunbo Ademola Crescent,Wuse 2, Abuja, FCT</p>
            </div>

        </footer>

    </div>
  )
}

export default Footer
