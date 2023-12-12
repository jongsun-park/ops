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

const NotCompletedProduction = () => {
  const [loading, setLoading] = useState(true);
  const filteres = ["all", "cut", "laundry", "loom", "stitch", "woven"];
  const [filter, setFilter] = useState(filteres[0]);
  const [filteredProductions, setFilteredProductions] = useState([]);

  const onClick = (e) => {
    setFilter(e.target.name);
  };

  useEffect(() => {
    const getProductions = async () => {
      const res = filter
        ? await fetch(`/api/productions?filter=${filter}`)
        : await fetch("/api/productions");
      const { productions } = await res.json();
      setFilteredProductions(productions);
    };

    setLoading(true);
    getProductions();
    setLoading(false);
  }, [filter]);

  return (
    <section>
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold text-blue-500">
          Tasks must be completed
        </h2>
        {/* TODO - Needs more clear label */}
        <div className="filteres align-center flex flex-row space-x-2">
          {filteres.map((f) => (
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
          <div>loading</div>
        ) : (
          <div className="flex flex-row flex-wrap gap-2">
            {filteredProductions.map((production) => (
              <Link
                href={`/productions/${production.id}`}
                key={production.id}
                className="rounded border-2 border-gray-200 p-5 hover:cursor-pointer hover:bg-blue-200"
              >
                <div>Produciton ID: {production.id}</div>
                <div>Weave By: {production.date_weave_by}</div>
                {/* <div>
                  <div>
                    Loom Status:{" "}
                    {production.loom_status ? "Completed" : "Not Completed"}
                  </div>
                  <div>
                    Woven Status:{" "}
                    {production.woven_status ? "Completed" : "Not Completed"}
                  </div>
                  <div>
                    Cut Status:{" "}
                    {production.cut_status ? "Completed" : "Not Completed"}
                  </div>
                  <div>
                    Stitch Status:{" "}
                    {production.stitch_status ? "Completed" : "Not Completed"}
                  </div>
                  <div>
                    Laudry Status:{" "}
                    {production.laundry_status ? "Completed" : "Not Completed"}
                  </div>
                </div> */}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NotCompletedProduction;
