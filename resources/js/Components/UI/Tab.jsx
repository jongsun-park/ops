import { Link, router } from "@inertiajs/react";
import { useState } from "react";

const betterLabel = (label) => label.replaceAll("_", " ");

const Tab = ({ options = [] }) => {
  const [selected, setSelected] = useState(options[0]);

  const onClickVisit = (e, option) => {
    e.preventDefault();
    setSelected(option);
    router.visit(`/options/${option}`, {
      preserveState: true,
    });
  };

  console.log(selected);

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select
          id="Tab"
          className="w-full rounded-md border-gray-200 capitalize"
        >
          {options.map((option) => (
            <option
              key={option}
              onClick={(e) => onClickVisit(e, option)}
              select={(option === selected).toString()}
            >
              {betterLabel(option)}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block mb-4">
        <nav className="flex gap-2 flex-wrap">
          {options.map((option) => (
            <Link
              key={option}
              href="#"
              onClick={(e) => onClickVisit(e, option)}
              className={`uppercase shrink-0 rounded text-sm font-bold p-2 ${
                option === selected
                  ? "bg-blue-500 text-white shadow"
                  : "text-gray-400 hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              {betterLabel(option)}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tab;
