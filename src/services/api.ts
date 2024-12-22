export const fetchEvents = async (): Promise<any> => {
    const response = await fetch('/public/data/events.json');
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return response.json();
  };
  