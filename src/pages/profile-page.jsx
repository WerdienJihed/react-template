import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.data);
  return (
    <div>
      <h2>Fake Profile</h2>
      <img src="https://placekitten.com/200/200" alt="Profile" />
      <p>
        Full name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
    </div>
  );
};

export default ProfilePage;
