import PropTypes from "prop-types";

const ErrorWrapper = ({ error }) => {
  let errorMessage = "";
  if (typeof error === "string") errorMessage = error;
  if (typeof error === "object")
    if (error.name === "ServerError" || error.name === "ValidationError")
      errorMessage = error.message;

  return errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>;
};

ErrorWrapper.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }),
  ]).isRequired,
};

export default ErrorWrapper;
