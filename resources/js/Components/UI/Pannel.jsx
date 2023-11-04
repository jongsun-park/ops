const Pannel = ({ children, className = "", title = "", button = "" }) => {
  return (
    <div
      className={`mb-3 space-y-3 rounded-md border-4 border-white p-4 ${className}`}
    >
      <div className="mb-8 flex flex-row items-center justify-between">
        <h2 className="mb-3 text-xl font-bold uppercase">{title}</h2>
        {button}
      </div>
      {children}
    </div>
  );
};

export default Pannel;
