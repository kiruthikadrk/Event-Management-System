import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import EventTypes from './pages/EventTypes';
import BookingForm from './pages/BookingForm';
import ThankYou from './pages/ThankYou'; // ✅ ADD THIS LINE

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event-types" element={<EventTypes />} />
        <Route path="/booking/:eventId" element={<BookingForm />} />
        <Route path="/thank-you" element={<ThankYou />} /> {/* ✅ Registered correctly */}
      </Routes>
    </Router>
  );
};

export default App;