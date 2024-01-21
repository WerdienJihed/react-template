import { useState } from "react";
import { signup } from "./../redux-store/auth-slice.js";
import { signupSchema, validate } from "../utils/form-validator";
import { useDispatch } from "react-redux";

export default () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      let userInfo = {
        firstName,
        lastName,
        email,
        location,
        password,
        bio,
      };
      await validate(signupSchema, userInfo);
      await dispatch(signup(userInfo)).unwrap();
    } catch (err) {
      if (err.name === "ValidationError" || err.name === "ServerError")
        setError(err.message);
      else {
        setError("Error signing up");
      }
    }
  };
  return (
    <div>
      <h1>Sign up page</h1>
      <span style={{ color: "red" }} id="error">
        {error}
      </span>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="firstName">
            First name
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="lastName">
            Last name
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
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
          <label htmlFor="location">
            Location
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
          <label htmlFor="bio">
            Bio
            <textarea
              id="bio"
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
