import { Button, PrimaryButton } from "@/Components/Inputs";
import Input from "@/Components/Inputs/Input";
import Pannel from "@/Components/UI/Pannel";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useForm } from "@inertiajs/react";

const Form = ({ loom = {}, yarns, className }) => {
  const { id, name } = loom;

  const {
    data,
    setData,
    put,
    post,
    delete: destroy,
    processing,
    errors,
  } = useForm({
    name: loom?.name ?? "",
    density: loom?.density ?? "",
    speed: loom?.speed ?? "",
    make: loom?.make ?? "",
    yarn_id: loom?.yarn_id ?? "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    loom.id
      ? put(`/looms/${loom.id}`, {
          preserveScroll: true,
        })
      : post("/looms", {
          preserveScroll: true,
          onSuccess: () =>
            setData({
              name: "",
              density: "",
              speed: "",
              yarn_id: "",
              make: "",
            }),
        });
  };

  const onDelete = (e) => {
    e.preventDefault();
    destroy(`/looms/${loom.id}`, { preserveScroll: true });
  };

  const inputs = [
    {
      id: "yarn_id",
      label: "WARP YARN",
      type: "select",
      options: yarns,
    },
    { id: "name", label: "Loom Name" },
    { id: "density", label: "Yarn Density" },
    { id: "speed", label: "Nominal Speed" },
    { id: "make", label: "Jacquard / Dobby Make" },
  ];

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
      title={id ? name : "Create Loom"}
      button={button}
      className={className}
    >
      {inputs.map(({ id, label, type = "text", options = [] }) => (
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
      ))}
    </Pannel>
  );
};

export default Form;
