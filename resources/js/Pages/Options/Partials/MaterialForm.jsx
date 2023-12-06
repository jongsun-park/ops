import { PrimaryButton } from "@/Components/Inputs";
import Input from "@/Components/Inputs/Input";
import { CloudArrowUpIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useForm } from "@inertiajs/react";

const MaterialForm = ({ selected = {} }) => {
  const entry = "materials";

  const { id, name } = selected;

  const init = {
    name: selected.name ?? "",
    code: selected.code ?? "",
  };

  const inputs = [
    { id: "name", label: "Name" },
    { id: "code", label: "Code" },
  ];

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
          onSuccess: () => setData(init),
        });
  };

  const onDelete = (e) => {
    e.preventDefault();
    destroy(`/${entry}/${id}`, { preserveScroll: true });
  };

  const button = id ? (
    <div className="flex flex-row items-center space-x-2">
      {/* <Button disabled={processing} onClick={onSubmit}>
        Update
      </Button> */}
      <CloudArrowUpIcon
        disabled={processing}
        onClick={onSubmit}
        className="h-6 w-6  text-blue-400 transition-all duration-200 hover:cursor-pointer hover:text-blue-600"
        alt="Update"
      />

      <TrashIcon
        onClick={onDelete}
        className="h-6 w-6  text-red-400 transition-all duration-200 hover:cursor-pointer hover:text-red-600"
      />
    </div>
  ) : (
    <PrimaryButton disabled={processing} onClick={onSubmit}>
      Create
    </PrimaryButton>
  );

  return (
    <div className="mb:p-0 flex flex-row justify-between space-x-3 p-2">
      <div className="flex-ro flex flex-1 flex-row space-x-2">
        {inputs.map(({ id, label }) => (
          <Input
            editable={true}
            key={id}
            id={id}
            label={label}
            value={data[id]}
            setData={setData}
            error={errors[id]}
            className="flex-1"
          />
        ))}
      </div>

      {button}
    </div>
  );
};

export default MaterialForm;
