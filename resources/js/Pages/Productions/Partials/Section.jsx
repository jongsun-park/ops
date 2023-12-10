const Section = ({ title, button = null, children, className }) => (
  <>
    <div className="flex flex-row justify-between">
      <h2 className="font-bold uppercase">{title}</h2>
      {button}
    </div>
    <section className={className}>{children}</section>
  </>
);

export default Section;
