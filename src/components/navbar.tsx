import React from 'react'

function navbar() {
  return (
    <div>
         {/* ///////////Navbar//////////////// */}

      <div className="flex mt-[10px] ml-[850px]">
        <div className="rounded-[10px] font-medium text-14 relative  gradient  hidden md:flex mr-[10px]">
          <div className="flex items-center h-[50px] p-[2px] ">
            <button
              type="button"
              className="group h-full items-center rounded-[10px] bg-slate-900 border-2 border-blue-500 placeholder:text-white text-white outline-none disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 z-50 flex rounded-r-[10px] px-[15px]  min-w-52 justify-center border-none"
            >
              <span>
                <div className="flex items-center ">
                  <div className="flex items-center px-[10px]">
                    <div className="">Telos</div>
                  </div>
                </div>
              </span>
            </button>
          </div>
        </div>
        <div className="rounded-[10px] font-medium text-[16px] px-[28px] relative bg-blue-600 hover:bg-blue-400 transition cursor-pointer">
          <div className="flex items-center justify-center h-[50px]">
            <span>Connect wallet</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbar