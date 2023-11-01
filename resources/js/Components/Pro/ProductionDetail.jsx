import { useForm } from "@inertiajs/react";
import { PrimaryButton } from "../Inputs";
import Pannel from "../UI/Pannel";

const TextInput = ({
  editable,
  placeholder,
  label,
  id,
  value,
  type = "text",
  setData,
}) => {
  const onChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  return (
    <label
      htmlFor={id ?? label}
      className={`relative block overflow-hidden rounded-md  px-3 pt-3   ${
        editable
          ? "border-2 border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          : "border-2 border-transparent focus-within:border-transparent focus-within:ring-1 focus-within:ring-transparent"
      }`}
    >
      <input
        type={type}
        id={id ?? label}
        placeholder={placeholder ?? label}
        name={id}
        value={value}
        onChange={onChange}
        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        readOnly={!editable}
      />

      <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
        {label}
      </span>
    </label>
  );
};

const ProductionDetail = ({ user = false, production = {} }) => {
  const canUpdate = user.can.update;

  const { data, setData, put, post, processing, errors } = useForm({
    created_at: production.created_at,
    updated_at: production.updated_at,
    product_name: production.product_name,
    product_sku: production.product_sku,
    product_description: production.product_description,
    written_by: production.written_by,
    order_id: production.order_id,
    customer_name: production.customer_name,
    weave_by: production.weave_by,
    quantity: production.quantity,
    total_length: production.total_length,
    note: production.note,
    packing: production.packing,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    production.id
      ? put(`/productions/${production.id}`, { preserveScroll: true })
      : post("/productions", { preserveScroll: true });
  };

  const button = canUpdate && (
    <PrimaryButton onClick={onSubmit} disabled={processing}>
      Update Production
    </PrimaryButton>
  );

  const inputs = [
    {
      id: "created_at",
      label: "Created At",
    },
    { id: "updated_at", label: "Updated At" },
    { id: "product_name", label: "Production Name" },
    { id: "product_sku", label: "Product SKU" },
    { id: "product_description", label: "Product Description" },
    { id: "written_by", label: "Written By" },
    { id: "order_id", label: "Order ID" },
    { id: "customer_name", label: "Customer Name" },
    { id: "weave_by", label: "Weaved By" },
    { id: "quantity", label: "Quantity" },
    { id: "total_length", label: "Total Length" },
    { id: "note", label: "Note" },
    { id: "packing", label: "Packing" },
  ];

  return (
    <Pannel title="Production Details" button={button}>
      <div className="grid grid-cols-2 gap-3">
        {inputs.map(({ id, label }) => (
          <TextInput
            editable={canUpdate}
            key={id}
            id={id}
            label={label}
            value={data[id]}
            setData={setData}
          />
        ))}
      </div>
    </Pannel>
  );
};

export default ProductionDetail;
