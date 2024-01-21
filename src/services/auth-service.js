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
      throw new Error(
        "Invalid username or password. Please check your credentials and try again."
      );
    }
    // end placeholder code
  } catch (err) {
    const errMessage = err.message;
    console.error(errMessage, err);
    let error = new Error();
    error.name = "ServerError";
    error.message = errMessage;
    throw error;
  }
};

export const logout = async () => {
  try {
    // placeholder code ..
    // end placeholder code
  } catch (err) {
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
    debugger;
    const errMessage = err.message;
    console.error(errMessage, err);
    let error = new Error();
    error.name = "ServerError";
    error.message = errMessage;
    throw error;
  }
};

export const deleteAccount = async () => {
  try {
    // code ..
  } catch (err) {
    console.error("Error deleting account:", error);
    throw err;
  }
};
