import React, { useState, useEffect } from 'react';

const useCountdownTimer = (initialTimeInSeconds) => {
  const [remainingTime, setRemainingTime] = useState(initialTimeInSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Run the effect once on mount

  const calculateTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
    return formattedTime;
  };

  return {
    remainingTime,
    formattedTime: calculateTime(remainingTime),
  };
};

export default useCountdownTimer;
