import { PrimaryButton as Button } from "@/Components/Inputs";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Container from "./Container";

{
  /* <div>
3. Portfolio: Project Thumbnails: Showcase your best work with
thumbnails of your projects. Clicking on each thumbnail should lead to a
detailed project page. Project Pages: For each project, include: Project
name and description Technologies used Screenshots or demos Your role
and contributions Links to the live project (if applicable) Links to the
project's code repository (e.g., GitHub)
</div> */
}

const ProjectSourceCode = ({ url }) => (
  <a href={url} className="">
    {url}
  </a>
);

const works = [
  {
    icon: <AcademicCapIcon className="h-8 w-8" />,
    title: "John England Irish Linen Fabrics (since 1962)",
    description: "Lorem ipsum dolor sit amet consectetur.",
    url: "https://johnengland.com/",
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8" />,
    title: "Irish Linen Properties: Linen For Everyday Living",
    description: "Lorem ipsum dolor sit amet consectetur.",
    url: "https://irishlinenproperties.com/",
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8" />,
    title: "Order Production Management System",
    description: "Lorem ipsum dolor sit amet consectetur.",
    url: "https://www.jongsun.co.uk/dashboard",
    repo: "https://github.com/jongsun-park/ops",
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8" />,
    title: "Doggos - Submit your Dog",
    description: "Lorem ipsum dolor sit amet consectetur.",
    url: "https://park-doggos.netlify.app/",
    repo: "https://github.com/jongsun-park/doggos",
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
                Ping me via email
                <a href="mailto:jongsun-dev@gmail.com">Ping me via email</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              {works.map(({ icon, title, description, url, repo }) => (
                <div
                  className="block rounded-xl border-2 border-gray-200 p-4"
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
