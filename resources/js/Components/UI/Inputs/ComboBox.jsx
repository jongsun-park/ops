import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";

const exampleOptions = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

export default function OpsComboBox({
  options = exampleOptions,
  name,
  value,
  setData,
  error,
}) {
  const [selected, setSelected] = useState(
    value ? options.filter((op) => op.id == value)[0] : { id: "", name: "" },
  );

  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  // update data.[name] value when option has been changed
  useEffect(() => {
    if (selected) setData(name, selected.id);
  }, [selected]);

  return (
    <>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-sm bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(option) => option.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-base shadow-lg shadow-slate-200 ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredOptions.length === 0 && query !== "" ? (
                /* Allowing custom values */
                //   <Combobox.Option
                //     value={{ id: null, name: query }}
                //     className="relative cursor-default select-none px-4 py-2 text-gray-700"
                //   >
                //     Create "{query}"
                //   </Combobox.Option>

                /* Not allowing custom values */
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <Combobox.Option
                    key={option.name ?? option.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-blue-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-blue-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      {error && <span className="text-sm font-bold text-red-500">{error}</span>}
    </>
  );
}
