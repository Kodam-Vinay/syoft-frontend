import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import CustomButton from "../utils/CustomButton";
const Home = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const name = userDetails?.user_data
    ? userDetails?.user_data[0]?.user_firstname &&
      userDetails?.user_data[0]?.user_lastname
      ? userDetails?.user_data[0]?.user_firstname +
        " " +
        userDetails?.user_data[0]?.user_lastname
      : "User"
    : "User";

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    navigate("/sign-in");
  };
  return (
    <div className="h-full w-full pt-1">
      <nav className="p-6 max-w-xl  mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 justify-between">
        <img src={logo} alt="nothing" className="h-8" />
        <CustomButton
          label={"Logout"}
          onClick={handleLogout}
          className="w-16 px-6"
        />
      </nav>
      <div className="p-6 max-w-xl mx-auto mt-5 bg-white rounded-xl flex items-center space-x-4">
        <div className="text-xl font-medium text-black">Hello..</div>
        <p className="text-gray-500">Welcome Back {name}</p>
      </div>
    </div>
  );
};

export default Home;
