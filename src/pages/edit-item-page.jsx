import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux-store/users-slice";
import { userSchema, validate } from "../utils/form-validator";
import ErrorWrapper from "../common/error-wrapper";

const EditItemPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.data);
  const user = users.find((user) => user.id == params.id);

  if (!user) navigate("/notfound");

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await validate(userSchema, { name, email });
      dispatch(updateUser({ id: user.id, record: { name, email } }));
      navigate("/items");
    } catch (err) {
      setError(err);
    }
  };

  return user ? (
    <div>
      <h2>Edit User</h2>
      {error && <ErrorWrapper error={error} />}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  ) : (
    <div>Not Found</div>
  );
};

export default EditItemPage;
