import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import OptionHeader from "./Partials/OptionHeader";
import OptionToggles from "./Partials/OptionToggles";
import WashOptionForm from "./Partials/WashOptionForm";

const WashOptions = ({ washOptions }) => {
  const options = washOptions.map((op) => ({
    ...op,
    name: op.machine_name + " - " + op.machine_program,
  }));
  const optionTitle = "Wash Option";

  const [isCreateOption, setIsCreateOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const createOptionForm = (
    <WashOptionForm className="mb-10 bg-white shadow-xl shadow-blue-100" />
  );

  const updateOptionForm = (
    <WashOptionForm key={selectedOption.id} selected={selectedOption} />
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

export default WashOptions;
