import { Head, Link } from "@inertiajs/react";
import {
  ChevronDoubleRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import Pagination from "@/Components/Pagination";
import Search from "@/Components/Search";
import Header from "@/Layouts/Header";

const Row = ({ label, children }) => {
  if (!children) return;

  return (
    <div>
      <label className="uppercase text-blue-400 font-bold text-xs">
        {label}
      </label>
      <p>{children}</p>
    </div>
  );
};

const ProductionOrderList = ({ pros = [] }) => {
  return (
    <ul role="list" className="space-y-4">
      {pros.map(
        ({
          id,
          product,
          created_at,
          created_by,
          order_id,
          customer_name,
          weave_by,
          note,
          status,
          can,
        }) => (
          <div key={id}>
            <li className="flex justify-between gap-x-6 p-5 pt-3 rounded bg-white">
              <div className="mt-1 space-y-4">
                <Row label="Product">
                  {product.name} - {product.sku}
                </Row>
                <Row label="Created At">{created_at}</Row>
                <Row label="Written By">
                  {`${created_by.name} - ${created_by.email}`}
                </Row>
                <Row label="Order">{order_id}</Row>
                <Row label="Customer">{customer_name}</Row>
                <Row label="Weave by">{weave_by}</Row>
                <Row label="Note">{note}</Row>
                <Row label="Status">{status}</Row>
              </div>
              <Link
                href={route("productions.show", id)}
                className="flex-0 mr-3 opacity-75 text-blue-300 hover:text-blue-600 hover:opacity-100"
              >
                <ChevronDoubleRightIcon className="h-6 w-6 text-blue-500" />
              </Link>
            </li>
          </div>
        )
      )}
    </ul>
  );
};

const ProductionOrders = ({ productions = [], filters, can = {} }) => {
  return (
    <>
      <Head title="Production Orders" />
      <Header>
        <div className="flex justify-between align-center">
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
      <main>
        <div className="mx-5 px-5 pb-2">
          <ProductionOrderList pros={productions.data} />
        </div>

        {productions.data.length == 0 && (
          <div className="grid place-content-center h-24 border border-gray-300 bg-slate-50 rounded-md m-5">
            <p>Please enter different keywords</p>
          </div>
        )}

        <div className="m-5 pb-10">
          <Pagination className="mt-6" links={productions.links} />
        </div>
      </main>
    </>
  );
};

export default ProductionOrders;
