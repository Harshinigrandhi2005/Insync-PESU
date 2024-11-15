// Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date().getTime() + 15 * 24 * 60 * 60 * 1000; // Target time

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = targetTime - currentTime;

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (remainingTime < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div>{String(timeLeft.days).padStart(2, '0')}</div>:
      <div>{String(timeLeft.hours).padStart(2, '0')}</div>:
      <div>{String(timeLeft.minutes).padStart(2, '0')}</div>:
      <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
    </div>
  );
};

export default Countdown;