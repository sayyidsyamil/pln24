import React from 'react';

// Assuming EventProps remains the same
interface EventProps {
  title: string;
  description: string;
  timestamp: string; // ISO format (e.g., "2024-04-27T12:00:00Z")
}

const Event: React.FC<EventProps> = ({ title, description, timestamp }) => {
  const currentDate = new Date();
  const eventDate = new Date(timestamp);
  const isFutureEvent = currentDate.getTime() < eventDate.getTime();

  // Calculate time difference for "time ago" or "time to" feature
  const diffInMilliseconds = currentDate.getTime() - eventDate.getTime();
  const diffInHours = Math.ceil(diffInMilliseconds / (1000 * 60 * 60));
  const diffInDays = Math.ceil(diffInHours / 24);

  let timeAgo = `${Math.abs(diffInDays)} days ${isFutureEvent ? 'to' : 'ago'}`;

  return (
    <li className='gap-10 mr-4'>
      <div className="timeline-start">{new Date(timestamp).getFullYear()}</div>
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="timeline-end timeline-box">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{description}</p>
        <span className="text-sm">{timeAgo}</span>
      </div>
    </li>
  );
};

export const Timeline: React.FC = () => {
  return (
    <ul className="flex flex-col lg:flex-row">
      <Event
        title="Event #1"
        description="This is the first event of the timeline..hjsbdchbsdhbchdshucb."
        timestamp="2024-04-01T00:00:00Z"
      />
      <Event
        title="Event #2"
        description="This is the second event of the timeline..."
        timestamp="2024-02-01T00:00:00Z"
      />
      <Event
        title="Event #3"
        description="This is the third event of the timeline..."
        timestamp="2024-04-25T00:00:00Z"
      />
    </ul>
  );
};
