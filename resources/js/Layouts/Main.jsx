const Main = ({ children, className }) => (
  <main>
    <div className="py-6">
      <div className={`mx-auto max-w-7xl sm:px-6 lg:px-8 ${className}`}>
        {children}
      </div>
    </div>
  </main>
);

export default Main;
