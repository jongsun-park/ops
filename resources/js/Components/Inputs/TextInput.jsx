const TextInput = ({
  editable,
  placeholder,
  label,
  id,
  value,
  type = "text",
  setData,
  error,
}) => {
  const onChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  return (
    <div>
      <label
        htmlFor={id ?? label}
        className={`relative block overflow-hidden rounded-md  px-3 pt-3   ${
          editable
            ? "border-2 border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            : "border-2 border-transparent focus-within:border-transparent focus-within:ring-1 focus-within:ring-transparent"
        }`}
      >
        <input
          type={type}
          id={id ?? label}
          placeholder={placeholder ?? label}
          name={id}
          value={value}
          onChange={onChange}
          className={`peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm ${
            type == "color" ? "broder-0 pt-1" : ""
          }`}
          readOnly={!editable}
        />

        <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
          {type == "color" ? value : label}
        </span>
      </label>
      {error && (
        <p className="ml-2 mt-1 text-xs font-bold text-red-500">{error}</p>
      )}
    </div>
  );
};

export default TextInput;
