import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

const Home = () => {
  const [serverCode, setServerCode] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const validateForm = () => {
    const serverCodePattern = /^[a-z]+ [a-z]+ [a-z]+$/;
    if (!serverCodePattern.test(serverCode)) {
      setError("Invalid server code. Please use the format: word word word");
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      history.push(`/join?server=${encodeURIComponent(serverCode)}`);
    }
  };

  return (
    <div className="container">
      <h2>Join a Game</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="serverCode"
          value={serverCode}
          onChange={(e) => setServerCode(e.target.value)}
          placeholder="Enter server code (e.g., word word word)"
          required
        />
        <button type="submit">Join Game</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Home;
