import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";

import { Detail, DetailsList } from "@/Components/DetailsList";
import Pagination from "@/Components/Pagination";
import Search from "@/Components/Search";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";

const Yarn = ({ yarns = [], filters, can = {} }) => {
  return (
    <>
      <Head title="Yarns" />
      <Header>
        <div className="align-center flex justify-between">
          <h1 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
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
          </h1>
          <Search filters={filters.search} />
        </div>
      </Header>
      <Main>
        <div className="space-y-2">
          {yarns.data.map(
            ({ id, sku, user_name, created_at, colour, material }) => (
              <Link href={route("yarns.show", id)} key={id} className="block">
                <DetailsList>
                  <Detail dt="SKU" dd={sku} />
                  <Detail dt="Color" dd={colour} />
                  <Detail dt="Material" dd={material} />
                  <Detail dt="Written By" dd={user_name} />
                  <Detail dt="Created at" dd={created_at} />
                </DetailsList>
              </Link>
            ),
          )}
        </div>

        {yarns.data.length == 0 && (
          <div className="m-5 grid h-24 place-content-center rounded-md border border-gray-300 bg-slate-50">
            <p className="text-gray-600">Please enter different keywords</p>
          </div>
        )}

        <div className="m-5 pb-10">
          <Pagination class="mt-6" links={yarns.links} />
        </div>
      </Main>
    </>
  );
};

export default Yarn;
