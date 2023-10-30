export const Cell = ({ className, children, border }) => (
  <div
    className={`flex items-center p-2 ${
      border ? "rounded border border-gray-300" : ""
    } ${className}`}
  >
    {children}
  </div>
);

export const Grid = ({ cols = 1, className, label, value }) => (
  <Cell className={`grid-cols-${cols} grid w-full ${className}`}>
    <div className="font-bold">{label}</div>
    <div className={cols == 3 ? `col-span-2` : "col-span-1"}>{value}</div>
  </Cell>
);
export const Col = ({ className, label, value }) => (
  <div className={`h-full ${className}`}>
    <div className="pb-2 font-bold">{label}</div>
    <div>{value}</div>
  </div>
);
