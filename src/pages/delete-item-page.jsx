import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteUser } from "../redux-store/users-slice";

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const users = useSelector((state) => state.users.data);
  const user = users.find((user) => user.id == params.id);

  const handleDeleteUser = () => {
    dispatch(deleteUser(user.id));
    navigate("/items");
  };

  return user ? (
    <div>
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete the user: {user.name}?</p>

      <button onClick={handleDeleteUser}>Yes</button>
      <button onClick={() => navigate("/items")}>Cancel</button>
    </div>
  ) : (
    <div>Not Found</div>
  );
};
