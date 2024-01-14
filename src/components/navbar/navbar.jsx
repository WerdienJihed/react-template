import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  return (
    <nav className="container" role="navigation">
      <ul>
        <li style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          home
        </li>
      </ul>
      <ul>
        <li style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
          login
        </li>
        <li style={{ cursor: "pointer" }} onClick={() => navigate("/profile")}>
          profile
        </li>
        <li style={{ cursor: "pointer" }} onClick={() => navigate("/about")}>
          about
        </li>
        <li style={{ cursor: "pointer" }} onClick={() => navigate("/items")}>
          items
        </li>
      </ul>
    </nav>
  );
};
