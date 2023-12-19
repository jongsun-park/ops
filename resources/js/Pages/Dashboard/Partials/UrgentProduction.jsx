import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export const Section = ({ heading = "", children, className = "" }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-500">{heading}</h2>
      <div className={className}>{children}</div>
    </section>
  );
};

const UrgentProduction = () => {
  const [loading, setLoading] = useState(true);

  const ugencies = ["all", "1D", "1W", "2W", "1M", "1Q"];

  const [filter, setFilter] = useState(ugencies[0]);
  const [fetchedProductions, setFetchedProductions] = useState([]);

  const onClick = (e) => {
    setFilter(e.target.name);
  };

  useEffect(() => {
    const getProductions = async () => {
      const res = await fetch(`/api/productions/urgency`);
      const { productions } = await res.json();
      setFetchedProductions(productions);
    };

    setLoading(true);
    getProductions();
    setLoading(false);
  }, [filter]);

  // Move to diffent file
  const getUrgency = (date_weave_by) => {
    const today = new Date();
    const weave_by = new Date(date_weave_by);

    let Difference_In_Time = weave_by.getTime() - today.getTime();

    let Difference_In_Days = Math.round(
      Difference_In_Time / (1000 * 3600 * 24),
    );

    let rest_working_days = Math.round((Difference_In_Days / 7) * 4);

    // let weave_time = Math.round(total_picks / machine_loom_speed * efficiency);
    // total_picks
    // machine_loom_speed - looms.speed
    // efficiency

    // return Difference_In_Days;

    if (rest_working_days < 2) return "1D";
    if (rest_working_days < 8) return "1W";
    if (rest_working_days < 15) return "2W";
    if (rest_working_days < 29) return "1M";
    return "1Q";
  };

  const modifiedUrgency = fetchedProductions.map((production) => ({
    ...production,
    urgency: getUrgency(production.date_weave_by),
  }));

  return (
    <section className="min-h-[285px] p-5 sm:p-0">
      <div className="flex flex-col justify-between lg:flex-row">
        <h2 className="mb-3 text-2xl font-bold text-blue-500 lg:mb-0">
          Filtered production orders based on urgencies
        </h2>
        {/* TODO - Needs more clear label */}
        <div className="filteres align-center flex flex-row space-x-2">
          {ugencies.map((f) => (
            <button
              key={f}
              name={f}
              className={`rounded border-2 border-blue-200 px-4 py-2  text-xs uppercase text-blue-400 ${
                f == filter
                  ? "active border-blue-400 bg-blue-400 text-white"
                  : ""
              }`}
              onClick={onClick}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="my-5">
        {loading ? (
          <div>loading...</div>
        ) : (
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
            {modifiedUrgency.map((production) => {
              if (filter == "all" || filter == production.urgency) {
                return (
                  <Link
                    href={`/productions/${production.id}`}
                    key={production.id}
                    className="rounded border-2 border-gray-200 p-5 hover:cursor-pointer hover:bg-blue-200"
                  >
                    <div>Produciton ID: {production.id}</div>
                    <div>Weave By: {production.date_weave_by}</div>
                    <div>Urgency: {production.urgency}</div>
                  </Link>
                );
              }
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default UrgentProduction;
