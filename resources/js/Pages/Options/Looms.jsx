import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import LoomForm from "./Partials/LoomForm";
import OptionHeader from "./Partials/OptionHeader";
import OptionToggles from "./Partials/OptionToggles";

const Looms = ({ looms, yarns }) => {
  const options = looms;
  const optionTitle = "Loom";

  const [isCreateOption, setIsCreateOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const createOptionForm = (
    <LoomForm
      yarns={yarns}
      className="mb-10 bg-white shadow-xl shadow-blue-100"
    />
  );

  const updateOptionForm = (
    <LoomForm key={selectedOption.id} loom={selectedOption} yarns={yarns} />
  );

  return (
    <>
      <Head title={`${optionTitle}s`} />
      <OptionHeader
        optionTitle={optionTitle}
        isCreateOption={isCreateOption}
        setIsCreateOption={setIsCreateOption}
      />

      <Main>
        <OptionToggles
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />

        {isCreateOption && createOptionForm}

        <div>
          {selectedOption.id
            ? updateOptionForm
            : `To view additional details or generate a new ${optionTitle.toLowerCase()}, please click on the button located above.`}
        </div>
      </Main>
    </>
  );
};

export default Looms;
