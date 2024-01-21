import { object, string } from "yup";

export const userSchema = object({
  name: string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: string().required("Email is required").email("Invalid email address"),
});

export const loginSchema = object({
  email: string().required("Email is required").email("Invalid email address"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const signupSchema = object({
  firstName: string().min(3, "First name must be at least 3 characters"),
  lastName: string().min(3, "Last name must be at least 3 characters"),
  email: string().required("Email is required").email("Invalid email address"),
  location: string(),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  bio: string().min(20, "Bio must be at least 20 characters"),
});

export const validate = async (schema, object) => {
  try {
    await schema.validate(object, { abortEarly: false });
  } catch (err) {
    let error = new Error();
    error.name = err.name;
    error.message = err.errors[0];
    throw error;
  }
};
