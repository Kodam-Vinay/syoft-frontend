import Spinner from "./Spinner";

const CustomButton = ({ label, loading, type, onClick, className }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`flex items-center justify-center w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
      disabled={loading}
      onClick={onClick}
    >
      <span className="mr-2">{label}</span>
      {loading && <Spinner />}
    </button>
  );
};

export default CustomButton;
