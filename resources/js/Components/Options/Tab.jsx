import { router } from "@inertiajs/react";
import { useState } from "react";

const betterLabel = (label) => label.replaceAll("_", " ");

const Tab = ({ options = [], selectedTable = "" }) => {
  const [selected, setSelected] = useState(selectedTable);

  const onOptionChange = (option) => {
    router.visit(`/options/${option}`, {
      onSuccess: () => {
        setSelected(option);
      },
      preserveState: true,
    });
  };

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select
          id="Tab"
          className="mb-5 w-full rounded-md border-gray-200 capitalize"
          onChange={(e) => onOptionChange(e.target.value)}
          defaultValue={selected}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {betterLabel(option)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-10 hidden sm:block">
        <nav className="flex flex-wrap gap-2">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onOptionChange(option)}
              className={`shrink-0 rounded border-2 border-transparent p-2 text-xs font-bold uppercase ${
                option === selected
                  ? "bg-blue-500 text-white shadow"
                  : "text-gray-400 hover:border-blue-500 hover:text-blue-500"
              }`}
            >
              {betterLabel(option)}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tab;
