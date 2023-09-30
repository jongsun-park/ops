import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function SelectInput({
    id = "id",
    label = "Select Input",
    selected = "",
    error,
    onChange,
    options,
}) {
    const [selectedText, setSelectedText] = useState("");

    useEffect(() => {
        // Placehollder
        if (!selected) setSelectedText("Please select option");
    }, [selected]);

    return (
        <div className="w-full">
            <label
                htmlFor={id}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <Listbox value={selected} onChange={onChange}>
                <div className="relative mt-1">
                    <Listbox.Button className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset w-full p-2 px-2 text-left text-sm focus-within:ring-blue-600">
                        <span className="block truncate">{selectedText}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                            {options.map((opt) => (
                                <Listbox.Option
                                    key={opt.id}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                                ? "bg-slate-100 text-slate-900"
                                                : "text-gray-900"
                                        }`
                                    }
                                    value={opt.id}
                                    onClick={() => {
                                        setSelectedText(opt.name);
                                    }}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {opt.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                                                    <CheckIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
            {error && <div className="text-red-500 text-xs">{error}</div>}
        </div>
    );
}
