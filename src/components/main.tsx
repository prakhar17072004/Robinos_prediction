import React,{useState} from "react";

function main() {

    const [activeTab, setActiveTab] = useState<string>("ongoing");

  const handleTabClick = (tab: string): void => {
    setActiveTab(tab);
  };
  return (
    <div className=" ">
     

      {/* ----------versus--------- */}
      <div className=" mt-[10px] ml-[100px] z-10 w-[1050px] ">
        <h1 className="text-[30px] text-white lg:text-[40px] leading-[40px] mb-[10px] lg:mb-[20px] font-medium">
          Versus
        </h1>
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="items-center justify-center bg rounded-xl text-slate-500 dark:bg-slate-800 dark:text-slate-400 bg-gradient shadow p-[10px] font-medium text-[14px] lg:text-[16px] flex flex-col xl:flex-row gap-[10px]"
          data-orientation="horizontal"
        >
          <div className="flex bg-slate-950 rounded-2xl p-[5px] w-full xl:w-[60%]">
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === "ongoing"}
        aria-controls="radix-:R5f6la:-content-ongoing"
        id="radix-:R5f6la:-trigger-ongoing"
        className={`inline-flex items-center justify-center   p-[15px] font-medium transition-all ${
          activeTab === "ongoing" ? "bg-blue-600 text-white  rounded-xl" : " text-gray-300"
        }`}
        onClick={() => handleTabClick("ongoing")}
      >
        Ongoing<span className="hidden lg:block">&nbsp;Events</span>
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === "results"}
        aria-controls="radix-:R5f6la:-content-results"
        id="radix-:R5f6la:-trigger-results"
        className={`inline-flex items-center  justify-center whitespace-nowrap  px-[20px] font-medium transition-all ${
          activeTab === "results" ? "bg-blue-600 text-white rounded-xl" : " text-gray-300"
        }`}
        onClick={() => handleTabClick("results")}
      >
        <span className="hidden lg:block">Events&nbsp;</span>Results
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === "staked"}
        aria-controls="radix-:R5f6la:-content-staked"
        id="radix-:R5f6la:-trigger-staked"
        className={`inline-flex items-center justify-center whitespace-nowrap  px-[20px] font-medium transition-all ${
          activeTab === "staked" ? "bg-blue-600 text-white rounded-xl" : " text-gray-300"
        }`}
        onClick={() => handleTabClick("staked")}
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
                  className="lucide lucide-chevron-down h-4 w-4 opacity-50 "
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
