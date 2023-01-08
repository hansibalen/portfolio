import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Clock = () => {
  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
    setCurrentTime(newTime);
  };

  setInterval(updateTime, 1000);

  return (
    <motion.div>
      <span>ALBANIA {currentTime}</span>
    </motion.div>
  );
};

export default Clock;
