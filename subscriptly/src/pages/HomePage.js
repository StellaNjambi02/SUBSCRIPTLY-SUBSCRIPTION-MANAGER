import React, { useState, useEffect } from 'react';
import Table from "../components/Table";
import "./HomePage.css";
import SubscriptionsForm from "../components/SubscriptionsForm";
import Footer from '../components/Footer';
import Notification from '../components/Notification';

const HomePage = ({ user }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [notification, setNotification] = useState(null); // State for notifications

  useEffect(() => {
    const fetchSubscriptions = () => {
      if (user) {
        fetch(`http://localhost:5000/users?name=${user}`)
          .then(res => {
            if (!res.ok) {
              throw new Error('Network Response Was Not Ok');
            }
            return res.json();
          })
          .then(users => {
            if (users.length > 0) {
              setSubscriptions(users[0].subscriptions);
            }
          })
          .catch(error => console.error('Error fetching subscriptions:', error));
      }
    }
    fetchSubscriptions();
  }, [user]);

  const handleDelete = (id) => {
    setNotification({
      message: "You are about to cancel your subscription!",
      onClose: () => setNotification(null) // Close the notification when button is clicked
    });
    setSubscriptions(prev => prev.filter((subscription) => subscription.id !== id));
  };

  const handleAddSubscription = (newSubscription) => {
    setSubscriptions([...subscriptions, newSubscription]);
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2 id="message">Welcome to the Homepage, {user}!</h2>
      <SubscriptionsForm user={user} onAddSubscription={handleAddSubscription} />
      <Table subscriptions={subscriptions} handleDelete={handleDelete} />
      <Footer />
      {notification && <Notification message={notification.message} onClose={notification.onClose} />}
    </div>
  );
};

export default HomePage;
