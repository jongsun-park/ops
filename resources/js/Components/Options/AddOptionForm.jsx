import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useForm } from "@inertiajs/react";

const AddOptionForm = ({ tableName = "" }) => {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
  });

  const betterTableName = tableName.replaceAll("_", " ").toUpperCase();

  function submit(e) {
    e.preventDefault();
    // console.log(data.name);
    post(`/options/${tableName}`, {
      onSuccess: () => setData("name", ""),
    });
  }

  return (
    <>
      <form className="relative flex items-center space-x-1" onSubmit={submit}>
        <div className="flex-1">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="mr-1 min-w-[240px] rounded border-gray-50 shadow"
            placeholder={`New Option in ${betterTableName}`}
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="text-sm font-bold uppercase text-blue-400 hover:text-blue-600 disabled:cursor-wait disabled:opacity-75"
          disabled={processing}
        >
          <PlusCircleIcon className="h-8 w-8" />
        </button>
        {errors.name && (
          <div className="absolute bottom-[-16px] text-xs text-red-500">
            {errors.name}
          </div>
        )}
      </form>
    </>
  );
};
export default AddOptionForm;
