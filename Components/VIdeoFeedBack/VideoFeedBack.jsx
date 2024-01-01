import React from 'react'

const VideoFeedBack = () => {
  return (
    <>
       <div className="absolute top-[431.5rem] left-[0rem] w-[90rem] h-[56.06rem] text-center text-primary-dark">
        <div className="absolute top-[0rem] left-[4.38rem] w-[42.69rem] h-[12.5rem] text-left text-[1.75rem]">
          <div className="absolute top-[0rem] left-[0rem] flex flex-row items-center justify-start gap-[1.25rem]">
            <div className="relative w-[6.75rem] h-[0.56rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-primary-donkey-brown w-[5.5rem] h-[0.19rem]" />
              <div className="absolute top-[0.38rem] left-[1.25rem] bg-primary-donkey-brown w-[5.5rem] h-[0.19rem]" />
            </div>
            <div className="relative font-semibold">{`Video & Feedback`}</div>
          </div>
          <b className="absolute top-[3.13rem] left-[0rem] text-[3rem] leading-[4.69rem]">
            <p className="m-0">{`Let's See The Video &`}</p>
            <p className="m-0">{`What Client Say About Our Project `}</p>
          </b>
        </div>
        <img
          className="absolute top-[15rem] left-[0rem] w-[90rem] h-[37.5rem] object-cover"
          alt=""
          src="/rectangle-587@2x.png"
        />
        <div className="absolute top-[15.31rem] left-[0rem] bg-secondary-dark-gray w-[90rem] h-[37.5rem] opacity-[0.3]" />
        <div className="absolute top-[28.25rem] left-[58.13rem] w-[27.5rem] h-[27.81rem] text-secondary-dark-gray">
          <div className="absolute top-[0rem] left-[0rem] bg-white shadow-[0px_4px_40px_rgba(45,_45,_99,_0.4)] w-[27.5rem] h-[27.81rem]" />
          <div className="absolute top-[2.06rem] left-[7.81rem] font-medium text-primary-dark text-left">
            WHAT CLIENT'S SAY?
          </div>
          <div className="absolute top-[4.88rem] left-[0rem] bg-primary-donkey-brown w-[27.5rem] h-[0.06rem]" />
          <div className="absolute top-[5.56rem] left-[2.44rem] text-[1rem] leading-[1.56rem] inline-block w-[22.69rem] h-[4.88rem]">
            Lorem ipsum dolor sit amet consectetur. Elit ac vel nec augue
            pharetra lectus duis. Nullam dignissim pretium egestas non turpis
            turpis purus lobortis.
          </div>
          <img
            className="absolute top-[13.94rem] left-[11.5rem] rounded-[50%] w-[4.5rem] h-[4.5rem] object-cover cursor-pointer"
            alt=""
            src="/ellipse-88@2x.png"
          />
          <div className="absolute top-[18.69rem] left-[10.25rem] font-medium">
            Johan Smith
          </div>
          <div className="absolute top-[20.88rem] left-[9.31rem] text-[1rem] leading-[1.56rem]">
            Manager Of Alco. LTD
          </div>
          <img
            className="absolute top-[24.63rem] left-[11.88rem] w-[3.75rem] h-[1.11rem] object-cover cursor-pointer"
            alt=""
            src="/group-33@2x.png"
          />
        </div>
        <img
          className="absolute top-[24.31rem] left-[15.38rem] w-[7.13rem] h-[7.13rem] object-cover cursor-pointer animate-spin"
          alt=""
          src="/group-35@2x.png"
        />
        <div className="absolute top-[32.94rem] left-[13.13rem] font-medium text-white">
          VIEW PROMO VIDEO
        </div>
      </div>
    </>
  )
}

export default VideoFeedBack