import { useForm } from "@inertiajs/react";
import { useState } from "react";

import Toggle from "../UI/Toggle";

const ProductionOrderStatus = ({
  status_id,
  type = "",
  title = "",
  user = {},
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [updatedBy, setUpdatedBy] = useState();
  const [updatedAt, setUpdatedAt] = useState(null);

  const { data, setData, patch, processing, errors } = useForm({
    status: "",
    updatedAt: "",
    updatedBy: "",
  });

  const updateStatus = () => {
    patch(`/production_order_status/${status_id}`, data);
  };

  const isAdmin = user.role === "admin";

  const onChange = (e) => {
    setIsChecked((prev) => !prev);

    if (!isChecked === true) {
      const today = new Date(Date.now()).toISOString();
      setUpdatedAt(today);
      setUpdatedBy(user.name);
    } else {
      setUpdatedAt(null);
      setUpdatedBy(null);
    }
  };

  return (
    <div className="flex flex-row space-x-10">
      <Toggle enabled={isChecked} setEnabled={onChange} label={title} />

      <input
        type="hidden"
        name={`status_${type}`}
        id={`status_${type}`}
        checked={isChecked}
        onChange={onChange}
      />

      {/* If User is Admin show Value otherwise it's hidden */}
      <input
        type={isAdmin ? "text" : "hidden"}
        placeholder={`status_${type}_updated_by`}
        name="user_id"
        defaultValue={updatedBy}
        className="min-w-[25ch] border-0 bg-transparent p-0"
      />
      {/* If whne it's status has changed, update this value */}
      <input
        type={isAdmin ? "text" : "hidden"}
        placeholder={`status_${type}_updated_at`}
        name="updated_at"
        defaultValue={updatedAt}
        className="min-w-[25ch] border-0 bg-transparent p-0"
        readOnly
      />
    </div>
  );
};
export default ProductionOrderStatus;
