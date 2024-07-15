import { Navigate } from "react-router-dom";

const HomeProtectedRoute = ({ children }) => {
  const details = JSON.parse(localStorage?.getItem("userDetails"));
  if (details) {
    return children;
  }
  return <Navigate to={"/sign-in"} />;
};

export default HomeProtectedRoute;
