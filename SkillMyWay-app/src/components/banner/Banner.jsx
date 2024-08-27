import React from "react";

function Banner() {
  return (
    <div className="md:mt-2">
      <div className="relative flex flex-col lg:flex-row items-center bg-slate-50 ml-0 md:ml-5">
        <div className="w-full lg:w-1/3 p-8 text-slate-900">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">
            Navigate Your Learning with <span className="text-teal-900">Precision!!!</span>
          </h1>
          <p className="text-sm md:text-lg">
            Our roadmap empowers you to develop skills effectively and
            efficiently, aligning your efforts with your goals. 
          </p>
          <div className="flex justify-between mt-3 md:mt-4">
          <button className="text-slate-50 w-20 md:w-28 btn bg-teal-800 text-sm md:text-lg font-thin md:mt-6 hover:bg-teal-900">About</button>
          <button className="text-teal-800 btn w-20 md:w-28 bg-slate-50 text-sm md:text-lg md:mt-6 hover:bg-teal-800 outline outline-teal-800 hover:text-slate-50 hover:outline-none hover:font-thin">Explore</button>
            </div>          
        </div>
        <div className="w-full lg:w-2/3 h-[240px] lg:h-[640px]">
          <img
            src="/file.png"
            className="w-full h-full object-cover scale-95"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
