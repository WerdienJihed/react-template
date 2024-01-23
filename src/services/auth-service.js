export const loginWithEmailAndPassword = async (email, password) => {
  try {
    // placeholder code ..
    if (email === "john.doe@example.com" && password === "john9870#") {
      return {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        location: "USA",
      };
    } else {
      const error = new Error();
      error.name = "ServerError";
      error.message =
        "Invalid username or password. Please check your credentials and try again.";
      throw error;
    }
    // end placeholder code
  } catch (err) {
    console.error("Error login in with email and password", err);
    throw err;
  }
};

export const logout = async () => {
  try {
    // placeholder code ..
    // end placeholder code
  } catch (err) {
    console.error("Error login out :", err);
    throw err;
  }
};

export const signup = async (userInfo) => {
  try {
    // placeholder code ..
    return {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      location: userInfo.location,
      bio: userInfo.bio,
    };
    // end placeholder code
  } catch (err) {
    console.error("Error signing up: ", err);
    throw err;
  }
};

export const deleteAccount = async () => {
  try {
    // code ..
  } catch (err) {
    console.error("Error deleting account: ", err);
    throw err;
  }
};
