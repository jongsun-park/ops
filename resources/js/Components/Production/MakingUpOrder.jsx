import { Cell, Col, Grid } from "./Shared";

const MakingUpOrder = ({ production }) => {
  return (
    <div className="min-w-[920px] rounded-md bg-white p-4 text-sm shadow">
      <div className="border-1 bg-whit2 grid grid-cols-12 gap-2">
        {/* ROW 1 */}
        <>
          <Cell className="col-span-2 rounded-sm bg-green-500 text-center font-bold text-white">
            MAKING UP
          </Cell>
          <Cell className="col-span-3">{production.id}</Cell>
          <Cell className="col-span-7">
            <p className="w-full">
              <span className="mr-2 inline font-bold">Note</span>
              {production.note}
            </p>
          </Cell>
        </>
        {/* ROW 2 */}
        <>
          <div className="col-span-5">
            <Grid
              label="ORDER"
              value={production.order_id_customer_name}
              className="bg-yellow-100"
            />

            <Grid label="SKU/SPEC" value={production.product.sku} />

            <Grid label="DESC" value={production.product.description} />
            <Grid label="QUANTITY" value={production.quantity} />
          </div>

          <div className="col-span-5">
            <Grid
              cols={2}
              label="PRO PRINTED"
              value={production.date.printed}
            />
            <Grid cols={2} label="SHIP BY" value={production.date.shipped} />
            {/* TODO */}
            <Grid cols={2} label="URGENCY" value={production.urgency} />
          </div>

          <Cell className="col-span-2 grid grid-cols-1 text-2xl">
            <div className="font-bold">TF #</div>
            <div>{production.product.tf}</div>
            <div></div>
          </Cell>
        </>
        {/* ROW 3 */}
        <Cell
          className="col-span-12 my-4 grid grid-cols-7 gap-x-4 gap-y-4 p-4"
          border
        >
          <div className="col-span-7 font-bold">LAUNDARY OPTION</div>
          <Col
            label="Machine Name"
            value={production.wash_option.machine_name}
          />
          <Col
            label="Machine Program"
            value={production.wash_option.machine_program}
          />
          <Col label="Dryer Name" value={production.wash_option.dryer_name} />
          <Col
            label="Dryer Program"
            value={production.wash_option.dryer_program}
          />

          <Col
            label="Detergent Type"
            value={production.wash_option.detergent_type}
          />
          <Col
            label="Detergent Amount"
            value={production.wash_option.detergent_amount}
          />
          <Col label="OBA" value={production.wash_option.oba} />
          <Col label="Softener" value={production.wash_option.softener} />
          <Col label="Washed Date" value={production.date.washed} />
          <Col
            label="Other"
            className="col-span-2"
            value={production.wash_option.other}
          />
        </Cell>
        <>
          <Cell className="col-span-6 col-start-7 grid grid-cols-1" border>
            <div className="font-bold">Nonconformance</div>
            <div>{production.nc_number}</div>
          </Cell>
        </>
      </div>
    </div>
  );
};

export default MakingUpOrder;
