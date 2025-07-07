import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const navigate = useNavigate();

  const events = [
    { id: 1, name: 'Wedding' },
    { id: 2, name: 'Private Party' },
    { id: 3, name: 'DJ Night' },
    { id: 4, name: 'Corporate Function' },
    { id: 5, name: 'Beach Wedding' },
    { id: 6, name: 'Birthday Party' },
    { id: 7, name: 'Concert' },
    { id: 8, name: 'Culturals' }
  ];

  const handleSearch = () => {
    const results = events.filter(event =>
      event.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredEvents(results);
    setShowResults(true);
  };

  const handleSelectEvent = (id) => {
    navigate('/booking/${id}'); // ✅ Correct syntax
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-search">
        <input
          type="text"
          placeholder="Search event types..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {showResults && (
        <div className="search-results">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="result-item">
                <button onClick={() => handleSelectEvent(event.id)}>
                  {event.name}
                </button>
              </div>
            ))
          ) : (
            <p>No matching events found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;