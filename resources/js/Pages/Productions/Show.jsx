import { Head, Link } from "@inertiajs/react";
import {
  PencilSquareIcon,
  ChevronDoubleRightIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Header from "@/Layouts/Header";

const UpdateProductionOder = ({ id }) => (
  <Link
    href={route("productions.edit", id)}
    className="ml-2"
    title="Update product"
  >
    <PencilSquareIcon className="h-[24px] w-[24px] text-blue-500" />
  </Link>
);

const DeleteProductionOder = ({ id }) => (
  <Link
    href={route("productions.destroy", id)}
    method="delete"
    as="button"
    className="ml-2"
    title="Delete product"
  >
    <TrashIcon className="h-[24px] w-[24px] text-red-500" />
  </Link>
);

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

const Show = ({ production, user }) => {
  const {
    id,
    created_at,
    updated_at,
    product,
    written_by,
    order_id,
    customer_name,
    weave_by,
    quantity,
    total_length,
    note,
    urgency,
    wash_option,
    packing,
    status,
  } = production;

  const title = `Production Order - ${product.name}`;

  return (
    <>
      <Head title={title} />
      <Header>
        <div className="flex justify-between align-center">
          <h2 className="flex items-center font-semibold text-3xl text-gray-800 leading-tight">
            {title}
            {user?.can?.update && <UpdateProductionOder id={id} />}
            {user?.can?.delete && <DeleteProductionOder id={id} />}
          </h2>
        </div>
      </Header>
      <main>
        <div className="mx-5 px-5 py-5 rounded bg-white space-y-3">
          <Row label="created_at">{created_at}</Row>
          <Row label="updated_at">{updated_at}</Row>
          <Row label="product">
            <Link
              href={route("products.show", product.id)}
              as="button"
              title="Show Product"
            >
              {product.name}{" "}
              <ChevronDoubleRightIcon className="inline h-[24px] w-[24px] text-blue-500" />
            </Link>
          </Row>
          <Row label="written_by">{written_by.name}</Row>
          <Row label="order_id">{order_id}</Row>
          <Row label="customer_name">{customer_name}</Row>
          <Row label="weave_by">{weave_by}</Row>
          <Row label="quantity">{quantity}</Row>
          <Row label="total_length">{total_length}</Row>
          <Row label="note">{note}</Row>
          <Row label="urgency">{urgency}</Row>
          <Row label="wash_option">{wash_option}</Row>
          <Row label="packing">{packing}</Row>
          <Row label="status">{status}</Row>
        </div>
      </main>
    </>
  );
};

export default Show;
