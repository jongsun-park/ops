import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import OptionHeader from "./Partials/OptionHeader";
import OptionToggles from "./Partials/OptionToggles";
import WashOptionForm from "./Partials/WashOptionForm";

const WashOptions = ({ washOptions, id }) => {
  const options = washOptions.map((op) => ({
    ...op,
    name: op.machine_name + " - " + op.machine_program,
  }));
  const optionTitle = "Wash Option";

  const options_id = new URLSearchParams(window.location.search).get("id");

  const [isCreateOption, setIsCreateOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    // deleted option
    if (options_id == 0) setSelectedOption(options[0]);

    // create & updated option
    const seletedOption = options.filter((op) => op.id == options_id)[0];
    seletedOption ? setSelectedOption(seletedOption) : options[0];
  }, [options_id]);

  const createOptionForm = (
    <WashOptionForm
      className="mb-10 bg-white/50 shadow-xl shadow-blue-100"
      setIsCreateOption={setIsCreateOption}
    />
  );

  const updateOptionForm = (
    <WashOptionForm
      key={selectedOption.id}
      selected={selectedOption}
      setIsCreateOption={setIsCreateOption}
    />
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
