import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const BookingForm = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const eventTypes = [
    'Wedding',
    'Private Party',
    'DJ Night',
    'Corporate Function',
    'Beach Wedding',
    'Birthday Party',
    'Concert',
    'Culturals'
  ];

  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    functionType: '',
    dateOfFunction: '',
    numberOfGuests: '',
    numberOfRooms: ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const submission = {
      name: form.name,
      email: form.email,
      phoneNumber: form.phoneNumber, // ✅ FIXED: now string
      functionType: form.functionType,
      dateOfFunction: new Date(form.dateOfFunction).toISOString().split('T')[0], // ✅ format date
      numberOfGuests: Number(form.numberOfGuests),
      numberOfRooms: Number(form.numberOfRooms)
    };

    await axios.post('http://localhost:8080/api/luminas', submission);

    setSuccessMsg('Booking submitted successfully!');
    setErrorMsg('');
    setForm({
      name: '',
      email: '',
      phoneNumber: '',
      functionType: '',
      dateOfFunction: '',
      numberOfGuests: '',
      numberOfRooms: ''
    });

    setTimeout(() => navigate('/thank-you'), 2000); // ✅ Redirect to Thank You page

  } catch (error) {
    const message = error.response?.data?.message || 'Something went wrong!';
    setErrorMsg(message);
    setSuccessMsg('');
  }
};




  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Client Booking Details</h2>

        {successMsg && <p style={styles.success}>{successMsg}</p>}
        {errorMsg && <p style={styles.error}>{errorMsg}</p>}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <div style={{ marginBottom: '1rem' }}>
          <label style={styles.label}>Select Function Type:</label>
          <div style={styles.radioGroup}>
            {eventTypes.map((type, index) => (
              <label key={index} style={styles.radioOption}>
                <input
                  type="radio"
                  name="functionType"
                  value={type}
                  checked={form.functionType === type}
                  onChange={handleChange}
                  required
                />
                <span style={{ marginLeft: '8px' }}>{type}</span>
              </label>
            ))}
          </div>
        </div>

        <input
          type="date"
          name="dateOfFunction"
          value={form.dateOfFunction}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="number"
          name="numberOfGuests"
          placeholder="Number of Guests"
          value={form.numberOfGuests}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="number"
          name="numberOfRooms"
          placeholder="Number of Rooms"
          value={form.numberOfRooms}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '1rem'
  },
  form: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem'
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%'
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    display: 'block'
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  radioOption: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    marginTop: '1rem',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    marginBottom: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ffe6e6',
    padding: '10px',
    borderRadius: '6px'
  },
  success: {
    color: 'green',
    marginBottom: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#e6ffe6',
    padding: '10px',
    borderRadius: '6px'
  }
};

export default BookingForm;