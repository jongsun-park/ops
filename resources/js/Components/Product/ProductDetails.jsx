import { useForm } from "@inertiajs/react";
import { PrimaryButton } from "../Inputs";
import Input from "../Inputs/Input";
import Pannel from "../UI/Pannel";

/*
    TODO: SKU Generator
*/

const ProductDetails = ({ product, user, options }) => {
  const canUpdate = user.can.update;

  const { data, setData, put, post, processing, errors } = useForm({
    created_at: product.created_at,
    cut_length: product.cut_length,
    cut_width: product.cut_width,
    description: product.description,
    divs: product.divs,
    finish_length: product.finish_length,
    finish_width: product.finish_width,

    colour: product.colour,

    name: product.name,
    ppcm: product.ppcm,
    pprepeat: product.pprepeat,
    sku: product.sku,
    tf_number: product.tf_number,

    corner_id: product.corner.id,
    hem_size_id: product.hem_size.id,
    hem_type_id: product.hem_type.id,
    label_id: product.label.id,
    loom_id: product.loom.id,

    yarn1_id: product.yarn1.id,
    yarn2_id: product.yarn2.id,
    yarn3_id: product.yarn3.id,
    yarn4_id: product.yarn4.id,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    product.id
      ? put(`/products/${product.id}`, { preserveScroll: true })
      : post("/products", { preserveScroll: true });
  };

  const button = canUpdate && (
    <PrimaryButton onClick={onSubmit} disabled={processing}>
      Update Product
    </PrimaryButton>
  );

  const inputs = {
    Product: [
      { id: "name", label: "Name" },
      { id: "sku", label: "SKU" },
      { id: "description", label: "Description" },
      { id: "tf_number", label: "TF Number" },
    ],
    Colour: [{ id: "colour", label: "Colour", type: "color" }],
    Loom: [
      {
        id: "loom_id",
        label: "Select Loom",
        type: "select",
        options: options.looms,
      },
      { id: "divs", label: "Divisors" },
      { id: "ppcm", label: "PPCM" },
      { id: "pprepeat", label: "PPRepeat" },
    ],
    Yarns: [
      {
        id: "yarn1_id",
        label: "WEFT 1",
        type: "select",
        options: options.yarns,
      },
      {
        id: "yarn2_id",
        label: "WEFT 2",
        type: "select",
        options: options.yarns,
      },
      {
        id: "yarn3_id",
        label: "WEFT 3",
        type: "select",
        options: options.yarns,
      },
      {
        id: "yarn4_id",
        label: "WEFT 4",
        type: "select",
        options: options.yarns,
      },
    ],
    Cut: [
      { id: "cut_width", label: "Cut Width" },
      { id: "cut_length", label: "Cut Length" },
    ],
    Finish: [
      { id: "finish_width", label: "Finish Width" },
      { id: "finish_length", label: "Finish Length" },
    ],
    Hem: [
      {
        id: "hem_size_id",
        label: "Select Hem Size",
        type: "select",
        options: options.hem_sizes,
      },
      {
        id: "hem_type_id",
        label: "Select Hem Type",
        type: "select",
        options: options.hem_types,
      },
      {
        id: "label_id",
        label: "Select Label",
        type: "select",
        options: options.labels,
      },
      {
        id: "corner_id",
        label: "Select Corner",
        type: "select",
        options: options.corners,
      },
    ],
  };

  return (
    <Pannel title="Details" button={button}>
      <div className="space-y-4">
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

export default ProductDetails;
