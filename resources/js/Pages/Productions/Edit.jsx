import Header from "@/Layouts/Header";
import { Head, useForm } from "@inertiajs/react";
import { TextInput, PrimaryButton, Button } from "@/Components/Inputs";
import SelectInput from "@/Components/SelectInput";

const Edit = ({ auth, production, products }) => {
  const init = {
    ...production,
    user_id: production.user_id ?? auth.user.id,
  };

  const { data, setData, put, processing, errors } = useForm(init);

  function submit(e) {
    e.preventDefault();
    put(`/productions/${data.id}`);
  }

  function onChange(e) {
    setData(e.target.name, e.target.value);
  }

  const textInputs = [
    "order_id",
    "customer_name",
    "weave_by",
    "quantity",
    "total_length",
    "note",
    "urgency",
    "wash_option",
    "packing",
    "status",
  ];

  return (
    <>
      <Head title="Create Product" />
      <Header>
        <div className="flex justify-between align-center">
          <h2 className="font-semibold text-3xl text-gray-800 leading-tight mx-auto">
            Update Production Order
          </h2>
        </div>
      </Header>
      <main>
        <form
          onSubmit={submit}
          className="max-w-md mx-auto bg-white p-8 rounded shadow"
        >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12 space-y-4">
              {/* PRODUCT SELECT */}
              <SelectInput
                label="Product"
                selected={data.product_id}
                error={errors.product_id}
                options={products}
                onChange={(e) => {
                  setData("product_id", e);
                }}
              />

              {/* TextInputs */}
              {textInputs.map((input) => (
                <TextInput
                  key={input}
                  id={input}
                  label={input}
                  value={data[input] ?? ""}
                  error={errors[input]}
                  onChange={(e) => setData(input, e.target.value)}
                  // required
                />
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button type="reset">Reset</Button>
            {/* Submit Button */}
            <PrimaryButton type="submit" disabled={processing}>
              Update
            </PrimaryButton>
          </div>
        </form>
      </main>
    </>
  );
};

export default Edit;
