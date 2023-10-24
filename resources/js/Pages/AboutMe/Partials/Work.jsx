import { PrimaryButton as Button } from "@/Components/Inputs";
import Container from "./Container";

import irp_logo from "./Images/ILP_logo.png";
import je_logo from "./Images/JE_logo.png";
import doggos_logo from "./Images/doggos_logo.png";
import ops_logo from "./Images/ops_logo.png";

const works = [
  {
    icon: <img src={ops_logo} className="h-8 w-8 bg-cover" />,
    title: "Order Production Management System",
    description:
      "OPS is a production order system built with Laravel and React, offering role-based database access. Hosted on Digital Ocean, its repository is meticulously managed on GitHub",
    url: "https://www.jongsun.co.uk/dashboard",
    repo: "https://github.com/jongsun-park/ops",
  },
  {
    icon: <img src={doggos_logo} className="h-8 w-8" />,
    title: "Doggos - Submit your Dog",
    description:
      "Doggos is a React-based gallery hosted on Netlify, featuring my canine companions and enhanced with CSS libraries like Styled Components and Framer for captivating user interfaces.",
    url: "https://park-doggos.netlify.app/",
    repo: "https://github.com/jongsun-park/doggos",
  },
  {
    icon: <img src={je_logo} className="h-8 w-8" />,
    title: "John England Irish Linen Fabrics (since 1962)",
    description:
      "John England, hosted on WPEngine, was rebranded and rebuilt using the Total Theme in WordPress. It now serves as a robust marketing funnel for new products and the catalog.",
    url: "https://johnengland.com/",
  },
  {
    icon: <img src={irp_logo} className="h-8 w-8" />,
    title: "Irish Linen Properties: Linen For Everyday Living",
    description:
      "ILP was created using Shopify, customized with Liquid. I developed this website from scratch, including the publication of all its blog content.",
    url: "https://irishlinenproperties.com/",
  },
];

const Work = () => {
  return (
    <Container>
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0">
              <h2 className="text-3xl font-bold sm:text-4xl">My Portfolio</h2>

              <p className="mt-4 text-gray-600">
                I have experience creating websites using WordPress and Shopify
                and have also provided support for various website-related
                tasks. I am particularly interested in working with React and
                Laravel frameworks. I've attached a few sample projects to
                showcase my development work.
              </p>

              <Button className="mt-10">
                <a href="mailto:jongsun-dev@gmail.com">Ping me via email</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              {works.map(({ icon, title, description, url, repo }) => (
                <div
                  className="block rounded-xl border-2 border-gray-200 bg-white p-4"
                  key={title}
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                    {icon}
                  </span>

                  <h2 className="mt-2 font-bold">
                    <a
                      href={url ?? "#"}
                      target="_blank"
                      className="duration-100 hover:text-blue-400"
                    >
                      {title}
                    </a>
                  </h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    {description}
                  </p>
                  {repo && (
                    <a
                      href={repo}
                      className="mt-3 block w-fit rounded-full bg-blue-100 px-4 py-1 text-xs font-bold uppercase text-blue-400 duration-100 hover:bg-blue-200 hover:text-blue-600"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Work;
