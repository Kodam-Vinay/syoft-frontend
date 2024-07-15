import { useState } from "react";
import image from "../assets/bgImage.png";
import CustomInput from "../utils/CustomInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CustomButton from "../utils/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/apiCalls";
const SignIn = () => {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setIsError(true);
        setError("All fields are required");
        return;
      }
      const userDetails = {
        user_email: email,
        user_password: password,
      };
      setLoading(true);
      const res = await login(userDetails, setIsError, setError);
      if (res?.status) {
        navigate("/");
        await localStorage.setItem("userDetails", JSON.stringify(res));
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setIsError(true);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div
        className={`w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center absolute top-0 bottom-0 md:relative flex flex-col justify-center z-0`}
      >
        <img src={image} alt="bg-image" className="lg:h-screen animate-pulse" />
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-full lg:w-1/2 z-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="md:mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In to your account
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSignIn}>
              <CustomInput
                label="Email address"
                className="w-full"
                type="email"
                error={isError && !email && "Email is required"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                required
              />
              <CustomInput
                label="Password"
                className="w-full"
                type={showPassword ? "text" : "password"}
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                error={isError && !password && "Pasword is required"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                togglerIcon={togglePassword}
                name="user_password"
                required
              />
              <div className="mt-5">
                <CustomButton
                  loading={loading}
                  label="Sign In"
                  type={"submit"}
                />
              </div>
              <p className="text-red-400">{isError && error}</p>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Aleready have an account?
              <Link
                to="/sign-up"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Register Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
