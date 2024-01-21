import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default () => {
  const user = useSelector((state) => state.auth.data);

  return user ? <Outlet /> : <Navigate to="/login" />;
};
