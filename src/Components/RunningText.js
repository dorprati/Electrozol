import React, { useState, useRef } from 'react';
import '../Styles/RunningText.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';


const RunningText = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const runningTextRef = useRef();

  const handlePauseResume = () => {
    setIsPaused(prev => !prev);
  };

  const handleSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value);
    setSpeed(newSpeed);
  };

  return (
    <div className="running-text-container">
      <motion.div className="running-text"
        style={{ animationPlayState: isPaused ? 'paused' : 'running', animationDuration: `${20 / speed}s` }}
        ref={runningTextRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Happy Passover! Upcoming phones: iPhone 14, Samsung Galaxy S23, Google Pixel 7, OnePlus 11, and more.
      </motion.div>
      <div>
        <Button variant="primary" onClick={handlePauseResume}>
          {isPaused ? <BsFillPlayFill /> : <BsFillPauseFill />}
        </Button>
        <input type="range" min="0.5" max="2" step="0.1" value={speed} onChange={handleSpeedChange} className="slider" />
        <span>{speed}x</span>
      </div>
    </div>
  );
};

export default RunningText;
