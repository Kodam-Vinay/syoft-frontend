import errorImage from "../assets/errorImage.svg";
const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1 h-[80%]">
      <div
        className={`w-full md:w-1/2 h-1/2  max-h-60 md:h-full bg-cover bg-center md:relative flex flex-col justify-center`}
      >
        <img
          src={errorImage}
          alt="bg-image"
          className="lg:h-screen animate-pulse  max-h-60"
        />
      </div>
      <h2 className="text-lg mt-10">Something Went Wrong</h2>
    </div>
  );
};

export default Error;
