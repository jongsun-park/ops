import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import Introduction from "./Partials/Introduction";
import Personal from "./Partials/Personal";
import Work from "./Partials/Work";

const AboutMe = () => {
  return (
    <Main className="space-y-3">
      <Head title="Jongsun Park - About Me" />
      <Introduction />
      <Personal />
      <Work />

      {/* <div>
        4. Services: Describe the services you offer as a web developer. This
        could include website development, front-end or back-end development,
        e-commerce solutions, responsive design, etc.
      </div> */}
      {/* <div>
        5. Skills: List your technical skills and proficiencies, such as
        programming languages, frameworks, tools, and methodologies. Include a
        skill level rating for each (e.g., beginner, intermediate, advanced).
      </div> */}
      {/* <div>
        7. Resume/CV: Offer a link to download your detailed resume or CV in PDF
        format.
      </div> */}

      {/* <div>
        10. Call to Action: Encourage visitors to reach out for inquiries,
        collaborations, or job opportunities.
      </div> */}
    </Main>
  );
};

export default AboutMe;
