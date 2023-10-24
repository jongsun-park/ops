const Container = ({ children, className }) => (
  <div className={`rounded bg-gray-100 p-3 shadow ${className}`}>
    {children}
  </div>
);

export default Container;
