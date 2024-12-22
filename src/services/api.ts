// src/services/api.ts

export const fetchEvents = async (): Promise<any[]> => {
  const events = (await import('../data/telos.json')).default;
  return events;
};
