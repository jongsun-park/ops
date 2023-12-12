import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import Banner from "./Partials/Banner";
import NotCompletedProduction from "./Partials/NotCompletedProduction";

export const Section = ({ heading = "", children, className = "" }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-500">{heading}</h2>
      <div className={className}>{children}</div>
    </section>
  );
};

export const PlaceHolder = ({ className }) => (
  <div
    className={`lex flex min-h-[200px] min-w-[200px] flex-1 items-center justify-center bg-gray-200 ${className}`}
  >
    Link
  </div>
);

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard" />
      <Main className="space-y-10">
        <Banner />
        <NotCompletedProduction />
        <Section
          heading="Filtered production orders based on urgencies"
          className="my-5 flex flex-row space-x-3"
        >
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
        </Section>
        <Section
          heading="Orders scheduled for the near future"
          className="my-5 flex flex-col space-y-3"
        >
          <PlaceHolder className="min-h-[100px]" />
          <PlaceHolder className="min-h-[100px]" />
          <PlaceHolder className="min-h-[100px]" />
        </Section>
      </Main>
    </>
  );
}
