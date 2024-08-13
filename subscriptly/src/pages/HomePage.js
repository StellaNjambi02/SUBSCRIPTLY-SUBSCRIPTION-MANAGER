import React from 'react';
import './homePage.css';
import cancelConceptImage from '../assets/cancel-concept.png';


const HomePage = () => {
  return (
    <div className='homepage-container'>
      <h1 className='homepage-heading'>Welcome to Subscriptly!</h1>
      <p className='homepage-headingP'>Manage all your subscriptions in one place. Track expenses, set reminders, and never miss a renewal again.</p>
      <img src={cancelConceptImage} alt="Cancel Concept" /> {/* Use the imported image */}
    </div>
  );
};

export default HomePage;

