import { DocumentTextIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link, useForm } from "@inertiajs/react";
import { UpdateFormSubmitButton, UpdateOptionForm } from "./UpdateOptionForm";

const UpdateDeleteOptionForm = ({ tableName, id, name }) => {
  const { delete: destroy } = useForm({
    name: "",
  });

  const onDeleteSubmit = (e, id) => {
    e.preventDefault();
    destroy(`/options/${tableName}/${id}`, {
      preserveScroll: true,
    });
  };

  return (
    <li className="relative flex flex-row items-center justify-between rounded-md p-3 hover:bg-gray-100">
      <UpdateOptionForm table={tableName} id={id} name={name} />

      <span className="ml-2 inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
        <UpdateFormSubmitButton table={tableName} id={id} />

        <form onSubmit={(e) => onDeleteSubmit(e, id)}>
          <button
            type="submit"
            className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
          >
            <TrashIcon className="h-4 w-4 text-slate-500" />
          </button>
        </form>

        {/* TODO: /search?color=opt.name */}
        <Link
          href={`/search?${tableName}=${name}`}
          className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
          title="Related Records"
        >
          <DocumentTextIcon className="h-4 w-4 text-slate-500" />
        </Link>
      </span>
    </li>
  );
};

export default UpdateDeleteOptionForm;
