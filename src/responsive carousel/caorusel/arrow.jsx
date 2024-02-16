

import React, { useState } from 'react';

const Arrow = ({ className, style, onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='arrow-container'>

 
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        padding: "40px",
        width: "30px",
        height: "30px",
        margin:"20px",
        padding:"30px",
        cursor: "pointer",
        zIndex: 1,
        background: isHovered ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.2)", 
        opacity: isHovered ? 3 : 2, // New: Control opacity based on isHovered state
        transition: "opacity 0.3s ease", 
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
    </div>
  );
};

export default Arrow;
