import { Head } from "@inertiajs/react";

import AddOptionForm from "@/Components/Options/AddOptionForm";
import Tab from "@/Components/Options/Tab";
import UpdateDeleteOptionForm from "@/Components/Options/UpdateDeleteOptionForm";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";

const Options = ({ options_keys, options = [], tableName }) => {
  return (
    <>
      <Head title="Option" />
      <Header>
        <div className="align-center flex flex-col justify-between sm:flex-row">
          <h1 className="text-gray-803 mb-3 flex items-center text-3xl font-semibold leading-tight">
            Options
          </h1>
          <AddOptionForm tableName={tableName} />
        </div>
      </Header>
      <Main>
        <Tab options={options_keys} selectedTable={tableName} />
        <div className="space-y-2">
          {options.map(({ id, name }) => (
            <UpdateDeleteOptionForm
              key={id}
              id={id}
              name={name}
              tableName={tableName}
            />
          ))}
        </div>
      </Main>
    </>
  );
};

export default Options;
