import { theme } from "../../theme";
import PropTypes from "prop-types";
export function SectionName({ title }) {
  return (
    <section
      style={{
        backgroundColor: theme.colors.primary,
        padding: "0.5rem 1rem",
      }}
    >
      <h2 style={{ color: theme.colors.aliceblue }}>{title}</h2>
    </section>
  );
}

SectionName.propTypes = {
  title: PropTypes.string.isRequired,
};
