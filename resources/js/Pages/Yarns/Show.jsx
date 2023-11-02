import { Head } from "@inertiajs/react";

import YarnDetails from "@/Components/Yarn/YarnDetails";
import { DeleteYarnLink, UpdateYarnLink } from "@/Components/Yarn/YarnLink";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";

const Show = ({ yarn, user, options }) => {
  const title = `Yarn - ${yarn?.sku}`;

  return (
    <>
      <Head title={title} />
      <Header>
        <div className="align-center flex justify-between">
          <h1 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
            {title}
            {user?.can?.update && <UpdateYarnLink id={yarn.id} />}
            {user?.can?.delete && <DeleteYarnLink id={yarn.id} />}
          </h1>
        </div>
      </Header>
      <Main>
        <YarnDetails user={user} yarn={yarn} options={options} />
      </Main>
    </>
  );
};

export default Show;
