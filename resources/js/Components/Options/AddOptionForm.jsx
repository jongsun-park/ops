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
            className="w-full rounded border-gray-200 p-3 text-sm sm:min-w-[240px]"
            placeholder={`New Option in ${betterTableName}`}
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="inline-block rounded bg-gray-400 p-2 font-medium text-white hover:bg-blue-500 sm:w-auto"
        >
          <PlusCircleIcon className="h-6 w-6" />
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
