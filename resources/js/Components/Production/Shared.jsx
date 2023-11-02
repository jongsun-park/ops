export const Cell = ({ className, children, border }) => (
  <div
    className={`flex items-center p-2 ${
      border ? "rounded border border-gray-300" : ""
    } ${className}`}
  >
    {children}
  </div>
);

export const Grid = ({ className = "", label, value }) => (
  <Cell className={`grid w-full grid-cols-3 ${className}`}>
    <div className="font-bold">{label}</div>
    <div className="col-span-2">{value}</div>
  </Cell>
);
export const Col = ({ className = "", label, value }) => (
  <div className={`h-full ${className}`}>
    <div className="pb-2 font-bold">{label}</div>
    <div>{value}</div>
  </div>
);
