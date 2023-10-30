import { Cell, Grid } from "./Shared";

const ProductionOrder = () => (
  <div className="round min-w-[920px] bg-white p-4 shadow">
    <div className="border-1 bg-whit2 grid grid-cols-12 gap-2">
      {/* ROW 1 */}
      <>
        <Cell className="col-span-2 rounded-sm bg-red-500 text-center font-bold text-white">
          WEAVING
        </Cell>
        <Cell className="col-span-3">PRO_ID</Cell>
        <Cell className="col-span-7">
          <p className="w-full">
            <span className="mr-2 inline font-bold">Note</span>
            NOTENOTENOTENOTENOTENOTENOTENOTE
          </p>
        </Cell>
      </>
      {/* ROW 2 */}
      <>
        <div className="col-span-5">
          <Grid
            cols={3}
            label="ORDER"
            value="ORDER_ID / CUSOTMER"
            className="bg-yellow-100"
          />

          <Grid cols={3} label="SKU/SPEC" value="SKU_ID" />

          <Grid cols={3} label="DESC" value="DESCRIPTION" />
        </div>

        <div className="col-span-5">
          <Grid cols={2} label="PRO PRINTED" value="DATE" />
          <Grid cols={2} label="PRO WEAVE BY" value="DATE" />
          <Grid cols={2} label="URGENCY" value="URGENCY" />
        </div>
        <Cell className="col-span-2 grid h-full grid-cols-1 text-xl">
          <span className="font-bold">LOOM ID</span> <span>LOOM ID</span>
          <div></div>
        </Cell>
      </>
      {/* ROW 3 */}
      <>
        <div className="col-span-5">
          <Grid cols={3} label="TF #" value="TF #" className="text-xl" />
          <Grid cols={3} label="QUANTITY" value="QUANTITY" />
          <Grid cols={3} label="TOTAL LENGTH" value="TOTAL LENGTH" />
          <Grid cols={3} label="DIVISORS" value="DIVISORS" />
          <Grid cols={3} label="PPCM" value="PPCM" />
          <Grid cols={3} label="# of Repeats" value="Repeats" />
        </div>
        <div className="col-span-7">
          <div className="p-2">
            <p className="mb-2 font-bold">Yarn Batch</p>
            {/* Table */}
            <div className="grid grid-cols-7 gap-y-3 rounded border-2 border-gray-200 p-2">
              <>
                <div className="font-bold">WARP</div>
                <div>-</div>
                <div>YARN_ID</div>
                <div>YARN SKU</div>
                <div>MATERIAL</div>
                <div className="col-span-2">COLOUR</div>
              </>
              <>
                <div className="col-span-1 row-span-4 font-bold">WERF</div>
                <>
                  <div>1</div>
                  <div>YARN_ID</div>
                  <div>YARN SKU</div>
                  <div>MATERIAL</div>
                  <div className="col-span-2">COLOUR</div>
                </>
                <>
                  {" "}
                  <div>2</div>
                  <div>YARN_ID</div>
                  <div>YARN SKU</div>
                  <div>MATERIAL</div>
                  <div className="col-span-2">COLOUR</div>
                </>

                <>
                  {" "}
                  <div>3</div>
                  <div>YARN_ID</div>
                  <div>YARN SKU</div>
                  <div>MATERIAL</div>
                  <div className="col-span-2">COLOUR</div>
                </>

                <>
                  {" "}
                  <div>4</div>
                  <div>YARN_ID</div>
                  <div>YARN SKU</div>
                  <div>MATERIAL</div>
                  <div className="col-span-2">COLOUR</div>
                </>
              </>
            </div>
          </div>
        </div>
      </>
      <>
        <Cell className="col-span-4 grid grid-cols-1" border>
          <div className="font-bold">Started by</div>
          <div>DATE</div>
        </Cell>
        <Cell className="col-span-4 grid grid-cols-1" border>
          <div className="font-bold">Quality checked (examined) by</div>
          <div>DATE</div>
        </Cell>
        <Cell className="col-span-4 grid grid-cols-1" border>
          <div className="font-bold">Nonconformance</div>
          <div>NC#</div>
        </Cell>
      </>
    </div>
  </div>
);

export default ProductionOrder;
