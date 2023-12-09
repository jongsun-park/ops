import FormContainer from "@/Components/FormContainer";
import { PrimaryButton } from "@/Components/Inputs";
import DatePicker from "@/Components/UI/Inputs/DatePicker";
import Pannel from "@/Components/UI/Pannel";
import { useForm } from "@inertiajs/react";
import OpsComboBox from "../../../Components/UI/Inputs/ComboBox";

const Section = ({ title, button = null, children, className }) => (
  <>
    <div className="flex flex-row justify-between">
      <h2 className="font-bold uppercase">{title}</h2>
      {button}
    </div>
    <section className={className}>{children}</section>
  </>
);

const Input = ({
  label = "Label",
  type = "text",
  id = "",
  value = "",
  name = "",
  onChange = () => {},
  required = false,
}) => (
  <div>
    <label
      htmlFor={label}
      className="block text-xs font-bold uppercase text-gray-700"
    >
      {label}
    </label>

    <input
      type={type}
      id={id}
      name={name}
      className="mt-2 w-full rounded border-0 sm:text-sm"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

const Form = ({ production, looms, products, wash_options }) => {
  const init = {
    // date
    examined: production.date.examined ?? "",
    printed: production.date.printed ?? "",
    shipped: production.date.shipped ?? "",
    started: production.date.started ?? "",
    washed: production.date.washed ?? "",
    weave_by: production.date.weave_by ?? "",
    // fk
    product_id: production.product.id ?? "",
    wash_option_id: production.wash_option.id ?? "",
    // others
    order_id: production.order_id ?? "",
    customer_name: production.customer_name ?? "",
    quantity: production.quantity ?? "",
    total_length: production.total_length ?? "",
    urgency: production.urgency ?? "",
    nc_number: production.nc_number ?? "",
    note: production.note ?? "",
  };

  const { data, setData, post, put, processing, errors } = useForm(init);

  function submit(e) {
    e.preventDefault();
    production.id ? put(`/productions/${production.id}`) : post("/productions");
  }

  function onChange(e) {
    setData(e.target.name, e.target.value);
  }

  const buttonText = production ? "Update Production" : "Create Production";

  const button = (
    <PrimaryButton
      onClick={() => {
        console.log("submitted");
      }}
    >
      {buttonText}
    </PrimaryButton>
  );

  return (
    <div>
      <Pannel title="Edit Production" className="space-y-2" button={button}>
        <FormContainer
          onSubmit={submit}
          processing={processing}
          buttonText={buttonText}
        >
          {/* dates */}
          <Section title="Edit Dates" className="grid grid-cols-2 gap-2">
            <DatePicker
              label="Examined"
              value={data.examined}
              name="examined"
              onChange={onChange}
            />

            <DatePicker
              label="Printed"
              value={data.printed}
              name="printed"
              onChange={onChange}
            />
            <DatePicker
              label="Shipped"
              value={data.shipped}
              name="shipped"
              onChange={onChange}
            />
            <DatePicker
              label="Started"
              value={data.started}
              name="started"
              onChange={onChange}
            />
            <DatePicker
              label="Washed"
              value={data.washed}
              name="washed"
              onChange={onChange}
            />
            <DatePicker
              label="Weave By"
              value={data.weave_by}
              name="weave_by"
              onChange={onChange}
            />
          </Section>
          <Section title="Edit Product">
            <OpsComboBox
              options={products}
              name="product_id"
              value={data.product_id}
              setData={setData}
            />
          </Section>

          <Section title="Edit Wash Option">
            <OpsComboBox
              options={wash_options}
              name="product_id"
              value={data.wash_option_id}
              setData={setData}
            />
          </Section>
          <Section title="Others" className="space-y-4">
            <Input
              label="Order ID"
              name="order_id"
              value={data.order_id}
              onChange={onChange}
            />
            <Input
              label="Customer Name"
              name="customer_name"
              value={data.customer_name}
              onChange={onChange}
            />
            <Input
              label="Quantity"
              name="quantity"
              value={data.quantity}
              onChange={onChange}
            />
            <Input
              label="Total Length"
              name="total_length"
              value={data.total_length}
              onChange={onChange}
            />
            <Input
              label="NC Number"
              name="nc_number"
              value={data.nc_number}
              onChange={onChange}
            />
            <Input
              label="Note"
              name="note"
              value={data.note}
              onChange={onChange}
            />
          </Section>
        </FormContainer>
      </Pannel>
    </div>
  );
};

export default Form;
