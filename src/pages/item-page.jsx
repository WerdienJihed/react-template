import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

export default () => {
  const params = useParams();
  const users = useSelector((state) => state.users.data);
  const user = users.find((user) => user.id == params.id);

  return user ? (
    <div>
      <Link to="/items">Back </Link>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  ) : (
    <div>Not Found</div>
  );
};
