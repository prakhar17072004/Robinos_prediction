import React, { useState, useEffect } from "react";
import metamaskLogo from "../assets/metamask.png";
import coinbase from "../assets/coinbase.png";
import rainbow from "../assets/rainbow.png";
import Image from "next/image";
import { ethers } from "ethers";

function Navbar() {
  const [network, setNetwork] = useState<string>("Telos");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [installedWallets, setInstalledWallets] = useState({
    MetaMask: false,
    Rainbow: false,
    Coinbase: false,
  });
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const networks = ["Telos", "Taiko", "Mantle"];
  const wallets = [
    { name: "MetaMask", logo: metamaskLogo, installUrl: "https://metamask.io/" },
    { name: "Rainbow", logo: rainbow, installUrl: "https://rainbow.me/" },
    { name: "Coinbase", logo: coinbase, installUrl: "https://www.coinbase.com" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      setInstalledWallets({
        MetaMask: !!window.ethereum.isMetaMask,
        Rainbow: !!window.ethereum.isRainbow,
        Coinbase: !!window.ethereum.isCoinbaseWallet,
      });
    }
  }, []);

  const handleWalletSelection = async (walletName: string): Promise<void> => {
    if (!window.ethereum) {
      alert("No Ethereum provider found. Please install a wallet.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer =   await provider.getSigner();
      const address = await signer.getAddress();
      const balanceInWei = await provider.getBalance(address);
      const balanceInEth = ethers.formatEther(balanceInWei);

      setWalletAddress(address);
      setBalance(balanceInEth);
      setIsModalOpen(false);
      console.log(`${walletName} connected:`, address);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const handleNetworkChange = (newNetwork: string): void => {
    setNetwork(newNetwork);
    setDropdownVisible(false);
  };

  const toggleDropdown = (): void => {
    setDropdownVisible((prev) => !prev);
  };

  const toggleModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex mt-[10px] ml-[850px] items-center">
        {walletAddress && balance ? (
          <div className="mr-4 text-white font-medium">
            <p>Address: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
            <p>Balance: {balance} ETH</p>
          </div>
        ) : null}
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
                    className="px-6 py-2 hover:bg-blue-600 rounded-xl cursor-pointer"
                    onClick={() => handleNetworkChange(net)}
                  >
                    {net}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          className="rounded-[10px] font-medium text-[16px] px-[28px] relative bg-blue-600 hover:bg-blue-400 transition cursor-pointer"
          onClick={toggleModal}
        >
          <div className="flex items-center justify-center h-[50px]">
            <span>Connect wallet</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-slate-900 text-white rounded-lg p-6 w-[350px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Connect Wallet</h2>
              <button
                className="text-gray-400 hover:text-gray-200"
                onClick={toggleModal}
              >
                ✕
              </button>
            </div>
            <div className="grid gap-4">
              {wallets.map((wallet) => (
                <div
                  key={wallet.name}
                  className="flex items-center p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 cursor-pointer"
                  onClick={() => handleWalletSelection(wallet.name)}
                >
                  <Image
                    src={wallet.logo}
                    alt={wallet.name}
                    className="w-12 h-12 mr-4 rounded-lg"
                  />
                  <div>
                    <span className="text-sm block">{wallet.name}</span>
                    {installedWallets? (
                      <span className="text-green-400 text-xs">Installed</span>
                    ) : (
                      <span className="text-blue-400 text-xs underline">
                        Install
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
