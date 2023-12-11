import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import Banner from "./Partials/Banner";

const Section = ({ heading = "", children, className = "" }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-500">{heading}</h2>
      <div className={className}>{children}</div>
    </section>
  );
};

const PlaceHolder = ({ className }) => (
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
        <Section
          heading="Jobs need to be done"
          className="my-5 flex flex-row space-x-3"
        >
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
        </Section>
        <Section
          heading="Production Order filtered By Urgencies"
          className="my-5 flex flex-row space-x-3"
        >
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
        </Section>
        <Section
          heading="Upcoming Orders"
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
