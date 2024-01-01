import React from 'react';
import Nav from './../Nav/Nav';
const Header = () => {
  return (
    <>
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[46.88rem]">
        <Nav />
        <div className="absolute h-[0.13%] w-full top-[16.13%] right-[0%] bottom-[83.73%] left-[0%] bg-white" />
        <div className="absolute h-[84.13%] w-full top-[15.87%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(90.87deg,_#242424_0.59%,_rgba(155,_155,_255,_0)_72%)]" />
        <div className="absolute h-[0.67%] w-[7.64%] top-[31.33%] right-[87.5%] bottom-[68%] left-[4.86%] bg-primary-donkey-brown" />
        <b className="absolute top-[26.27%] left-[13.54%] text-[3rem] leading-[4.69rem]">
          #1
        </b>
        <b className="absolute top-[34.93%] left-[4.86%] text-[3.75rem]">
          <p className="m-0">WORLD CLASS DESIGN</p>
          <p className="m-0">{`FOR YOUR INTERIOR SET-UP `}</p>
        </b>
        <div className="absolute h-[9.87%] w-[47.36%] top-[61.87%] left-[4.86%] text-[1rem] leading-[1.56rem] inline-block">
          Lorem ipsum dolor sit amet consectetur. Id elementum libero vitae
          libero imperdiet in leo quis turpis. Enim aliquet lorem id etiam.Lorem
          ipsum dolor sit amet consectetur. Id elementum libero vitae libero
          imperdiet in leo quis turpis. Enim aliquet lorem id etiam.
        </div>
        <div className="absolute top-[calc(50%_+_198px)] left-[calc(50%_-_648px)] rounded-3xs bg-primary-donkey-brown flex flex-row items-start justify-start py-[0.81rem] px-[0.94rem] cursor-pointer">
          <div className="relative font-medium">OUR PORTFOLIO</div>
        </div>
      </div>
    </>
  )
}

export default Header