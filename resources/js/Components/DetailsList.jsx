export const Detail = ({ dt, dd, className }) => (
  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
    <dt className="font-medium text-gray-900">{dt}</dt>
    <dd className={`text-gray-700 sm:col-span-2 ${className}`}>{dd}</dd>
  </div>
);

export const DetailsList = ({ children, className }) => {
  if (!children) return;

  return (
    <div
      className={`flow-root rounded-lg border border-gray-100 bg-white py-3 shadow-sm ${className}`}
    >
      <dl className="-my-3 divide-y divide-gray-100 text-sm">{children}</dl>
    </div>
  );
};
