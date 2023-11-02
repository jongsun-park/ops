import { useForm } from "@inertiajs/react";
import { PrimaryButton } from "../Inputs";
import TextInput from "../Inputs/TextInput";
import Pannel from "../UI/Pannel";

const ProductionDetail = ({ user = false, production = {} }) => {
  const canUpdate = user.can.update;

  const { data, setData, put, post, processing, errors } = useForm({
    user_id: production.user_id,
    product_id: production.product_id,
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
      id: "product_id",
      label: "Product ID",
    },
    {
      id: "user_id",
      label: "User ID",
    },
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
            error={errors[id]}
          />
        ))}
      </div>
    </Pannel>
  );
};

export default ProductionDetail;
