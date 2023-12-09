import MakingUpOrder from "@/Components/Production/MakingUpOrder";
import ProductionOrder from "@/Components/Production/ProductionOrder";
import ProductionOrderStatus from "@/Components/Production/ProductionOrderStatus";
import Swiper from "@/Components/UI/Swiper";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import Form from "./Partials/Form";

const Show = ({ production, user, looms, products, wash_options }) => {
  const { id, status } = production;

  const title = `Production Order Details`;

  console.log(looms);

  return (
    <>
      <Head title={title} />
      <Header>
        <div className="align-center flex justify-between">
          <h2 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
            {title}
            {/* {user?.can?.update && <UpdateProductionOrder id={id} />} */}
            {/* {user?.can?.delete && <DeleteProductionOrder id={id} />} */}
          </h2>
        </div>
      </Header>
      <Main>
        <section className="mb-10">
          <div className="space-y-4">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              slides={[
                <ProductionOrder production={production} />,
                <MakingUpOrder production={production} />,
              ]}
            />
            <p className="text-sm font-bold text-blue-500">
              Swipe to change Production Order and Making Up Order
            </p>
          </div>
        </section>

        <Form
          production={production}
          looms={looms}
          products={products}
          wash_options={wash_options}
        />

        <ProductionOrderStatus
          id={status.id}
          can={user.can.update_status}
          user={user.name}
          status={status}
        />

        {/* <ProductionDetails user={user} production={production} /> */}
      </Main>
    </>
  );
};

export default Show;
