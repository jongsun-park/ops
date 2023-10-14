import Header from "@/Layouts/Header";
import { Head, useForm } from "@inertiajs/react";
import { TextInput, PrimaryButton, Button } from "@/Components/Inputs";
import SelectInput from "@/Components/SelectInput";
import FormHeader from "@/Components/FormHeader";
import FormContainer from "@/Components/FormContainer";
import Main from "@/Layouts/Main";

const Form = ({
  auth,
  production,
  products,
  urgencies,
  wash_options,
  packings,
  statuses,
}) => {
  const init = {
    product_id: production?.product_id ?? "",
    user_id: production?.user_id ?? auth.user.id,
    order_id: production?.order_id ?? "",
    customer_name: production?.customer_name ?? "",
    weave_by: production?.weave_by ?? "",
    quantity: production?.quantity ?? "",
    total_length: production?.total_length ?? "",
    number_of_repeats: production?.number_of_repeats ?? "",
    note: production?.note ?? "",
    urgency_id: production?.urgency_id ?? "",
    wash_option_id: production?.wash_option_id ?? "",
    packing_id: production?.packing_id ?? "",
    status_id: production?.status_id ?? "",
  };

  const { data, setData, post, put, processing, errors } = useForm(init);

  function submit(e) {
    e.preventDefault();
    production.id ? put(`/productions/${product.id}`) : post("/productions");
  }

  function onChange(e) {
    setData(e.target.name, e.target.value);
  }

  const title = production
    ? "Update Production Order"
    : "Create Production Order";
  const buttonText = production ? "Update" : "Create";

  return (
    <>
      <Head title={title} />

      <Main>
        <Header>
          <FormHeader title={title} />
        </Header>

        <FormContainer
          onSubmit={submit}
          processing={processing}
          buttonText={buttonText}
        >
          {/* product_id */}
          <SelectInput
            label="Product"
            selected={data.product_id}
            error={errors.product_id}
            options={products}
            onChange={(e) => {
              setData("product_id", e);
            }}
          />

          {/* order_id */}
          <TextInput
            id="order_id"
            label="Order Id"
            value={data.order_id}
            error={errors.order_id}
            onChange={onChange}
            required
          />

          {/* customer_name */}
          <TextInput
            id="customer_name"
            label="Customer Name"
            value={data.customer_name}
            error={errors.customer_name}
            onChange={onChange}
            required
          />

          {/* weave_by */}
          <TextInput
            id="weave_by"
            label="Weave By"
            value={data.weave_by}
            error={errors.weave_by}
            onChange={onChange}
            required
          />

          {/* quantity */}
          <TextInput
            id="quantity"
            label="Quantity"
            value={data.quantity}
            error={errors.quantity}
            onChange={onChange}
            required
          />

          {/* total_length */}
          <TextInput
            id="total_length"
            label="Total length"
            value={data.total_length}
            error={errors.total_length}
            onChange={onChange}
            required
          />

          {/* number_of_repeats */}
          <TextInput
            id="number_of_repeats"
            label="Number Of Repeats"
            value={data.number_of_repeats}
            error={errors.number_of_repeats}
            onChange={onChange}
            required
          />

          {/* note */}
          <TextInput
            id="note"
            label="Note"
            value={data.note}
            error={errors.note}
            onChange={onChange}
            required
          />

          {/* urgency_id */}
          <SelectInput
            label="Urgency"
            selected={data.urgency_id}
            error={errors.urgency_id}
            options={urgencies}
            onChange={(e) => {
              setData("urgency_id", e);
            }}
          />

          {/* wash_option_id */}
          <SelectInput
            label="Wash Option"
            selected={data.wash_option_id}
            error={errors.wash_option_id}
            options={wash_options}
            onChange={(e) => {
              setData("wash_option_id", e);
            }}
          />

          {/* packing_id */}
          <SelectInput
            label="Packing"
            selected={data.packing_id}
            error={errors.packing_id}
            options={packings}
            onChange={(e) => {
              setData("packing_id", e);
            }}
          />

          {/* status_id */}
          <SelectInput
            label="Status"
            selected={data.status_id}
            error={errors.status_id}
            options={statuses}
            onChange={(e) => {
              setData("status_id", e);
            }}
          />
        </FormContainer>
      </Main>
    </>
  );
};

export default Form;
