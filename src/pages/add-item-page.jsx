import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSchema, validate } from "../utils/form-validator";
import { addUser } from "../redux-store/users-slice";

const AddItemPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validate(userSchema, { name, email });
      await dispatch(addUser({ name, email })).unwrap();
      navigate("/items");
    } catch (err) {
      if (err.name === "ValidationError" || err.name === "ServerError")
        setError(err.message);
      else {
        setError("Error creating user");
      }
    }
  };

  return (
    <div>
      <h2>Create New User</h2>
      <span style={{ color: "red" }} id="error">
        {error}
      </span>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default AddItemPage;
