import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import Introduction from "./Partials/Introduction";
import Personal from "./Partials/Personal";
import SaveMyCV from "./Partials/SaveMyCV";
import Skill from "./Partials/Skill";
import Work from "./Partials/Work";

const AboutMe = () => {
  return (
    <Main className="space-y-3">
      <Head title="Jongsun Park - About Me" />
      <Introduction />
      <Personal />
      <Work />
      <SaveMyCV />
      <Skill />
    </Main>
  );
};

export default AboutMe;
