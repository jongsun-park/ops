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
        className="block text-xs font-bold uppercase leading-4 text-gray-900"
      >
        {betterLabel(label)}
      </label>
      <div className="mt-2">
        <div className="">
          <input
            type="text"
            value={value}
            onChange={onChange}
            name={id}
            id={id}
            autoComplete={id}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder={placeholder}
            required={required}
          />
        </div>
        {error && <div className="text-xs text-red-500">{error}</div>}
      </div>
    </div>
  );
};

// Simple and Icon on Hover
export const PrimaryButton = ({
  type = "button",
  disabled = false,
  className,
  children,
  onClick,
}) => (
  <button
    type={type}
    className={`group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-500 ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    <span className="absolute -end-full transition-all group-hover:end-4">
      <svg
        className="h-5 w-5 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </span>
    <span className="text-sm font-medium transition-all group-hover:me-4">
      {children}
    </span>
  </button>
);

export const Button = ({ type = "button", children, className }) => (
  <button
    type={type}
    className={`group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ${className}`}
  >
    <span className="absolute -end-full transition-all group-hover:end-4">
      <svg
        className="h-5 w-5 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </span>
    <span className="text-sm font-medium transition-all group-hover:me-4">
      {children}
    </span>
  </button>
);
