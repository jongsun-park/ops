const DatePicker = ({ label, name = "", value = "", error = "", onChange }) => {
  return (
    <>
      <div
        className={`padding-1 relative flex items-center justify-between bg-white px-2 py-0 ${
          error ? "mb-5" : ""
        }`}
      >
        <label className="mr-1 text-sm font-bold uppercase">{label}</label>
        <input
          className="cursor-pointer border-0 bg-transparent"
          type="date"
          name={name}
          value={value}
          onChange={onChange}
        />

        {error && (
          <span className="absolute -bottom-5 z-10 text-sm font-bold text-red-500">
            {error}
          </span>
        )}
      </div>
    </>
  );
};

export default DatePicker;
