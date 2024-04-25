import React, { useState, useRef } from 'react';
import '../Styles/RunningText.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

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
        Happy Passover!
      </motion.div>
      <div>
        <Button variant="primary" onClick={handlePauseResume}>{isPaused ? 'Resume' : 'Pause'}</Button>
        <input type="range" min="0.5" max="2" step="0.1" value={speed} onChange={handleSpeedChange} className="slider" />
        <span>{speed}x</span>
      </div>
    </div>
  );
};

export default RunningText;
