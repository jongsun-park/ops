import { useForm } from "@inertiajs/react";
import { PrimaryButton } from "../Inputs";
import TextInput from "../Inputs/TextInput";
import Pannel from "../UI/Pannel";

const ProductDetails = ({ product, user }) => {
  const canUpdate = user.can.update;

  console.log(product.colour);

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

  // TODO - FK Table -> Selector

  const inputs = {
    Product: [
      { id: "name", label: "name" },
      { id: "sku", label: "sku" },
      { id: "description", label: "description" },
      { id: "tf_number", label: "tf_number" },
    ],
    Colour: [{ id: "colour", label: "Colour", type: "color" }],
    Loom: [
      { id: "loom_id", label: "loom_id" },
      { id: "divs", label: "divs" },
      { id: "ppcm", label: "ppcm" },
      { id: "pprepeat", label: "pprepeat" },
    ],
    Yarns: [
      { id: "yarn1_id", label: "yarn1" },
      { id: "yarn2_id", label: "yarn2" },
      { id: "yarn3_id", label: "yarn3" },
      { id: "yarn4_id", label: "yarn4" },
    ],
    Cut: [
      { id: "cut_width", label: "cut_width" },
      { id: "cut_length", label: "cut_length" },
    ],
    Finish: [
      { id: "finish_width", label: "finish_width" },
      { id: "finish_length", label: "finish_length" },
    ],
    Hem: [
      { id: "hem_size_id", label: "hem_size" },
      { id: "hem_type_id", label: "hem_type" },
      { id: "label_id", label: "label" },
      { id: "corner_id", label: "corner" },
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
                {groupInputs.map(({ id, label, type = "text" }) => (
                  <TextInput
                    editable={canUpdate}
                    key={id}
                    id={id}
                    label={label}
                    value={data[id]}
                    setData={setData}
                    error={errors[id]}
                    type={type}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Pannel>
  );
};

export default ProductDetails;
