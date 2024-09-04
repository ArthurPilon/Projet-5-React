import React, { useState } from "react";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-title" onClick={toggleCollapse}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}
