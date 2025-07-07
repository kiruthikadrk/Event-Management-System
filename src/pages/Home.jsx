import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>

      <div className="center-container">
        <h1>Luminas Event Organizers</h1>
        <p>We plan your Dream Weddings, Parties, and Corporate Events .</p>
        
        <p>When Elegance meets Expertise....</p>
        <p> Welcome to your Ultimate Event Destination.</p>
        
      </div>
    </>
  );
};

export default Home;