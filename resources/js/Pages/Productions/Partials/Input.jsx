const Input = ({
  label = "Label",
  type = "text",
  id = "",
  value = "",
  error = "",
  name = "",
  onChange = () => {},
  required = false,
}) => (
  <div>
    <label
      htmlFor={label}
      className="block text-xs font-bold uppercase text-gray-700"
    >
      {label}
    </label>

    <input
      type={type}
      id={id}
      name={name}
      className="mt-2 w-full rounded border-0 sm:text-sm"
      value={value}
      onChange={onChange}
      required={required}
    />
    {error && <span className="text-sm font-bold text-red-500">{error}</span>}
  </div>
);

export default Input;
