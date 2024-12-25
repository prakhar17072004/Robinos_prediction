import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ethers } from "ethers"; // Import ethers.js
import logo from "../assets/ipl.svg";
import RCB from "../assets/rcb_log.png";
import CSK from "../assets/csk_logo.svg";
import ABI from "../data/abi.json"

interface Team {
  name: string;
  img: string;
  loser: boolean;
}

interface EventCardProps {
  eventCode: string;
  betLink: { linkURL: string; linkText: string };
  saleActive: boolean;
  category: string;
  condition: string[];
  teamA: Team;
  teamB: Team;
  saleEnd: number;
  tokenName: string;
  tokenAddress: string; // Add token address
  contractAddress :"0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B"
}

const EventCard: React.FC<EventCardProps> = ({
  eventCode,
  betLink,
  saleActive,
  category,
  condition,
  teamA,
  teamB,
  saleEnd,
  tokenName,
  tokenAddress,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [betAmount, setBetAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const saleEndDate = new Date(saleEnd * 1000).toLocaleString();

  // Check wallet connection status on component load
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };

    checkWalletConnection();
  }, []);

  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTeam(null);
    setBetAmount("");
  };

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
  };

  const handleBetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBetAmount(e.target.value);
  };

  const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") {
      alert("Please install Metamask!");
      return;
    }
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const handleBet = async () => {
    if (!walletAddress) {
      alert("Please connect your wallet first!");
      return connectWallet();
    }

    if (!selectedTeam || !betAmount) {
      alert("Please select a team and enter a valid bet amount!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();

      const tokenContract = new ethers.Contract(
        tokenAddress,
         // Token address passed as a prop
        ABI,
      );

      const amountInWei = ethers.parseUnits(betAmount, 18); // Convert to WEI

      // Approve the betting contract to use the amount
      const tx = await tokenContract.approve(eventCode, amountInWei); // Use eventCode as the spender
      await tx.wait();

      alert(`Bet placed on ${selectedTeam.name} with amount ${betAmount}!`);
      closeModal();
    } catch (error) {
      console.error("Error placing bet:", error);
      alert("Failed to place the bet. Please try again!");
    }
  };

  return (
    <div className="event-card border p-4 shadow-md bg mt-[20px] ml-[105px] rounded-xl ">
      <div className="flex justify-between">
        <div>
          <div className="text-lg font-bold mb-2">{eventCode.split("-")[0]}</div>
          <p className="text-[18px] leading-tight font-medium line-clamp-2">
            {eventCode.split("-")[1]}
          </p>
        </div>
        <Image
          className="text-[30px] relative mb-2"
          src={logo}
          width={70}
          height={60}
          alt="Robinos"
        />
      </div>

      <div className="teams flex justify-between items-center mb-4 mt-4">
        <div className="team outline rounded-xl p-6">
          <p className="text-center font-medium">{teamA.name}</p>
          <Image src={CSK} alt={teamA.name} className="w-16 h-16 mt-8" />
        </div>
        <div className="team outline rounded-xl p-6">
          <p className="text-center font-medium">{teamB.name}</p>
          <Image src={RCB} alt={teamB.name} className="w-16 h-16 mt-8" />
        </div>
      </div>
      <p className="text-sm text-gray-600">Sale Ends: {saleEndDate}</p>
      <p className="text-sm text-gray-600">Token Name: {tokenName}</p>
      <p className="text-sm text-gray-600">
        Wallet: {walletAddress ? walletAddress : "Not Connected"}
      </p>
      {!walletAddress && (
        <button onClick={connectWallet} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Connect Wallet
        </button>
      )}
      {walletAddress && (
        <button onClick={openModal} className="text-blue-500 underline">
          {betLink.linkText || "BetLink"}
        </button>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] max-w-[500px] relative">
            <h2 className="text-xl font-bold mb-4 text-center">Place Your Bet</h2>
            <div className="flex justify-around mb-4">
              <div
                className={`p-4 cursor-pointer border rounded-lg ${
                  selectedTeam?.name === teamA.name ? "border-blue-500 shadow-lg scale-105" : ""
                } transition-transform transform`}
                onClick={() => handleTeamSelect(teamA)}
              >
                <Image src={CSK} alt={teamA.name} className="w-16 h-16 mb-2" />
                <p className="text-center font-medium">{teamA.name}</p>
              </div>

              <div
                className={`p-4 cursor-pointer border rounded-lg ${
                  selectedTeam?.name === teamB.name ? "border-blue-500 shadow-lg scale-105" : ""
                } transition-transform transform`}
                onClick={() => handleTeamSelect(teamB)}
              >
                <Image src={RCB} alt={teamB.name} className="w-16 h-16 mb-2" />
                <p className="text-center font-medium">{teamB.name}</p>
              </div>
            </div>
            <input
              type="number"
              placeholder="Enter Bet Amount"
              value={betAmount}
              onChange={handleBetAmountChange}
              className="w-full border p-2 rounded-lg mb-4"
            />
            <button
              onClick={handleBet}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Place Bet
            </button>
            <button
              onClick={closeModal}
              className="mt-4 text-red-500 underline w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
