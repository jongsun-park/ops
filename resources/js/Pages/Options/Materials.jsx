import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import MaterialForm from "./Partials/MaterialForm";
import OptionHeader from "./Partials/OptionHeader";

/*
    materials = [{id: 0, name: ""}];
*/
const Materials = ({ materials }) => {
  const options = materials;
  const optionTitle = "Material";

  const createOptionForm = (
    <MaterialForm className="mb-10 bg-white shadow-xl shadow-blue-100" />
  );

  const updateOptionForm = options.map((opt) => (
    <MaterialForm key={opt.id} selected={opt} />
  ));

  return (
    <>
      <Head title={`${optionTitle}s`} />
      <OptionHeader optionTitle={optionTitle} />

      <Main>
        <div className="mb-3 rounded-md bg-white px-4 py-5">
          {createOptionForm}
        </div>
        <div className="space-y-4">{updateOptionForm}</div>
      </Main>
    </>
  );
};

export default Materials;
