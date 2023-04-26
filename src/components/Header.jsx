import logo from '../assets/Logo.png';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { GrMenu } from 'react-icons/gr';
import { Link } from 'react-router-dom';
const Header = () => {
  const navLinks =[
    {
        id: 1,
        text: "Home",
        link: "/",
    },
    {
        id: 2,
        text: "About Us",
        link: "",
    },
    {
        id: 3,
        text: "Invest",
        link: "",
    },
    // {
    //     id: 4,
    //     text: "",
    //     link: "/login",
    // },
    // {
    //     id:5,
    //     text: "",
    //     link: "/sign-up",
    // },
    
  ]
  
  const [mobileIcon, setMobileIcon] = useState(false);
  const mobileHandler = () => {
    setMobileIcon((prev) => !prev);
  };

  return (
    <div className="flex justify-between pl-[60px] pr-[30px] py-3 items-center fixed w-full z-20 bg-white">
      <img src={logo} alt="logo" />

      <div onClick={mobileHandler} className="block md:hidden">
        {mobileIcon ? (
          <GrClose className="text-[30px]" />
        ) : (
          <GrMenu className="text-[30px]" />
        )}
      </div>

      {mobileIcon && (
        <nav className="grid absolute bg-white right-0 top-[70px] w-full px-[60px] py-2">
          <ul className="grid text-[#0000FF] gap-5 pr-5 ">
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Invest</li>
          </ul>
          <button className="bg-white text-[#0000FF] px-4 mt-5 py-2 rounded-xl">
          <Link to="/login">Log in</Link>
          </button>
          <button className="bg-[#0000FF] text-white px-4 mt-2 py-[5px] rounded-xl hover:bg-[#1AD5FE]">
            <Link to="/sign-up">Get Started</Link>
            </button>
        </nav>
      )}

        <nav className="hidden justify-center items-center md:flex">
          <ul className="flex text-[#0000FF] gap-10 pr-5 ">
          {navLinks?.map((links, i) =>(
                      <li key={i}>
                        <Link to={links?.link}>{links.text}</Link>
                      </li>  
                    ))}
          </ul>
          <div  className=" flex justify-center">
            <button className="bg-white text-[#0000FF] px-[20px] mt-5 pb-[20px] rounded-xl">
            <Link to="/login">Log in</Link>
            </button>
            <button className="bg-[#0000FF] text-white px-4 mt-2 py-[5px] rounded-xl hover:bg-[#1AD5FE]">
            <Link to="/sign-up">Get Started</Link>
            </button>
        </div>
        </nav>

        
    </div>
  );
};

export default Header;
