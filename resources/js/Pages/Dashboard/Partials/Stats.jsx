import { useEffect, useState } from "react";
import Loading from "./Loading";
import BarChart from "./charts/BarChart";
import HalfDoughnutChart from "./charts/HalfDoughnutChart";

export const Section = ({ heading = "", children, className = "" }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-500">{heading}</h2>
      <div className={className}>{children}</div>
    </section>
  );
};

const Stats = () => {
  const [loading, setLoading] = useState(true);
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      const res = await fetch(`/api/stats`);
      const { productions } = await res.json();
      setProductions(productions);
    };

    setLoading(true);
    getStats();
    setLoading(false);
  }, []);

  const productionsComplteRatio = [
    { value: productions.total - productions.incomplete, name: "Complete" },
    { value: productions.incomplete ?? 0, name: "Incomplete" },
  ];

  const productionIncomplteTasks = {
    Cut: productions.cut_incomplete,
    Laundry: productions.laundry_incomplete,
    Loom: productions.loom_incomplete,
    Stitch: productions.stitch_incomplete,
    Woven: productions.woven_incomplete,
  };

  return (
    <section className="p-5 sm:p-0">
      <div className="my-5">
        <div className="">
          <div className="">
            {loading ? (
              <Loading />
            ) : (
              <div className="gird-col-1 grid gap-3 md:grid-cols-2">
                <HalfDoughnutChart
                  title="Producitons - Completed & Incomplted"
                  data={productionsComplteRatio}
                />
                <BarChart
                  title="Production - Incomplete Tasks"
                  data={productionIncomplteTasks}
                />
              </div>
            )}
          </div>
          {/* <div>
            <h1>Product Stats</h1>
            <li>Total Products</li>
            <li># of Product linked to Production Order</li>
          </div>
          <div>
            <h1>Yarn Stats</h1>
            <li>Total Yarns</li>
          </div>
          <div>
            <h1>Looms Stats</h1>
            <li>Number Looms</li>
            <li>Looms used in larns</li>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Stats;
