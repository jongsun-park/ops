import { ToggleButton } from "@/Components/Inputs";

const OptionToggles = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <div className="mb-5 flex flex-row flex-wrap">
      {options.map((op) => (
        <ToggleButton
          key={op.id}
          active={op.id == selectedOption?.id}
          onClick={() => {
            // toggle on
            if (op.id == selectedOption?.id) {
              setSelectedOption({});
            }
            // toggle off
            if (op.id !== selectedOption?.id) {
              setSelectedOption(op);
            }
          }}
        >
          {op.name}
        </ToggleButton>
      ))}
    </div>
  );
};

export default OptionToggles;
