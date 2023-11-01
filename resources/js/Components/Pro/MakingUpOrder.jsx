import { Cell, Col, Grid } from "./Shared";

const MakingUpOrder = () => (
  <div className="min-w-[920px] rounded-md bg-white p-4 text-sm shadow">
    <div className="border-1 bg-whit2 grid grid-cols-12 gap-2">
      {/* ROW 1 */}
      <>
        <Cell className="col-span-2 rounded-sm bg-green-500 text-center font-bold text-white">
          MAKING UP
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
            label="ORDER"
            value="ORDER_ID / CUSOTMER"
            className="bg-yellow-100"
          />

          <Grid label="SKU/SPEC" value="SKU_ID" />

          <Grid label="DESC" value="DESCRIPTION" />
          <Grid label="QUANTITY" value="15" />
        </div>

        <div className="col-span-5">
          <Grid cols={2} label="PRO PRINTED" value="DATE" />
          <Grid cols={2} label="SHIP BY" value="DATE" />
          <Grid cols={2} label="URGENCY" value="URGENCY" />
        </div>

        <Cell className="col-span-2 grid grid-cols-1 text-2xl">
          <div className="font-bold">TF #</div>
          <div>TF #</div>
          <div></div>
        </Cell>
      </>
      {/* ROW 3 */}
      <Cell
        className="col-span-12 my-4 grid grid-cols-7 gap-x-4 gap-y-4 p-4"
        border
      >
        <div className="col-span-7 font-bold">LAUNDARY OPTION</div>
        <Col label="Temp" value="40C #15kg Old=PS New=PS" />
        <Col label="Detergent" value="+300ml normal" />
        <Col label="Softener" value="+120ml" />
        <Col label="OBAs" value="-" />
        <Col label="Starch" value="-" />
        <Col label="Tumble" value="30 Damask Program 19" />
        <Col label="Washed By" value="Jongsun Park" />
      </Cell>
      <>
        <Cell className="col-span-6 col-start-7 grid grid-cols-1" border>
          <div className="font-bold">Nonconformance</div>
          <div>NC#</div>
        </Cell>
      </>
    </div>
  </div>
);

export default MakingUpOrder;
