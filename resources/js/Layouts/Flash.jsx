import { usePage } from "@inertiajs/react";
import { useState } from "react";

const InfoContainer = ({ children }) => (
  <div className="fixed bottom-10 right-10 flex cursor-pointer flex-row space-x-2 rounded border border-blue-400 bg-blue-300 px-4 py-3 text-blue-700 shadow">
    {children}
  </div>
);
const ErrorContainer = ({ children }) => (
  <div className="fixed bottom-10 right-10 flex cursor-pointer flex-row space-x-2 rounded border border-red-400 bg-red-300 px-4 py-3 text-red-700 shadow">
    {children}
  </div>
);
const SuccessContainer = ({ children }) => (
  <div className="fixed bottom-10 right-10 flex cursor-pointer flex-row space-x-2 rounded border border-green-400 bg-green-200 px-4 py-3 font-bold text-green-600 shadow">
    {children}
  </div>
);

const FlashMessage = ({ role = "alert", color, children }) => {
  const [visible, setVisible] = useState(true);

  const closeHandler = () => setVisible(false);

  setTimeout(() => {
    closeHandler();
  }, 3000);

  if (!visible) return "";

  return (
    <div role={role} onClick={closeHandler}>
      {children}
    </div>
  );
};

const Flash = () => {
  const { message, error, success } = usePage().props.flash;

  return (
    <>
      {message && (
        <FlashMessage>
          <InfoContainer>
            <strong className="font-bold">Info</strong>
            <span className="block sm:inline">{message}</span>
          </InfoContainer>
        </FlashMessage>
      )}
      {error && (
        <FlashMessage>
          <ErrorContainer>
            <strong className="font-bold">Holy smokes!</strong>
            <span className="block sm:inline">{error}</span>
          </ErrorContainer>
        </FlashMessage>
      )}
      {success && (
        <FlashMessage>
          <SuccessContainer>
            <strong className="font-bold">Yay!</strong>
            <span className="block sm:inline">{success}</span>
          </SuccessContainer>
        </FlashMessage>
      )}
    </>
  );
};

export default Flash;
