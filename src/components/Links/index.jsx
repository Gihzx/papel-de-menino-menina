import { PrimaryButton } from "../atomo/button/Primary-button.jsx";
import PropTypes from "prop-types";
import { theme } from "../../theme.jsx";
import { isMobile } from "react-device-detect";

export function Links({ title, links, type }) {
  return (
    <>
      {links.map((link, index) => (
        <a href={link.href} key={index}>
          <PrimaryButton
            style={{
              backgroundColor:
                type === "primary"
                  ? "aliceblue"
                  : type === "secondary"
                  ? theme.colors.primary
                  : undefined,

              color:
                type === "primary"
                  ? theme.colors.primary
                  : type === "secondary"
                  ? "aliceblue"
                  : undefined,

              ...(isMobile ? { width: "100%" } : {}),
            }}
          >
            {title}
          </PrimaryButton>
        </a>
      ))}
    </>
  );
}

Links.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};
