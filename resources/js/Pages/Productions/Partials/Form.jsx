import FormContainer from "@/Components/FormContainer";
import { PrimaryButton } from "@/Components/Inputs";
import Pannel from "@/Components/UI/Pannel";
import { useForm } from "@inertiajs/react";
import OpsComboBox from "../../../Components/UI/Inputs/ComboBox";
import DatePicker from "./DatePicker";
import Input from "./Input";
import Section from "./Section";

const InfoBox = () => (
  <div className="w-[30ch] rounded border-2 border-blue-400 bg-blue-100 p-4">
    <h2 className="text-sm font-bold text-blue-400">Required Fields</h2>
    <ul className="text-xs">
      <li>
        <span className="font-bold">Weave By:</span> Sale Agreement Date (Due
        Date)
      </li>
      <li>
        <span className="font-bold">Product:</span> Please chose one of Product
      </li>
      <li>
        <span className="font-bold">Wash Option:</span> Please chose one of Wash
        Option
      </li>
    </ul>
  </div>
);

const Form = ({ production, products, wash_options }) => {
  const init = {
    // date
    date_examined: production?.date.examined ?? "",
    date_printed: production?.date.printed ?? "",
    date_shipped: production?.date.shipped ?? "",
    date_started: production?.date.started ?? "",
    date_washed: production?.date.washed ?? "",
    date_weave_by: production?.date.weave_by ?? "",
    // fk
    product_id: production?.product.id ?? "",
    wash_option_id: production?.wash_option.id ?? "",
    // others
    order_id: production?.order_id ?? "",
    customer_name: production?.customer_name ?? "",
    quantity: production?.quantity ?? "",
    total_length: production?.total_length ?? "",
    urgency: production?.urgency ?? "",
    nc_number: production?.nc_number ?? "",
    note: production?.note ?? "",
  };

  const { data, setData, post, put, processing, errors } = useForm(init);

  function submit(e) {
    e.preventDefault();
    production?.id
      ? put(`/productions/${production.id}`)
      : post("/productions");
  }

  function onChange(e) {
    setData(e.target.name, e.target.value);
  }

  const buttonText = production ? "Update Production" : "Create Production";

  const button = <PrimaryButton onClick={submit}>{buttonText}</PrimaryButton>;

  return (
    <div>
      <Pannel title="Edit Production" className="space-y-2" button={button}>
        <FormContainer
          onSubmit={submit}
          processing={processing}
          buttonText={buttonText}
        >
          <InfoBox />
          {/* dates */}
          <Section title="Edit Dates" className="grid grid-cols-2 gap-2">
            <DatePicker
              label="Examined"
              value={data.date_examined}
              error={errors.date_examined}
              name="date_examined"
              onChange={onChange}
            />

            <DatePicker
              label="Printed"
              value={data.date_printed}
              error={errors.date_printed}
              name="date_printed"
              onChange={onChange}
            />
            <DatePicker
              label="Shipped"
              value={data.date_shipped}
              error={errors.date_shipped}
              name="date_shipped"
              onChange={onChange}
            />
            <DatePicker
              label="Started"
              value={data.date_started}
              error={errors.date_started}
              name="date_started"
              onChange={onChange}
            />
            <DatePicker
              label="Washed"
              value={data.date_washed}
              error={errors.date_washed}
              name="date_washed"
              onChange={onChange}
            />
            <DatePicker
              label="Weave By*"
              value={data.date_weave_by}
              error={errors.date_weave_by}
              name="date_weave_by"
              onChange={onChange}
            />
          </Section>
          <Section title="Edit Product*">
            <OpsComboBox
              options={products}
              name="product_id"
              value={data.product_id}
              error={errors.product_id}
              setData={setData}
            />
          </Section>

          <Section title="Edit Wash Option*">
            <OpsComboBox
              options={wash_options}
              name="wash_option_id"
              value={data.wash_option_id}
              error={errors.wash_option_id}
              setData={setData}
            />
          </Section>
          <Section title="Others" className="space-y-4">
            <Input
              label="Order ID"
              name="order_id"
              value={data.order_id}
              error={errors.order_id}
              onChange={onChange}
            />
            <Input
              label="Customer Name"
              name="customer_name"
              value={data.customer_name}
              error={errors.customer_name}
              onChange={onChange}
            />
            <Input
              label="Quantity"
              name="quantity"
              value={data.quantity}
              error={errors.quantity}
              onChange={onChange}
            />
            <Input
              label="Total Length"
              name="total_length"
              value={data.total_length}
              error={errors.total_length}
              onChange={onChange}
            />
            <Input
              label="NC Number"
              name="nc_number"
              value={data.nc_number}
              error={errors.nc_number}
              onChange={onChange}
            />
            <Input
              label="Note"
              name="note"
              value={data.note}
              error={errors.note}
              onChange={onChange}
            />
          </Section>
        </FormContainer>
      </Pannel>
    </div>
  );
};

export default Form;
