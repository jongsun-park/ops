const Stat = ({ Icon = "", title = "", stat = "" }) => {
  return (
    <article className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
      <span className="rounded-full bg-blue-100 p-3 text-blue-600">{Icon}</span>

      <div>
        <p className="text-2xl font-medium text-gray-900">{stat}</p>

        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </article>
  );
};

export default Stat;
