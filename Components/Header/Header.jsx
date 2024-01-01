import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <>
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[46.88rem]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-548@2x.png"
        />
        <div className="absolute h-[16.27%] w-[21.53%] top-[0%] right-[73.61%] bottom-[83.73%] left-[4.86%] bg-secondary-dark-gray" />
        <div className="absolute h-[16.27%] w-full top-[0%] right-[0%] bottom-[83.73%] left-[0%] bg-primary-dark opacity-[0.5]" />
        <div className="absolute h-[3.73%] w-[44.72%] top-[7.2%] right-[21.25%] bottom-[89.07%] left-[34.03%] flex flex-row items-start justify-start gap-[1.44rem]">
        <Link className='text-white no-underline' href="/">
           <div className="h-[1.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
            <div className="relative font-medium">Home</div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/24-outlined--directions--chevron--down@2x.png"
            />
          </div>
          </Link>
          <Link className='text-white no-underline' href="/Service">
          <div className="h-[1.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
            <div className="relative font-medium">Service</div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/24-outlined--directions--chevron--down@2x.png"
            />
          </div>
          </Link>
          <Link className='text-white no-underline' href="/Project">
          <div className="h-[1.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
            <div className="relative font-medium">Project</div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/24-outlined--directions--chevron--down@2x.png"
            />
          </div>
          </Link>
          <Link className='text-white no-underline' href="/Pages">
          <div className="h-[1.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
            <div className="relative font-medium">Pages</div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/24-outlined--directions--chevron--down@2x.png"
            />
          </div>
          </Link>
          <Link className='text-white no-underline' href="/News">
          <div className="h-[1.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
            <div className="relative font-medium">News</div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/24-outlined--directions--chevron--down@2x.png"
            />
          </div>
          </Link>
          <Link className='text-white no-underline' href="/Contact">
          <div className="h-[1.75rem] flex flex-row items-center justify-start gap-[0.63rem]">
            <div className="relative font-medium">Contact</div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover hidden"
              alt=""
            />
          </div>
          </Link>
        </div>
        <Link className='text-white no-underline' href="/">
        <div className="absolute top-[calc(50%_-_345px)] left-[calc(50%_-_599.5px)] flex flex-row items-center justify-start gap-[0.81rem] text-[3rem]">
          <img
            className="relative w-[4.31rem] h-[4.31rem] object-cover"
            alt=""
            src="/appicon@2x.png"
          />
          <b className="relative leading-[4.69rem]">SolArt</b>
        </div>
        </Link>
        <Link className='text-white no-underline' href="/">
        <div className="absolute h-[8.27%] w-[12.08%] top-[4.93%] right-[4.86%] bottom-[86.8%] left-[83.06%] flex flex-row items-center justify-start gap-[0.75rem]">
          <img
            className="relative w-[3rem] h-[3rem] object-cover"
            alt=""
            src="/group-1@2x.png"
          />
          <div className="shrink-0 flex flex-col items-start justify-start gap-[0.13rem]">
            <div className="relative font-medium">Call Anytime</div>
            <div className="relative text-[1rem] leading-[1.56rem]">
              +0987654321
            </div>
          </div>
        </div>
        </Link>
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