import { PrimaryButton } from "@/Components/Inputs";
import DatePicker from "@/Components/UI/Inputs/DatePicker";
import Pannel from "@/Components/UI/Pannel";
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
  label = "Email",
  type = "text",
  id = "UserEmail",
  placeholder = "john@rhcp.com",
  value = "",
}) => (
  <div>
    <label
      htmlFor="UserEmail"
      className="block text-xs font-bold uppercase text-gray-700"
    >
      {label}
    </label>

    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="mt-2 w-full rounded border-0 sm:text-sm"
      value={value}
      onChange={() => {}}
    />
  </div>
);

const Form = ({ production, looms, products, wash_options }) => {
  console.log(production);
  const button = <PrimaryButton>Update Production</PrimaryButton>;
  return (
    <div>
      <Pannel title="Edit Production" className="space-y-2" button={button}>
        <Section title="Edit Dates" className="grid grid-cols-2 gap-2">
          <DatePicker label="Examined" />
          <DatePicker label="Printed" />
          <DatePicker label="Shipped" />
          <DatePicker label="Started" />
          <DatePicker label="Washed" />
          <DatePicker label="Weave By" />
        </Section>
        <Section title="Edit Loom" className="relative">
          <OpsComboBox options={looms} />
        </Section>
        <Section title="Edit Product">
          <OpsComboBox options={products} />
        </Section>

        <Section title="Edit Wash Option">
          <OpsComboBox options={wash_options} />
        </Section>
        <Section title="Others" className="space-y-4">
          <Input label="Quantity" value={100} />
          <Input label="Total Length" value={100} />
          <Input label="NC Number" value={100} />
        </Section>
      </Pannel>
    </div>
  );
};

export default Form;
