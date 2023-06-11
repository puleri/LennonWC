import React, { useState } from 'react';

const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    setIsOpen(!isOpen);
  }

  const handleMouseLeave = () => {
    setIsOpen(false);
  }

  return (
    <div
      className={props.className}
      onClick={handleHover}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    > 
      <div className="dropdown-trigger">
        {props.trigger}
      </div>
      <div
        className="dropdown-menu"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: isOpen ? '-30px' : '-50px',
          left: 0,
          padding: '5px 10px',
          height: isOpen ? '100vh' : '0',
          width:'100vw',
          transition: 'all 0.5s ease-in-out',
          overflow: 'hidden',
          backgroundColor: '#C6EDF4',
          borderRadius: '5px'
        }}
      >
        <div  
        onClick={handleMouseLeave}
        style={{
          position: 'absolute',
          top: '20px',
          right: '60px',
          color:'#0F3D54',
          fontSize:'29px', 
          padding: '20px',
          cursor:'pointer'
         }}
        >✕</div>
        {props.menu}
      </div>
    </div>
  );
};

export default DropdownMenu;
