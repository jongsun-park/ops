import { Detail, DetailsList } from "@/Components/DetailsList";
import MakingUpOrder from "@/Components/Pro/MakingUpOrder";
import ProductionOrder from "@/Components/Pro/ProductionOrder";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";

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

const Show = ({ production, user }) => {
  const {
    id,
    created_at,
    updated_at,
    product_name,
    product_sku,
    product_description,

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

  const title = `Production Order Details`;

  return (
    <>
      <Head title={title} />
      <Header>
        <div className="align-center flex justify-between">
          <h2 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
            {title}
            {user?.can?.update && <UpdateProductionOder id={id} />}
            {user?.can?.delete && <DeleteProductionOder id={id} />}
          </h2>
        </div>
      </Header>
      <Main>
        <div className="mb-10">
          <div className="space-y-2">
            <ProductionOrder />
            <MakingUpOrder />
          </div>
        </div>
        <DetailsList>
          <Detail dt="Created At" dd={created_at} />
          <Detail dt="Updated At" dd={updated_at} />
          <Detail dt="Product Name" dd={product_name} />
          <Detail dt="Product Sku" dd={product_sku} />
          <Detail dt="Product Description" dd={product_description} />
          <Detail dt="Written By" dd={written_by} />
          <Detail dt="Order Id" dd={order_id} />
          <Detail dt="Customer Name" dd={customer_name} />
          <Detail dt="Weave By" dd={weave_by} />
          <Detail dt="Quantity" dd={quantity} />
          <Detail dt="Total Length" dd={total_length} />
          <Detail dt="Note" dd={note} />
          <Detail dt="Urgency" dd={urgency} />
          <Detail dt="Wash_option" dd={wash_option} />
          <Detail dt="Packing" dd={packing} />
          <Detail dt="Status" dd={status} />
        </DetailsList>
      </Main>
    </>
  );
};

export default Show;
