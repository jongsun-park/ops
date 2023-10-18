import { PlusCircleIcon } from "@heroicons/react/24/outline";

const AddOptionForm = ({ tableName = "" }) => {
  const betterTableName = tableName.replaceAll("_", " ");
  return (
    <form className="flex items-center space-x-1">
      <div className="flex-1">
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          className="w-full rounded border-gray-200 p-3 text-sm uppercase md:min-w-[240px]"
          placeholder={`New Option in ${betterTableName}`}
          type="text"
          id="name"
          required
        />
      </div>

      <button
        type="submit"
        className="inline-block rounded bg-gray-400 p-2 font-medium text-white hover:bg-blue-500 sm:w-auto"
      >
        <PlusCircleIcon className="h-6 w-6" />
      </button>
    </form>
  );
};
export default AddOptionForm;
