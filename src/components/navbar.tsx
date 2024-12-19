import React, { useState } from "react";

function Navbar() {
  const [network, setNetwork] = useState<string>("Telos");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const networks = ["Telos", "Taiko", "Mantle"];

  const handleNetworkChange = (newNetwork: string): void => {
    setNetwork(newNetwork);
    setDropdownVisible(false); // Hide dropdown after selecting a network
  };

  const toggleDropdown = (): void => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div>
      {/* ///////////Navbar//////////////// */}

      <div className="flex mt-[10px] ml-[850px]">
        <div className="rounded-[10px] font-medium text-14 relative gradient hidden md:flex mr-[10px]">
          <div className="flex items-center h-[50px] p-[2px] relative">
            <button
              type="button"
              className="group h-full items-center rounded-[10px] bg-slate-900 border-2 border-blue-500 placeholder:text-white text-white outline-none disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 z-50 flex rounded-r-[10px] px-[15px] min-w-52 justify-center border-none"
              onClick={toggleDropdown}
            >
              <span>{network}</span>
            </button>

            {dropdownVisible && (
              <div className="absolute top-[55px] left-2 bg-slate-700 text-white rounded-lg shadow-lg w-[200px] z-50">
                {networks.map((net) => (
                  <div
                    key={net}
                    className={`px-6 py-2 hover:bg-blue-600 rounded-xl cursor-pointer ${
                      net === network ? "" : ""
                    }`}
                    onClick={() => handleNetworkChange(net)}
                  >
                    {net}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="rounded-[10px] font-medium text-[16px] px-[28px] relative bg-blue-600 hover:bg-blue-400 transition cursor-pointer">
          <div className="flex items-center justify-center h-[50px]">
            <span>Connect wallet</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
