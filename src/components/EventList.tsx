import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../services/api';
import EventCard from './EventCard';

const EventList: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError('Failed to load events');
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
