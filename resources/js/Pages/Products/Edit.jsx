import Header from "@/Layouts/Header";
import { Head, useForm } from "@inertiajs/react";
import { TextInput, PrimaryButton, Button } from "@/Components/Inputs";
import { useEffect } from "react";
import SelectInput from "@/Components/SelectInput";

const Edit = ({ auth, product, yarns }) => {
  const init = {
    ...product,
    user_id: product.user_id ?? auth.user.id,
  };

  const { data, setData, put, processing, errors } = useForm(init);

  function submit(e) {
    e.preventDefault();
    put(`/products/${data.id}`);
  }

  function onChange(e) {
    setData(e.target.name, e.target.value);
  }

  return (
    <>
      <Head title="Update Product" />
      <Header>
        <div className="flex justify-between align-center">
          <h2 className="font-semibold text-3xl text-gray-800 leading-tight mx-auto">
            Update Product
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
              {/* SKU */}
              <TextInput
                id="sku"
                label="SKU"
                value={data.sku}
                error={errors.sku}
                onChange={onChange}
                required
              />
              {/* NAME */}
              <TextInput
                id="name"
                label="Name"
                value={data.name}
                error={errors.name}
                onChange={onChange}
                required
              />
              {/* DESCRIPTION */}
              <TextInput
                id="description"
                label="Descripiton"
                value={data.description}
                error={errors.description}
                onChange={onChange}
                required
              />
              {/* Yarn1_id */}
              <SelectInput
                label="Yarn 1"
                selected={data.yarn1_id}
                error={errors.yarn1_id}
                options={yarns}
                onChange={(e) => {
                  setData("yarn1_id", e);
                }}
              />
              {/* Yarn2_id */}
              <SelectInput
                label="Yarn 2"
                selected={data.yarn2_id}
                error={errors.yarn2_id}
                options={yarns}
                onChange={(e) => {
                  setData("yarn2_id", e);
                }}
              />
              {/* Yarn3_id */}
              <SelectInput
                label="Yarn 3"
                selected={data.yarn3_id}
                error={errors.yarn3_id}
                options={yarns}
                onChange={(e) => {
                  setData("yarn3_id", e);
                }}
              />
              {/* Yarn4_id */}
              <SelectInput
                label="Yarn 4"
                selected={data.yarn4_id}
                error={errors.yarn4_id}
                options={yarns}
                onChange={(e) => {
                  setData("yarn4_id", e);
                }}
              />
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
