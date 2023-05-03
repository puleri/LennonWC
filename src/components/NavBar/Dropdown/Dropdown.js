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
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dropdown-trigger">
        {props.trigger}
      </div>
      <div
        className="dropdown-menu"
        style={{
            position: 'absolute',
          maxHeight: isOpen ? '500px' : '0',
          transition: 'max-height 0.5s ease-in-out',
          overflow: 'hidden'
        }}
      >
        {props.menu}
      </div>
    </div>
  );
};

export default DropdownMenu;
