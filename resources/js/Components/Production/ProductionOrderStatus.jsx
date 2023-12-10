import { useForm } from "@inertiajs/react";

import { PrimaryButton } from "../Inputs";
import Pannel from "../UI/Pannel";
import Toggle from "../UI/Toggle";

const Status = ({ type, setData, data, can = false, user = "" }) => {
  const status = data[`${type}_status`];
  const updated_at = data[`${type}_updated_at`];
  const updated_by = data[`${type}_updated_by`];

  const onChangeStatus = () => {
    if (status == false) {
      setData({
        ...data,
        [`${type}_status`]: !status,
        [`${type}_updated_at`]: new Date(Date.now()).toISOString().slice(0, -1),
        //   .split("T")[0],
        [`${type}_updated_by`]: user,
      });
    } else {
      setData({
        ...data,
        [`${type}_status`]: !status,
        [`${type}_updated_at`]: "",
        [`${type}_updated_by`]: "",
      });
    }
  };

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-row space-x-10">
      <Toggle
        enabled={status}
        setEnabled={onChangeStatus}
        label={type}
        value={status}
      />

      <input
        type="hidden"
        name={type}
        id={type}
        checked={status}
        onChange={onChangeStatus}
        value={status}
      />

      {/* If User is Admin show Value otherwise it's hidden */}
      <input
        type={can ? "text" : "hidden"}
        placeholder={`${type}_updated_by`}
        name={`${type}_updated_by`}
        value={updated_by ?? ""}
        className="min-w-[25ch] border-0 bg-transparent p-0"
        onChange={onChange}
      />
      {/* If whne it's status has changed, update this value */}
      <input
        type={can ? "datetime-local" : "hidden"}
        placeholder={`${type}_updated_at`}
        name={`${type}_updated_at`}
        value={updated_at ?? ""}
        className="min-w-[25ch] border-0 bg-transparent p-0"
        onChange={onChange}
      />
    </div>
  );
};

const ProductionOrderStatus = ({
  user = "",
  can = false,
  id: status_id,
  status,
}) => {
  const { data, setData, patch, processing, errors } = useForm({
    cut_status: status.cut_status,
    cut_updated_at: status.cut_updated_at,
    cut_updated_by: status.cut_updated_by,
    laundry_status: status.laundry_status,
    laundry_updated_at: status.laundry_updated_at,
    laundry_updated_by: status.laundry_updated_by,
    loom_status: status.loom_status,
    loom_updated_at: status.loom_updated_at,
    loom_updated_by: status.loom_updated_by,
    stitch_status: status.stitch_status,
    stitch_updated_at: status.stitch_updated_at,
    stitch_updated_by: status.stitch_updated_by,
    woven_status: status.woven_status,
    woven_updated_at: status.woven_updated_at,
    woven_updated_by: status.woven_updated_by,
  });

  const updateStatus = () => {
    patch(`/production_order_status/${status_id}`, {
      preserveScroll: true,
    });
  };

  const statuses = ["cut", "laundry", "loom", "stitch", "woven"];

  const isComplete =
    data.cut_status &&
    data.laundry_status &&
    data.loom_status &&
    data.stitch_status &&
    data.woven_status;

  const button = (
    <PrimaryButton
      onClick={updateStatus}
      disabled={processing}
      className={
        isComplete ? "border-green-700 bg-green-700 hover:border-blue-700" : ""
      }
    >
      {isComplete ? "Complete Production Order" : "Update Status"}
    </PrimaryButton>
  );

  return (
    <Pannel title="Edit Status" button={button}>
      {statuses.map((status) => (
        <Status
          setData={setData}
          data={data}
          type={status}
          key={status}
          can={can}
          user={user}
        />
      ))}
    </Pannel>
  );
};
export default ProductionOrderStatus;
