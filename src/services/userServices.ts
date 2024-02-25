import { signIn, signOut } from "next-auth/react";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";
import { path } from "@/utils/routes";

export interface RegisterData {
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  email: string;
}

export const handleLogin = async (email: string, password: string) => {
  const result = await signIn("credentials", {
    redirect: false, // Prevents redirecting after signing in
    email,
    password,
    callbackUrl: `${window.location.origin}/${path.home}`, // Optional: Specify a callback URL
  });
  if (result?.url) {
    window.location.href = result.url; // Redirects to the specified callback URL or defaults to '/'
  } else {
    // Handle error, e.g., show an error message
    console.error("Failed to sign in");
  }
};

export const handleRegister = async (data: RegisterData) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    // Handle success
    console.log("Registration successful", response.data);
    // Redirect the user or update the UI as needed
    const signInResult = await signIn("credentials", {
      redirect: false, // Prevent automatic redirection
      email: data.email,
      password: data.password,
    });

    if (signInResult?.ok) {
      // Redirect user to the home or dashboard page on successful sign-in
      window.location.href = path.home; // Adjust as needed
    } else {
      // Handle sign-in failure (unlikely unless there's an issue with signIn or credentials)
      console.error("Sign-in after registration failed");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Registration failed", error.response?.data);
      // Display error message from server or fallback to a generic error message
    } else {
      // Handle non-Axios error here
      console.error("An unexpected error occurred", error);
    }
  }
};

export const HandleLogout = async () => {
  await signOut({ redirect: false });
  window.location.href = "/"; // Redirect to home page after logout
};
