import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const details = JSON.parse(localStorage?.getItem("userDetails"));
  useEffect(() => {
    if (details) {
      return navigate("/");
    }
  }, [details]);

  return children;
};

export default AuthProtectedRoute;
