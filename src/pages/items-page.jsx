import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ItemsPage = () => {
  const { data, loading, error } = useSelector((state) => state.users);
  const navigate = useNavigate();

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div>
          <div className="grid">
            <button onClick={() => navigate("new")}>Add new user</button>
          </div>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <div className="grid">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`${item.id}`)}
                  >
                    {item.name} - {item.email}
                  </div>
                  <button onClick={() => navigate(`${item.id}/edit`)}>
                    Edit user
                  </button>
                  <button onClick={() => navigate(`${item.id}/delete`)}>
                    Delete user
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemsPage;
