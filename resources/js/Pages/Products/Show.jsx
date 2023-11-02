import ProductDetails from "@/Components/Product/ProductDetails";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";

const Show = ({ product, user }) => {
  const title = `Product - ${product?.name}`;

  return (
    <>
      <Head title={title} />
      <Header>
        <div className="align-center flex justify-between">
          <h2 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
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
        <ProductDetails product={product} user={user} />
      </Main>
    </>
  );
};

export default Show;
