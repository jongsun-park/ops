import TestChart from "@/Components/UI/Charts/TestChart";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
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
        <div className="chart-container">
          <TestChart />
        </div>
      </Main>
    </>
  );
}
