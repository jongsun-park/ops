import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import { Link } from "@inertiajs/react";

export const UpdateYarnLink = ({ id }) => (
  <Link href={route("yarns.edit", id)} className="ml-2" title="Update Yarn">
    <PencilSquareIcon className="h-[24px] w-[24px] text-blue-500" />
  </Link>
);

export const DeleteYarnLink = ({ id }) => (
  <Link
    href={route("yarns.destroy", id)}
    method="delete"
    as="button"
    className="ml-2"
    title="Delete Yarn"
  >
    <TrashIcon className="h-[24px] w-[24px] text-red-500" />
  </Link>
);
