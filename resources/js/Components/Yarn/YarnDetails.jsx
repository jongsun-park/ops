import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { PrimaryButton } from "../Inputs";
import Input from "../Inputs/Input";
import Pannel from "../UI/Pannel";

const YarnDetails = ({ yarn, user, options }) => {
  const canUpdate = user.can.update;

  const { data, setData, put, post, processing, errors } = useForm({
    material_id: yarn.material_id,
    colour: yarn.colour,
    // created_at: yarn.created_at,

    sku: yarn.sku,
    number: yarn.number,
    core: yarn.core ?? 0,
    nm: yarn.nm,
  });

  console.log(errors);

  useEffect(() => {
    const selectedMaterialCode = options.materials.filter(
      ({ id }) => id === data.material_id,
    )[0].code;

    let newSku = "";

    if (data.core == 0 || data.core == 1) {
      newSku = selectedMaterialCode + data.number + data.nm;
    } else {
      newSku = selectedMaterialCode + data.number + data.core + "/" + data.nm;
    }

    setData("sku", newSku);
  }, [data.material_id, data.number, data.core, data.nm]);

  const onSubmit = (e) => {
    e.preventDefault();
    yarn.id
      ? put(`/yarns/${yarn.id}`, { preserveScroll: true })
      : post("/yarns", { preserveScroll: true });
  };

  const button = canUpdate && (
    <PrimaryButton onClick={onSubmit} disabled={processing}>
      Update Yarn
    </PrimaryButton>
  );

  const inputs = {
    Yarn: [
      //   { id: "created_at", label: "Create At", type: "date" },
      { id: "colour", label: "Colour", type: "color" },
    ],
    Sku: [{ id: "sku", label: "SKU" }],
    "Sku Related": [
      {
        id: "material_id",
        label: "Select Material",
        type: "select",
        options: options.materials,
      },
      { id: "number", label: "Yarn Number", type: "text" },
      { id: "core", label: "Core", type: "number" },
      { id: "nm", label: "NM", type: "number" },
    ],
  };

  return (
    <Pannel title="Yarn Details" button={button}>
      <div className="space-y-3">
        {Object.entries(inputs).map((group) => {
          const gruopTitle = group[0];
          const groupInputs = group[1];
          return (
            <div
              className="rounded-md border-2 border-white bg-white/50 p-4"
              key={gruopTitle}
            >
              <h2 className="text-md mb-3 font-bold uppercase text-gray-400">
                {gruopTitle}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {groupInputs.map(
                  ({ id, label, type = "text", options = [] }) => (
                    <Input
                      editable={canUpdate}
                      key={id}
                      id={id}
                      label={label}
                      value={data[id]}
                      setData={setData}
                      error={errors[id]}
                      type={type}
                      options={options}
                    />
                  ),
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Pannel>
  );
};

export default YarnDetails;
