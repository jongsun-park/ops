import { Head, Link } from "@inertiajs/react";

import Header from "@/Layouts/Header";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Detail, DetailsList } from "@/Components/DetailsList";
import Main from "@/Layouts/Main";

const Show = ({ yarn, user }) => {
  const title = `Yarn - ${yarn?.name}`;

  return (
    <>
      <Head title={title} />
      <Header>
        <div className="flex justify-between align-center">
          <h2 className="flex items-center font-semibold text-3xl text-gray-800 leading-tight">
            {title}
            {user?.can?.update && (
              <Link
                href={route("yarns.edit", yarn.id)}
                className="ml-2"
                title="Update Yarn"
              >
                <PencilSquareIcon className="h-[24px] w-[24px] text-blue-500" />
              </Link>
            )}
            {user?.can?.delete && (
              <Link
                href={route("yarns.destroy", yarn.id)}
                method="delete"
                as="button"
                className="ml-2"
                title="Delete Yarn"
              >
                <TrashIcon className="h-[24px] w-[24px] text-red-500" />
              </Link>
            )}
          </h2>
        </div>
      </Header>
      <Main>
        <DetailsList>
          <Detail dt="Name" dd={yarn.name} />
          <Detail dt="SKU" dd={yarn.sku} />
          <Detail dt="Supplier" dd={yarn.supplier} />
          <Detail dt="Color" dd={yarn.color} />
          <Detail dt="Material" dd={yarn.material} />
          <Detail dt="Written By" dd={user.name} />
          <Detail dt="Created at" dd={yarn.created_at} />
        </DetailsList>
      </Main>
    </>
  );
};

export default Show;
