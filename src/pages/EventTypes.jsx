import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventTypes = () => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate('/booking');
  };

  return (
    <div>
      <h2>Select Event Category</h2>
      <ul>
        <li>Wedding - Traditional / Beach</li>
        <li>Private Parties - Birthday / Family / Bachelorette / Farewell</li>
        <li>Music & Entertainment - DJ / Concert</li>
        <li>Corporate Functions - Success Party / Culturals</li>
      </ul>
      <button onClick={handleBook}>Book Now</button>
    </div>
  );
};

export default EventTypes;