import { useState } from "react";
import "./Dropdown.scss";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <span className={`arrow ${isOpen ? "rotate" : ""}`}>⌃</span>
      </div>

      {isOpen && <div className="dropdown__content">{children}</div>}
    </div>
  );
}

export default Dropdown;
