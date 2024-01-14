import { Navigate } from "react-router-dom";

export default ({ children }) => {
  const user = {};

  return !user ? <Navigate to="/login" /> : children;
};
