import { XCircleIcon } from "@heroicons/react/24/outline";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

const FlashMessage = ({ role = "alert", color = "gray", children }) => {
  const [visible, setVisible] = useState(true);

  const closeHandler = () => setVisible(false);

  setTimeout(() => {
    closeHandler();
  }, 3000);

  if (!visible) return "";

  return (
    <div
      className={`bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 rounded fixed bottom-10 right-10 space-x-2 flex flex-row cursor-pointer shadow`}
      role={role}
      onClick={closeHandler}
    >
      {children}
      <button onClick={closeHandler}>
        <XCircleIcon className="x-6 w-6" />
      </button>
    </div>
  );
};

const Flash = () => {
  const { message, error, success } = usePage().props.flash;

  return (
    <>
      {message && (
        <FlashMessage color="blue">
          <strong className="font-bold">Info</strong>
          <span className="block sm:inline">{message}</span>
        </FlashMessage>
      )}
      {error && (
        <FlashMessage color="red">
          <strong className="font-bold">Holy smokes!</strong>
          <span className="block sm:inline">{error}</span>
        </FlashMessage>
      )}
      {success && (
        <FlashMessage color="slate">
          <strong className="font-bold">Yay!</strong>
          <span className="block sm:inline">{success}</span>
        </FlashMessage>
      )}
    </>
  );
};

export default Flash;
