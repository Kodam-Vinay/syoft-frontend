const CustomInput = ({
  type,
  value,
  onChange,
  placeholder,
  error,
  name,
  label,
  icon,
  togglerIcon,
  maxLength,
}) => {
  return (
    <>
      <div>
        {label && (
          <label
            htmlFor={label}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
        )}
        <div className="mt-2 relative">
          <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {icon && (
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglerIcon}
            >
              {icon}
            </div>
          )}
        </div>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </>
  );
};

export default CustomInput;
