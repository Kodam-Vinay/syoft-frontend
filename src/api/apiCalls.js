import { API_URL } from "../utils/constants";

export const register = async (userDetails, setIsError, setError) => {
  try {
    const url = `${API_URL}/user_registeration/api/user_registeration`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data?.status) {
      setIsError(false);
      return data;
    } else {
      setIsError(true);
      setError(data?.msg ? data?.msg : "Register failed");
    }
  } catch (error) {
    setIsError(true);
    setError(error?.message ? error?.message : "Register failed");
  }
};

export const login = async (userDetails, setIsError, setError) => {
  try {
    const url = `${API_URL}/userlogin/api/userlogin`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data?.status) {
      setIsError(false);
      return data;
    } else {
      setIsError(true);
      setError(data?.msg ? data?.msg : "Register failed");
    }
  } catch (error) {
    setError(error.message);
  }
};
