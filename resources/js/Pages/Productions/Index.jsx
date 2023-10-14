import { Head, Link } from "@inertiajs/react";
import {
  ChevronDoubleRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import Pagination from "@/Components/Pagination";
import Search from "@/Components/Search";
import Header from "@/Layouts/Header";
import { Detail, DetailsList } from "@/Components/DetailsList";
import Main from "@/Layouts/Main";

const ProductionOrders = ({ productions = [], filters, can = {} }) => {
  return (
    <>
      <Head title="Production Orders" />
      <Header>
        <div className="flex flex-col justify-between align-center sm:flex-row">
          <h2 className="flex items-center font-semibold text-3xl text-gray-800 leading-tight">
            Production Orders
            {can?.create && (
              <Link
                href={route("productions.create")}
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
      <Main>
        <div className="space-y-2">
          {productions.data.map(
            ({
              id,
              product_name,
              created_at,
              created_by,
              order_id,
              customer_name,
              weave_by,
              note,
              status,
            }) => (
              <Link
                href={route("productions.show", id)}
                key={id}
                className="block"
              >
                <DetailsList>
                  <Detail dt="Product Name" dd={product_name} />
                  <Detail dt="Created At" dd={created_at} />
                  <Detail dt="Created By" dd={created_by} />
                  <Detail dt="Order ID" dd={order_id} />
                  <Detail dt="Customer Name" dd={customer_name} />
                  <Detail dt="Weave By" dd={weave_by} />
                  <Detail dt="Note" dd={note} />
                  <Detail dt="Status" dd={status} />
                </DetailsList>
              </Link>
            )
          )}
        </div>

        {productions.data.length == 0 && (
          <div className="grid place-content-center h-24 border border-gray-300 bg-slate-50 rounded-md m-5">
            <p>Please enter different keywords</p>
          </div>
        )}

        <div className="m-5 pb-10">
          <Pagination className="mt-6" links={productions.links} />
        </div>
      </Main>
    </>
  );
};

export default ProductionOrders;
