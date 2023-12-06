import { Button, PrimaryButton } from "@/Components/Inputs";
import Input from "@/Components/Inputs/Input";
import Pannel from "@/Components/UI/Pannel";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useForm } from "@inertiajs/react";

const InputGroupContainer = ({ title, children }) => (
  <section className=" rounded bg-white p-5">
    {title ?? <h2 className="font-bold text-blue-500">{title}</h2>}
    <div className="mt-3 space-y-2 md:columns-2">{children}</div>
  </section>
);

const WashOptionForm = ({ selected = {}, className }) => {
  const optionTitle = "Wash Option";
  const entry = "wash_options";

  const { id, name } = selected;

  const init = {
    machine_name: selected.name ?? selected.machine_name ?? "",
    machine_program: selected.machine_program ?? "",
    dryer_name: selected.dryer_name ?? "",
    dryer_program: selected.dryer_program ?? "",
    detergent_type: selected.detergent_type ?? "",
    detergent_amount: selected.detergent_amount ?? "",
    oba: selected.oba ?? "",
    softener: selected.softener ?? "",
    other: selected.other ?? "",
  };

  const resetInit = {
    machine_name: "",
    machine_program: "",
    dryer_name: "",
    dryer_program: "",
    detergent_type: "",
    detergent_amount: "",
    oba: "",
    softener: "",
    other: "",
  };

  const machine_inputs = [
    { id: "machine_name", label: "Wash Machine Name" },
    { id: "machine_program", label: "Wash Machine Program" },
  ];

  const dryer_inputs = [
    { id: "dryer_name", label: "Dryer Name" },
    { id: "dryer_program", label: "Dryer Program" },
  ];

  const rest_inputs = [
    { id: "detergent_type", label: "Detergent Type" },
    { id: "detergent_amount", label: "Detergent Amount" },
    { id: "oba", label: "OBA" },
    { id: "softener", label: "Softener" },
    { id: "other", label: "Other" },
  ];

  const generateInputs = (inputs) =>
    inputs.map(({ id, label, type = "text", options = [] }) => (
      <Input
        editable={true}
        key={id}
        id={id}
        label={label}
        value={data[id]}
        setData={setData}
        error={errors[id]}
        type={type}
        options={options}
      />
    ));

  const {
    data,
    setData,
    put,
    post,
    delete: destroy,
    processing,
    errors,
  } = useForm(init);

  const onSubmit = (e) => {
    e.preventDefault();
    id
      ? put(`/${entry}/${id}`, {
          preserveScroll: true,
        })
      : post(`/${entry}`, {
          preserveScroll: true,
          onSuccess: () => setData(resetInit),
        });
  };

  const onDelete = (e) => {
    e.preventDefault();
    destroy(`/${entry}/${id}`, { preserveScroll: true });
  };

  const button = id ? (
    <div className="flex flex-row items-center space-x-2">
      <Button disabled={processing} onClick={onSubmit}>
        Update
      </Button>
      <TrashIcon
        onClick={onDelete}
        className="h-8 w-8  text-red-400 transition-all duration-200 hover:cursor-pointer hover:text-red-600"
      />
    </div>
  ) : (
    <PrimaryButton disabled={processing} onClick={onSubmit}>
      Create
    </PrimaryButton>
  );

  return (
    <Pannel
      title={id ? name : `New ${optionTitle ?? "Option"}`}
      button={button}
      className={className}
    >
      <InputGroupContainer title="Washing Machine Options">
        {generateInputs(machine_inputs)}
      </InputGroupContainer>
      <InputGroupContainer title="Washing Machine Options">
        {generateInputs(dryer_inputs)}
      </InputGroupContainer>
      <InputGroupContainer title="Rest Options">
        {generateInputs(rest_inputs)}
      </InputGroupContainer>
    </Pannel>
  );
};

export default WashOptionForm;
