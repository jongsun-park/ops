import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import Form from "./Partials/Form";

const Show = ({ production, looms, products, wash_options }) => {
  const title = "Create Production Order";

  return (
    <>
      <Head title={title} />
      <Header>
        <div className="align-center flex justify-between">
          <h2 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
            {title}
          </h2>
        </div>
      </Header>
      <Main>
        <Form
          production={production}
          looms={looms}
          products={products}
          wash_options={wash_options}
        />
      </Main>
    </>
  );
};

export default Show;
