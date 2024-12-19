import React from "react";

function main() {
  return (
    <div className=" ">
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

      {/* ----------versus--------- */}
      <div className=" mt-[10px] ml-[100px] z-10 w-[1050px]">
        <h1 className="text-[30px] text-white lg:text-[40px] leading-[40px] mb-[10px] lg:mb-[20px] font-medium">
          Versus
        </h1>
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="items-center justify-center rounded-xl text-slate-500 dark:bg-slate-800 dark:text-slate-400 bg-gradient shadow p-[10px] font-medium text-[14px] lg:text-[16px] flex flex-col xl:flex-row gap-[10px]"
          data-orientation="horizontal"
        >
          <div className="flex bg-slate-950 rounded-xl p-[5px] w-full xl:w-[50%]">
            <button
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="radix-:R5f6la:-content-ongoing"
              data-state="active"
              id="radix-:R5f6la:-trigger-ongoing"
              className="inline-flex items-center justify-center  rounded-[7px] px-[20px] font-medium  transition-all bg-blue-600"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Ongoing<span className="hidden lg:block">&nbsp;Events</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:R5f6la:-content-results"
              data-state="inactive"
              id="radix-:R5f6la:-trigger-results"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[7px] px-[20px] font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blueish data-[state=active]:text-white data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50 h-[50px] w-full"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="hidden lg:block">Events&nbsp;</span>Results
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:R5f6la:-content-staked"
              data-state="inactive"
              id="radix-:R5f6la:-trigger-staked"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[7px] px-[20px] font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blueish data-[state=active]:text-white data-[state=active]:shadow-sm dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=active]:bg-slate-950 dark:data-[state=active]:text-slate-50 h-[50px] w-full"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Staked<span className="hidden lg:block">&nbsp;Events</span>
            </button>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-[10px]">
            <div className="relative w-full lg:w-[33%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-white right-[13px] xl:right-[20px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <input
                type="text"
                className="h-[60px] flex w-full rounded-[10px] border border-slate-700 py-2 text-white outline-0 bg-transparent font-regular pl-[10px] pr-[40px] xl:pr-[50px] xl:pl-[20px] placeholder-white placeholder-opacity-100"
                placeholder="Search"
                value=""
              />
            </div>
            <div className="flex flex-col md:flex-row lg:grow gap-[10px]">
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:R1l9tf6la:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                className="flex h-[60px] items-center justify-between rounded-[10px] border border-slate-700 placeholder:text-white text-white disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 px-[10px] xl:px-[20px] w-full"
              >
                <span>All Tokens</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:R2l9tf6la:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                className="flex h-[60px] items-center justify-between rounded-[10px] border border-slate-700 placeholder:text-white text-white disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 px-[10px] xl:px-[20px] w-full"
              >
                <span>All Sports</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default main;
