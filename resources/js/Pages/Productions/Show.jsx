import MakingUpOrder from "@/Components/Pro/MakingUpOrder";
import ProductionDetail from "@/Components/Pro/ProductionDetail";
import ProductionOrder from "@/Components/Pro/ProductionOrder";
import ProductionOrderStatus from "@/Components/Pro/ProductionOrderStatus";
import Swiper from "@/Components/UI/Swiper";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Head, Link, usePage } from "@inertiajs/react";

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

/**
 *
 * TODO
 * 1. Remove Edit Button - Don't need Edit page as Show page has edit features
 * 2. PRO Template update with variables
 * 3. Yarn Table
 */

const Show = ({ production, user }) => {
  const { id, status } = production;

  const title = `Production Order Details`;

  const user_name = usePage().props.auth.user.name;

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
        <section className="mb-10">
          <div className="space-y-4">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              slides={[<ProductionOrder />, <MakingUpOrder />]}
            />
            <p className="text-sm font-bold text-blue-500">
              Swipe to change Production Order and Making Up Order
            </p>
          </div>
        </section>

        <ProductionOrderStatus
          id={status.id}
          can={user.can.update_status}
          user={user_name}
          status={status}
        />

        <ProductionDetail user={user} production={production} />
      </Main>
    </>
  );
};

export default Show;
