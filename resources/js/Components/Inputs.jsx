const betterLabel = (label = "") => label.toLowerCase().replace("_", " ");

export const TextInput = ({
  label = "",
  id = "",
  value = "",
  error = "",
  placeholder = "",
  onChange,
  required = false,
}) => {
  return (
    <div className="sm:col-span-4">
      <label
        htmlFor={id}
        className="block text-sm font-bold uppercase leading-4 text-gray-900"
      >
        {betterLabel(label)}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 px-2">
          <input
            type="text"
            value={value}
            onChange={onChange}
            name={id}
            id={id}
            autoComplete={id}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            required={required}
          />
        </div>
        {error && <div className="text-red-500 text-xs">{error}</div>}
      </div>
    </div>
  );
};

export const PrimaryButton = ({
  type = "button",
  disabled = false,
  children,
}) => (
  <button
    type={type}
    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-progress"
    disabled={disabled}
  >
    {children}
  </button>
);

export const Button = ({ type = "button", children }) => (
  <button type={type} className="text-sm font-semibold leading-6 text-gray-900">
    {children}
  </button>
);
