import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { theme } from "../../../theme";
import PropTypes from "prop-types";

export function DropdownMenu({ title, options }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <li style={{ borderBottom: "1px solid #ddd" }}>
      <button
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "18px",
          fontFamily: "Poppins",
          border: "none",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={handleToggleOptions}
      >
        {title}
        <IoIosArrowDown color={theme.colors.primary} size={20} />
      </button>

      {showOptions && (
        <div style={{ background: theme.colors.primary }}>
          {options.map((option, index) => (
            <a
              key={index}
              href={option.link}
              style={{
                display: "block",
                padding: "10px",
                color: theme.colors.aliceblue,
                textDecoration: "none",
              }}
            >
              {option.text}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};
