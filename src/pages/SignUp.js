import { useState } from "react";
import image from "../assets/bgImage.png";
import CustomInput from "../utils/CustomInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CustomButton from "../utils/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/apiCalls";
const SignUp = () => {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (
        !email ||
        !password ||
        !firstName ||
        !lastName ||
        !phone ||
        !city ||
        !zipCode
      ) {
        setIsError(true);
        setError("All fields are required");
        return;
      }
      const userDetails = {
        user_firstname: firstName,
        user_lastname: lastName,
        user_email: email,
        user_phone: phone,
        user_password: password,
        user_city: city,
        user_zipcode: zipCode,
      };

      setLoading(true);
      const res = await register(userDetails, setIsError, setError);
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
            Sign Up to your account
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSignUp}>
              <div className="flex flex-row space-x-2">
                <div className="w-1/2">
                  <CustomInput
                    label="First Name"
                    className="w-full"
                    type="text"
                    error={isError && !firstName && "Lastname is required"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    name="user_firstname"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <CustomInput
                    label="Last Name"
                    className="w-full"
                    type="text"
                    error={isError && !lastName && "Firstname is required"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    name="user_lastname"
                    required
                  />
                </div>
              </div>
              <CustomInput
                label="Phone"
                className="w-full"
                type="number"
                error={isError && !phone && "Phone is required"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="user_phone"
                required
              />
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
              <div className="flex flex-row space-x-2">
                <div className="w-1/2">
                  <CustomInput
                    label="City"
                    className="w-full"
                    type="text"
                    error={isError && !city && "City is required"}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    name="user_city"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <CustomInput
                    maxLength={6}
                    label="Zip Code"
                    className="w-full"
                    type="number"
                    error={isError && !zipCode && "Pincode is required"}
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    name="user_zipcode"
                    required
                  />
                </div>
              </div>
              <div className="mt-5">
                <CustomButton
                  loading={loading}
                  label="Sign up"
                  type={"submit"}
                />
              </div>
              <p className="text-red-400">{isError && error}</p>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <Link
                to="/sign-in"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
