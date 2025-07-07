import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', form);
    navigate('/dashboard'); // Change this to your next page
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;