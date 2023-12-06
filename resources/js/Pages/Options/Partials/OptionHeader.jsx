import { ToggleButton } from "@/Components/Inputs";
import Header from "@/Layouts/Header";

const OptionHeader = ({ optionTitle, isCreateOption, setIsCreateOption }) => {
  return (
    <Header>
      <div className="align-center flex flex-col items-center justify-between sm:flex-row">
        <div>
          <h1 className="mb-1 flex items-center text-3xl font-semibold leading-tight text-gray-700">
            {optionTitle}s
          </h1>
          <ul className="text-xs text-gray-600">
            {setIsCreateOption && (
              <>
                <li>
                  Please click "Create New {optionTitle}" button to show Create
                  Form
                </li>
                <li>
                  Please select "{optionTitle} Name" button to show{" "}
                  {optionTitle} Details & Update Form
                </li>
              </>
            )}
          </ul>
        </div>

        {setIsCreateOption && (
          <ToggleButton
            onClick={() => setIsCreateOption(!isCreateOption)}
            active={isCreateOption}
          >
            Create New {optionTitle}
          </ToggleButton>
        )}
      </div>
    </Header>
  );
};

export default OptionHeader;
