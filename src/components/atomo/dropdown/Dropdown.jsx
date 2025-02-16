import * as S from "./style.jsx";

import { useState } from "react";

function Dropdown({ options, defaultValue }) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      className="dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="selected-value">{selectedValue}</div>

      {open && (
        <S.Div className="dropdown-menu">
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <a
                  href={option.link}
                  onClick={() => setSelectedValue(option.text)}
                >
                  {option.text}
                </a>
              </li>
            ))}
          </ul>
        </S.Div>
      )}
    </div>
  );
}

export default Dropdown;
