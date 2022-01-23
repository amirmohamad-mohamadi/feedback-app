import PropTypes from "prop-types";

const Button = ({ children, type, version, isDiabled }) => {
  return (
    <button type={type} disabled={isDiabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  isDiabled: false,
  version: "primary",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDiabled: PropTypes.bool,
  version: PropTypes.string,
};

export default Button;
