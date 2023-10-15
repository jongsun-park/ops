import { Button, PrimaryButton } from "./Inputs";

const FormContainer = ({
  id = "",
  onSubmit,
  processing,
  buttonText,
  children,
}) => (
  <form onSubmit={onSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div className="space-y-12">
      <div className="pb-12 space-y-4">{children}</div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-2">
      <Button type="reset">Reset</Button>
      {/* Submit Button */}
      <PrimaryButton type="submit" disabled={processing}>
        {buttonText}
      </PrimaryButton>
    </div>
  </form>
);

export default FormContainer;
