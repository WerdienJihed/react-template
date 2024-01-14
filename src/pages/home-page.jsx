import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h2>Welcome</h2>
      <p>
        This is a very simple home page. Explore this app by visiting those
        links.
      </p>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/items">Items</Link>
        </li>
      </ul>
    </div>
  );
};
