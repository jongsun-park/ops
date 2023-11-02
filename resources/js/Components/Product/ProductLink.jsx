import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

export const UpdateProductLink = ({ id }) => (
  <Link
    href={route("products.edit", id)}
    className="ml-2"
    title="Update product"
  >
    <PencilSquareIcon className="h-[24px] w-[24px] text-blue-500" />
  </Link>
);

export const DeleteProductLink = ({ id }) => (
  <Link
    href={route("products.destroy", id)}
    method="delete"
    as="button"
    className="ml-2"
    title="Delete product"
  >
    <TrashIcon className="h-[24px] w-[24px] text-red-500" />
  </Link>
);
