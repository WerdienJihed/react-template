import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};
