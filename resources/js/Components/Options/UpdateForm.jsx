import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { router, useForm } from "@inertiajs/react";

export const UpdateForm = ({ table, id, name }) => {
  const { data, setData, errors, post } = useForm({
    name: name,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(`/options/${table}/${id}`, {
      preserveScroll: true,
      onSuccess: () => {
        router.visit(`/options`, {
          only: [table],
        });
      },
    });
  };

  return (
    <>
      <form id={`${table}_option_${id}`} onSubmit={onSubmit} className="flex-1">
        <input
          type="text"
          name="name"
          id="name"
          className="text-sm font-medium leading-5 border-0 border-b-2 border-gray-200 p-0 bg-transparent focus:ring-0 w-full focus:text-blue-500"
          value={data.name}
          onChange={(e) => setData("name", e.target.value)}
        />
        {errors.name && (
          <div className="text-red-500 text-xs font-bold  bottom-[-16px]">
            {errors.name}
          </div>
        )}
      </form>
    </>
  );
};

export const UpdateFormSubmitButton = ({ table, id }) => {
  return (
    <button
      className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
      title="Edit Option"
      type="submit"
      form={`${table}_option_${id}`}
    >
      <PencilSquareIcon className="h-4 w-4 text-slate-500" />
    </button>
  );
};
