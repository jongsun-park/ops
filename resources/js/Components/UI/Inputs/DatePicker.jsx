const DatePicker = ({ label, name = "", value = "", onChange }) => {
  return (
    <div className="padding-1 flex items-center justify-between bg-white px-2 py-0">
      <label className="mr-1 text-sm font-bold uppercase">{label}</label>
      <input
        className="cursor-pointer border-0 bg-transparent"
        type="date"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DatePicker;
