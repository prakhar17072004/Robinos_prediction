import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../services/api'; // Make sure the file path is correct
import EventCard from './EventCard';

// Define types for event data
interface BetLink {
  linkURL: string;
  linkText: string;
}

interface Team {
  name: string;
  img: string;
  loser: boolean;
}

interface Event {
  eventCode: string;
  betLink: BetLink;
  saleActive: boolean;
  category: string;
  condition: string[];
  teamA: Team;
  teamB: Team;
  saleEnd: number;
  standardTokenAddress: string;
  tokenName: string;
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); // Type for events
  const [error, setError] = useState<string>(''); // Type for error
  const [activeTab, setActiveTab] = useState<string>("ongoing");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data: Event[] = await fetchEvents(); // Ensure the API returns data in the correct format
        setEvents(data);
      } catch (err) {
        setError('failed to load the data');
      }
    };
    loadData();
  }, []);

  if (error) return <p className="error">{error}</p>;
  if (!events.length) return <p>Loading events...</p>;

  return (
    <div className="event-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map(event => (
      
       <EventCard key={event.eventCode} {...event} />
      ))}
    </div>
  );
};

export default EventList;
