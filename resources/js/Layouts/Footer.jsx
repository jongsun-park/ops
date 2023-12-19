const Footer = () => {
  const project_name = "OPS";
  const year = 2023;
  const email = "jongsun250@gmail.com";
  return (
    <footer className="bg-gray-400 py-4 text-sm font-bold text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        © {year} {project_name}. All rights reserved. <br />
        For inquiries, contact us at{" "}
        <a href={`mailto:${email}`} className="underline">
          {email}
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
