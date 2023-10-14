import { Head, Link } from "@inertiajs/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

import Pagination from "@/Components/Pagination";
import Search from "@/Components/Search";
import Header from "@/Layouts/Header";
import { Detail, DetailsList } from "@/Components/DetailsList";

const Products = ({ products = [], filters, can = {} }) => {
  return (
    <>
      <Head title="Products" />
      <Header>
        <div className="flex justify-between align-center">
          <h2 className="flex items-center font-semibold text-3xl text-gray-800 leading-tight">
            Products
            {can?.create && (
              <Link
                href={route("products.create")}
                className="ml-2"
                title="Create a new product"
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
            {products.data.map(
              ({ id, name, user_name, sku, description, created_at }) => (
                <Link
                  href={route("products.show", id)}
                  key={id}
                  className="block"
                >
                  <DetailsList>
                    <Detail dt="Sku" dd={sku} />
                    <Detail dt="Name" dd={name} />
                    <Detail dt="Description" dd={description} />
                    <Detail dt="Written By" dd={user_name} />
                    <Detail dt="Created At" dd={created_at} />
                  </DetailsList>
                </Link>
              )
            )}
          </div>
        </div>

        {products.data.length == 0 && (
          <div className="grid place-content-center h-24 border border-gray-300 bg-slate-50 rounded-md m-5">
            <p className="text-gray-600">Please enter different keywords</p>
          </div>
        )}

        <div className="m-5 pb-10">
          <Pagination className="mt-6" links={products.links} />
        </div>
      </main>
    </>
  );
};

export default Products;
