import Stat from "@/Components/UI/Stat";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard" />
      <Header>
        <h1 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h1>
      </Header>
      <Main>
        <div className="grid gap-x-2 gap-y-2 sm:grid-cols-3">
          <Stat
            Icon={<Square3Stack3DIcon className="h-8 w-8" />}
            stat="$240.94"
            title="Total Active Pro"
          />
          <Stat
            Icon={<Square3Stack3DIcon className="h-8 w-8" />}
            stat="$240.94"
            title="Total Complete Pro"
          />
          <Stat
            Icon={<Square3Stack3DIcon className="h-8 w-8" />}
            stat="$240.94"
            title="Total Draft Draft"
          />
        </div>
      </Main>
    </>
  );
}
