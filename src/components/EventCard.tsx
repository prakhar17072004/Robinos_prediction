import React from "react";
import Image from "next/image";
import logo from "../assets/ipl.svg"
import RCB from "../assets/rcb_log.png";
import CSK from "../assets/csk_logo.svg"

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
}) => {
  const saleEndDate = new Date(saleEnd * 1000).toLocaleString();

  return (
    <div className="event-card border  p-4 shadow-md bg  mt-[20px] ml-[105px] rounded-xl">
      <div className="flex justify-between ">
        <div>
        <div className="text-lg font-bold mb-2">{eventCode.split("-")[0]}</div>
      <p className="text-[18px] leading-tight	 font-medium line-clamp-2 ">
        {eventCode.split("-")[1]}
      </p>
        </div>
        <Image
                className="  text-[30px]  relative mb-2"
                src={logo}
                width={70}
                height={60}
                alt="Robinos"
                
              />
      </div>


      <div className="teams flex justify-between items-center mb-4 mt-4">
        <div className="team outline  rounded-xl p-6">
          <p className="text-center font-medium">{teamA.name}</p>
          <Image src={CSK} alt={teamA.name} className="w-16 h-16 mt-8" />
          
        </div>
        <div className="team outline rounded-xl p-6">
         <p className="text-center font-medium">{teamB.name}</p>
          <Image src={RCB} alt={teamB.name} className="w-16 h-16 mt-8" />
          
        </div>
      </div>
      {/* <ul className="conditions mb-4">
        {condition.map((cond, index) => (
          <li key={index} className="text-sm">
            - {cond}
          </li>
        ))}
      </ul> */}
      <p className="text-sm text-gray-600">Sale Ends: {saleEndDate}</p>
      <p className="text-sm text-gray-600">Token Name: {tokenName}</p>
      <a
        href={betLink.linkURL || "#"}
        className="text-blue-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {betLink.linkText || "View Details"}
      </a>
    </div>
  );
};

export default EventCard;
