import MakingUpOrder from "@/Components/Pro/MakingUpOrder";
import ProductionDetail from "@/Components/Pro/ProductionDetail";
import {
  DeleteProductionOrder,
  UpdateProductionOrder,
} from "@/Components/Pro/ProductionLink";
import ProductionOrder from "@/Components/Pro/ProductionOrder";
import ProductionOrderStatus from "@/Components/Pro/ProductionOrderStatus";
import Swiper from "@/Components/UI/Swiper";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import { Head, usePage } from "@inertiajs/react";

/**
 *
 * TODO
 * 1. Remove Edit Button - Don't need Edit page as Show page has edit features
 * 2. PRO Template update with variables
 * 3. Yarn Table
 * 4. Product ID / User ID - Make it as Select not Text Input
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
            {user?.can?.update && <UpdateProductionOrder id={id} />}
            {user?.can?.delete && <DeleteProductionOrder id={id} />}
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
