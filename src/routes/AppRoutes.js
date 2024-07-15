import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/SignUp";
import Login from "../pages/SignIn";
import AuthProtectedRoute from "../utils/protectedRoutes/AuthProtectedRoute";
import HomeProtectedRoute from "../utils/protectedRoutes/HomeProtectedRoute";
import Error from "../pages/Error";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomeProtectedRoute>
          <Home />
        </HomeProtectedRoute>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <AuthProtectedRoute>
          <Register />
        </AuthProtectedRoute>
      ),
    },
    {
      path: "/sign-in",
      element: (
        <AuthProtectedRoute>
          <Login />
        </AuthProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
