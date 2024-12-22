import React from "react";
import Image from "next/image";

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
    <div className="event-card border rounded p-4 shadow-md">
      <h2 className="text-lg font-bold mb-2">{eventCode.split("-")[0]}</h2>
      <p className="text-[18px] leading-tight	 font-medium line-clamp-2 ">
        {eventCode.split("-")[1]}
      </p>

      <div className="teams flex justify-between items-center mb-4">
        <div className="team">
          <Image src={teamA.img} alt={teamA.name} className="w-16 h-16" />
          <p>{teamA.name}</p>
        </div>
        <div className="team">
          <Image src={teamB.img} alt={teamB.name} className="w-16 h-16" />
          <p>{teamB.name}</p>
        </div>
      </div>
      <ul className="conditions mb-4">
        {condition.map((cond, index) => (
          <li key={index} className="text-sm">
            - {cond}
          </li>
        ))}
      </ul>
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
