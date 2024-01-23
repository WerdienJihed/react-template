const baseURL = "https://jsonplaceholder.typicode.com";
export const handleGetAll = async (endpoint) => {
  switch (endpoint) {
    case "users":
      return await getUsers();
    default:
      break;
  }
};

export const handleGet = async (endpoint, id) => {
  switch (endpoint) {
    case "users":
      return await getUser(id);
    default:
      break;
  }
};

export const handleCreate = async (endpoint, record) => {
  switch (endpoint) {
    case "users":
      return await createUser(record);
    default:
      break;
  }
};

export const handleUpdate = async (endpoint, id, record) => {
  switch (endpoint) {
    case "users":
      return await updateUser(id, record);
    default:
      break;
  }
};

export const handleDelete = async (endpoint, id) => {
  switch (endpoint) {
    case "users":
      return await deleteUser(id);
    default:
      break;
  }
};

const getUsers = async () => {
  try {
    const response = await fetch(`${baseURL}/users?_start=0&_limit=3`);
    const result = await response.json();
    return result;
  } catch (err) {
    let error = new Error();
    error.name = "ServerError";
    error.message = err.message;
    throw error;
  }
};

const getUser = async (id) => {
  try {
    const response = await fetch(`${baseURL}/users/${id}`);
    const result = await response.json();
    if (result.status == 400) throw new Error("Record not found!");
    return result;
  } catch (err) {
    let error = new Error();
    error.name = "ServerError";
    error.message = err.message;
    throw error;
  }
};

const createUser = async (record) => {
  try {
    const response = await fetch(`${baseURL}/users`, {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    let error = new Error();
    error.name = "ServerError";
    error.message = err.message;
    throw error;
  }
};

const updateUser = async (id, record) => {
  try {
    const response = await fetch(`${baseURL}/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(record),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    let error = new Error();
    error.name = "ServerError";
    error.message = err.message;
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const response = await fetch(`${baseURL}/users/${id}`, {
      method: "DELETE",
    });
    // eslint-disable-next-line no-unused-vars
    const result = await response.json();
    return id;
  } catch (err) {
    let error = new Error();
    error.name = "ServerError";
    error.message = err.message;
    throw error;
  }
};
