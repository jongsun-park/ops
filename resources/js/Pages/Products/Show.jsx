import { Head, Link } from "@inertiajs/react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Header from "@/Layouts/Header";
import { Detail, DetailsList } from "@/Components/DetailsList";
import Main from "@/Layouts/Main";

const Show = ({ product, user }) => {
  const title = `Product - ${product?.name}`;

  return (
    <>
      <Head title={title} />
      <Header>
        <div className="flex justify-between align-center">
          <h2 className="flex items-center font-semibold text-3xl text-gray-800 leading-tight">
            {title}
            {user?.can?.update && (
              <Link
                href={route("products.edit", product.id)}
                className="ml-2"
                title="Update product"
              >
                <PencilSquareIcon className="h-[24px] w-[24px] text-blue-500" />
              </Link>
            )}
            {user?.can?.delete && (
              <Link
                href={route("products.destroy", product.id)}
                method="delete"
                as="button"
                className="ml-2"
                title="Delete product"
              >
                <TrashIcon className="h-[24px] w-[24px] text-red-500" />
              </Link>
            )}
          </h2>
        </div>
      </Header>
      <Main>
        <DetailsList>
          <Detail dt="Product Name" dd={product.name} />
          <Detail dt="SKU" dd={product.sku} />
          <Detail dt="Description" dd={product.description} />
          <Detail dt="TF Number" dd={product.tf_number} />
          <Detail dt="Divisors" dd={product.divs} />
          <Detail dt="PPCM" dd={product.ppcm} />
          <Detail dt="PPREPEAT" dd={product.pprepeat} />
          <Detail dt="CUT Width" dd={product.cut_width} />
          <Detail dt="CUT Length" dd={product.cut_length} />
          <Detail dt="Finish Width" dd={product.finish_width} />
          <Detail dt="Finish Length" dd={product.finish_length} />
          <Detail dt="Unit" dd={product.unit} />
          <Detail dt="Loom" dd={product.loom} />
          <Detail dt="Label" dd={product.label} />
          <Detail dt="Hem Type" dd={product.hem_type} />
          <Detail dt="Hem Size" dd={product.hem_size} />
          <Detail dt="Corner" dd={product.corner} />
          <Detail dt="Created At" dd={product.created_at} />
          <Detail dt="Yarn 1" dd={product.yarn1} />
          <Detail dt="Yarn 2" dd={product.yarn2} />
          <Detail dt="Yarn 3" dd={product.yarn3} />
          <Detail dt="Yarn 4" dd={product.yarn4} />
        </DetailsList>
      </Main>
    </>
  );
};

export default Show;
