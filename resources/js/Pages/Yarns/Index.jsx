import { Head, Link } from "@inertiajs/react";
import {
  ChevronDoubleRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import Pagination from "@/Components/Pagination";
import Search from "@/Components/Search";
import Header from "@/Layouts/Header";
import { Detail, DetailsList } from "@/Components/DetailsList";

const Yarn = ({ yarns = [], filters, can = {} }) => {
  return (
    <>
      <Head title="Yarns" />
      <Header>
        <div className="flex justify-between align-center">
          <h2 className="flex items-center font-semibold text-3xl text-gray-800 leading-tight">
            Yarns
            {can?.create && (
              <Link
                href={route("yarns.create")}
                className="ml-2"
                title="Create a new yarn"
              >
                <PlusCircleIcon className="h-[30px] w-[30px] text-blue-500" />
              </Link>
            )}
          </h2>
          <Search filters={filters.search} />
        </div>
      </Header>
      <main>
        <div className="mx-5 px-5">
          <div className="space-y-2">
            {yarns.data.map(
              ({
                id,
                name,
                sku,
                supplier,
                user_name,
                created_at,
                color,
                material,
              }) => (
                <Link href={route("yarns.show", id)} key={id} className="block">
                  <DetailsList>
                    <Detail dt="Name" dd={name} />
                    <Detail dt="SKU" dd={sku} />
                    <Detail dt="Supplier" dd={supplier} />
                    <Detail dt="Color" dd={color} />
                    <Detail dt="Material" dd={material} />
                    <Detail dt="Written By" dd={user_name} />
                    <Detail dt="Created at" dd={created_at} />
                  </DetailsList>
                </Link>
              )
            )}
          </div>
        </div>

        {yarns.data.length == 0 && (
          <div className="grid place-content-center h-24 border border-gray-300 bg-slate-50 rounded-md m-5">
            <p className="text-gray-600">Please enter different keywords</p>
          </div>
        )}

        <div className="m-5 pb-10">
          <Pagination class="mt-6" links={yarns.links} />
        </div>
      </main>
    </>
  );
};

export default Yarn;
