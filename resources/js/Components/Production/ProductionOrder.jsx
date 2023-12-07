import { Cell, Grid } from "./Shared";

const Yarn = ({ idx = "-", yarn }) => {
  const colour = yarn.colour;
  return (
    <>
      <div>{idx}</div>
      {/* <div>{yarn.id}</div> */}
      <div>{yarn.sku}</div>
      <div>{yarn.material}</div>
      <div style={{ color: colour }} className="font-bold">
        {yarn.colour}{" "}
      </div>
    </>
  );
};

const ProductionOrder = ({ production }) => {
  console.log(production);

  console.log(Object.keys(production));

  const {
    id,
    note,
    order_id_customer_name,
    product,
    yarns,
    quantity,
    total_length,
    urgency,
    loom,
    date,
    wash_options,
    status,
    nc_number,
  } = production;

  return (
    <div className="min-w-[920px] rounded-md bg-white p-4 text-sm shadow">
      <div className="border-1 bg-whit2 grid grid-cols-12 gap-2">
        {/* ROW 1 */}
        <>
          <Cell className="col-span-2 rounded-sm bg-red-500 text-center font-bold text-white">
            WEAVING
          </Cell>
          {/* Product ID */}
          <Cell className="col-span-3">{product?.name}</Cell>
          {/* Production Note */}
          <Cell className="col-span-7">
            <p className="w-full">
              <span className="mr-2 inline font-bold">Note</span>
              {note}
            </p>
          </Cell>
        </>
        {/* ROW 2 */}
        <>
          <div className="col-span-5">
            <Grid
              label="ORDER"
              value={order_id_customer_name}
              className="bg-yellow-100"
            />

            <Grid label="SKU/SPEC" value={product.sku} />

            <Grid label="DESC" value={product.description} />
          </div>

          <div className="col-span-5">
            <Grid label="PRO PRINTED" value={date.printed} />
            <Grid label="PRO WEAVE BY" value={date.weave_by} />
            <Grid label="URGENCY" value={urgency} />
          </div>
          <Cell className="col-span-2 grid h-full grid-cols-1 text-xl">
            <span className="font-bold">LOOM</span>
            <span>{loom}</span>
            <div></div>
          </Cell>
        </>
        {/* ROW 3 */}
        <>
          <div className="col-span-5">
            <Grid label="TF #" value={product.tf} className="text-xl" />
            <Grid label="QUANTITY" value={quantity} />
            <Grid label="TOTAL LENGTH" value={total_length} />
            <Grid label="DIVISORS" value={product.divisors} />
            {/* todo ppcm */}
            <Grid label="PPCM" value={product.ppcm} />
            <Grid label="# of Repeats" value={product.pprepeat} />
          </div>
          <div className="col-span-7">
            <div className="p-2">
              <p className="mb-2 font-bold">Yarn Batch</p>
              {/* Table */}
              <div className="grid grid-cols-5 gap-y-3 rounded border-2 border-gray-200 p-2">
                <>
                  <div className="font-bold">WARP</div>
                  <Yarn yarn={yarns.warp} />
                </>
                <>
                  <div className="col-span-1 row-span-4 font-bold">WERF</div>
                  <Yarn idx="1" yarn={yarns.werf1} />
                  <Yarn idx="2" yarn={yarns.werf2} />
                  <Yarn idx="3" yarn={yarns.werf3} />
                  <Yarn idx="4" yarn={yarns.werf4} />
                </>
              </div>
            </div>
          </div>
        </>
        <>
          <Cell className="col-span-4 grid grid-cols-1" border>
            <div className="font-bold">Started by</div>
            <div>{date.started_by}</div>
          </Cell>
          <Cell className="col-span-4 grid grid-cols-1" border>
            <div className="font-bold">Quality checked (examined) by</div>
            <div>{date.examined_by}</div>
          </Cell>
          <Cell className="col-span-4 grid grid-cols-1" border>
            <div className="font-bold">Nonconformance</div>
            <div>{nc_number}</div>
          </Cell>
        </>
      </div>
    </div>
  );
};

export default ProductionOrder;
