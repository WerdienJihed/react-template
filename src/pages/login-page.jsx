import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword } from "../services/auth-service";
import { loginSchema, validate } from "../utils/form-validator";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await validate(loginSchema, { email, password });
      const userProfile = await loginWithEmailAndPassword(email, password);
      if (userProfile) {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      <h1>Login page</h1>
      <span style={{ color: "red" }} id="error">
        {error}
      </span>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
