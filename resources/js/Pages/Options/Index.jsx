import { Head, Link, router, useForm } from "@inertiajs/react";

import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";

import {
  PlusCircleIcon,
  TrashIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

import {
  UpdateForm,
  UpdateFormSubmitButton,
} from "@/Components/Options/UpdateForm";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Options = (props) => {
  const {
    colors,
    corners,
    grades,
    hem_sizes,
    hem_types,
    labels,
    looms,
    materials,
    packings,
    statuses,
    suppliers,
    units,
    urgencies,
    wash_options,
  } = props;

  let [options] = useState({
    Color: colors,
    Corner: corners,
    Grade: grades,
    "Hem Size": hem_sizes,
    "Hem Type": hem_types,
    Label: labels,
    Loom: looms,
    Fibre: materials,
    Packing: packings,
    Status: statuses,
    Supplier: suppliers,
    Unit: units,
    Urgency: urgencies,
    "Wash Option": wash_options,
  });

  const tables = [
    "colors",
    "corners",
    "grades",
    "hem_sizes",
    "hem_types",
    "labels",
    "looms",
    "materials",
    "packings",
    "statuses",
    "suppliers",
    "units",
    "urgencies",
    "wash_options",
  ];

  const {
    data,
    setData,
    post,
    delete: destroy,
    reset,
    processing,
    errors,
  } = useForm({
    table: tables[0],
    name: "",
  });

  /**
   * TODO - Tab index is resetted when it redirect from options.php controller
   */

  const onSubmit = (e) => {
    e.preventDefault();
    post(`/options/${data.table}`, {
      preserveScroll: true,
      onSuccess: () => {
        reset("name");
        // router.visit(`/options`);
      },
    });
  };

  const onDeleteSubmit = (e, id) => {
    e.preventDefault();
    destroy(`/options/${data.table}/${id}`, {
      preserveScroll: true,
      onSuccess: () => {
        // router.visit(`/options`);
      },
    });
  };

  const onChangeTab = (index) => {
    setData("name", "");
    setData("table", tables[index]);
  };

  const onChangeName = (e) => {
    setData("name", e.target.value);
  };

  useEffect(() => {
    setData("name", "");
  }, [data.table]);

  return (
    <>
      <Head title="Option" />
      <Header>
        <div className="flex justify-between align-center">
          <h1 className="flex items-center font-semibold text-3xl text-gray-800 leading-tight">
            Options
          </h1>
        </div>
      </Header>
      <Main>
        <Tab.Group onChange={onChangeTab}>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 overflow-y-scroll">
            {Object.keys(options).map((opt) => (
              <Tab
                key={opt}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    "px-4 whitespace-nowrap",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {opt}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(options).map((option, idx) => (
              <Tab.Panel key={idx}>
                {/* Create New Option */}
                <div className="flex justify-between items-center my-3">
                  <h2>Create New Option ({data.table.toUpperCase()})</h2>
                  <div className="relative">
                    <form
                      className="flex items-center space-x-2"
                      onSubmit={onSubmit}
                    >
                      <label
                        htmlFor="new_option_name"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                      >
                        <input
                          type="text"
                          id="new_option_name"
                          placeholder="Option Name"
                          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          value={data.name}
                          onChange={onChangeName}
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                          Option Name
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={processing}
                        className="disabled:opacity-75 disabled:cursor-wait"
                      >
                        <PlusCircleIcon className="h-6 w-6 text-blue-500" />
                      </button>
                    </form>
                    {errors.name && (
                      <div className="text-red-500 text-xs absolute bottom-[-16px]">
                        {errors.name}
                      </div>
                    )}
                  </div>
                </div>
                <ul
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  {option.map((opt) => (
                    <li
                      key={opt.id}
                      className="relative rounded-md p-3 hover:bg-gray-100 flex flex-row justify-between items-center"
                    >
                      <UpdateForm
                        table={data.table}
                        id={opt.id}
                        name={opt.name}
                      />

                      <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm ml-2">
                        <UpdateFormSubmitButton
                          table={data.table}
                          id={opt.id}
                        />

                        <form onSubmit={(e) => onDeleteSubmit(e, opt.id)}>
                          <button
                            type="submit"
                            className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                          >
                            <TrashIcon className="h-4 w-4 text-slate-500" />
                          </button>
                        </form>

                        {/* TODO: /search?color=opt.name */}
                        <Link
                          href={`/search?${data.table}=${opt.name}`}
                          className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                          title="Related Records"
                        >
                          <DocumentTextIcon className="h-4 w-4 text-slate-500" />
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Main>
    </>
  );
};

export default Options;
