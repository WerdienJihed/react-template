import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux-store/auth-slice";

const UserNavLinks = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log("Enable to logout");
    }
  };

  return (
    <ul>
      <li style={{ cursor: "pointer" }} onClick={() => navigate("/about")}>
        about
      </li>
      <li style={{ cursor: "pointer" }} onClick={() => navigate("/items")}>
        items
      </li>
      <li
        style={{ cursor: "pointer", color: "red" }}
        onClick={() => navigate("/profile")}
      >
        {user.firstName} {user.lastName}
      </li>
      <li>
        <button onClick={handleLogout}>logout</button>
      </li>
    </ul>
  );
};

const GestNavLinks = () => {
  const navigate = useNavigate();
  return (
    <ul>
      <li style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
        login
      </li>
      <li style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>
        sign up
      </li>
      <li style={{ cursor: "pointer" }} onClick={() => navigate("/about")}>
        about
      </li>
    </ul>
  );
};

const Navbar = () => {
  const user = useSelector((state) => state.auth.data);
  const navigate = useNavigate();

  return (
    <nav className="container" role="navigation">
      <ul>
        <li style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          home
        </li>
      </ul>
      {user ? <UserNavLinks user={user} /> : <GestNavLinks />}
    </nav>
  );
};

UserNavLinks.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
};

export default Navbar;
