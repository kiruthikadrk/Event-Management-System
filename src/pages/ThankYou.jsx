import React, { useState } from 'react';
import axios from 'axios';

const ThankYou = () => {
  const [bookingData, setBookingData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const fetchBookingDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/luminas"); // ✅ Your backend URL
      console.log("Fetched Data:", response.data); // For debugging
      setBookingData(response.data);
      setShowDetails(true);
    } catch (error) {
      console.error("Error fetching booking details:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <h1 style={styles.heading}>🎉 Thank You!</h1>
      <p style={styles.subtext}>Your booking was submitted successfully.</p>
      <button style={styles.button} onClick={fetchBookingDetails}>View Details</button>

      {showDetails && bookingData.length > 0 && (
        <div style={styles.detailsBox}>
          <h2 style={styles.detailsTitle}>Booking Details</h2>
          {bookingData.map((item, index) => (
            <div key={index} style={styles.card}>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.phoneNumber}</p>
              <p><strong>Date:</strong> {item.dateOfFunction}</p>
              <p><strong>Function Type:</strong> {item.functionType}</p>
              <p><strong>Guests:</strong> {item.numberOfGuests}</p>
              <p><strong>Rooms:</strong> {item.numberOfRooms}</p>
              <hr style={styles.hr} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/06/07/18/05/people-2388588_1280.jpg")', // or your own background
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    zIndex: 1
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 0
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    zIndex: 2,
    textShadow: '2px 2px 6px rgba(0,0,0,0.8)'
  },
  subtext: {
    fontSize: '1.5rem',
    zIndex: 2,
    textShadow: '1px 1px 4px rgba(0,0,0,0.6)'
  },
  button: {
    zIndex: 2,
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  detailsBox: {
    zIndex: 2,
    marginTop: '30px',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#000',
    width: '80%',
    maxHeight: '50vh',
    overflowY: 'auto',
    borderRadius: '10px'
  },
  detailsTitle: {
    fontSize: '2rem',
    marginBottom: '10px'
  },
  card: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px'
  },
  hr: {
    border: '0.5px solid #ccc'
  }
};

export default ThankYou;
