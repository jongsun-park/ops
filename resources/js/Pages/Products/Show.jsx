import ProductDetails from "@/Components/Product/ProductDetails";
import {
  DeleteProductLink,
  UpdateProductLink,
} from "@/Components/Product/ProductLink";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";

const Show = ({ product, user, options }) => {
  const title = `Product - ${product?.name}`;

  return (
    <>
      <Head title={title} />
      <Header>
        <div className="align-center flex justify-between">
          <h2 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
            {title}
            {user?.can?.update && <UpdateProductLink id={product.id} />}
            {user?.can?.delete && <DeleteProductLink id={product.id} />}
          </h2>
        </div>
      </Header>
      <Main>
        <ProductDetails product={product} user={user} options={options} />
      </Main>
    </>
  );
};

export default Show;
