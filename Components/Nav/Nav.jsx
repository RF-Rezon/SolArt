import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <>
    <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-548@2x.png"
        />
        <div className="absolute h-[16.27%] w-[21.53%] top-[0%] right-[73.61%] bottom-[83.73%] left-[4.86%] bg-secondary-dark-gray" />
        <div className="absolute h-[16.27%] w-full top-[0%] right-[0%] bottom-[83.73%] left-[0%] bg-primary-dark opacity-[0.4]" />
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
    </>
  )
}

export default Nav