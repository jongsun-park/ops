import { Head } from "@inertiajs/react";

import Tab from "@/Components/Options/Tab";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";

const Options = ({ options_keys, options = [] }) => {
  return (
    <>
      <Head title="Option" />
      <Header>
        <div className="align-center flex justify-between">
          <h1 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
            Options
          </h1>
        </div>
      </Header>
      <Main>
        <Tab options={options_keys} />
        <div className="space-y-2">
          {options.map(({ id, name }) => (
            <p
              key={id}
              className="w-full rounded border border-gray-300 px-2 py-2 text-gray-400"
            >
              {name}

              {/* TODO */}
              {/* CREATE FORM */}
              {/* EDIT BUTTON */}
              {/* DELETE BUTTON */}
            </p>
          ))}
        </div>
      </Main>
    </>
  );
};

export default Options;
