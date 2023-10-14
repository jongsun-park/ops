import Header from "@/Layouts/Header";
import { Head, useForm } from "@inertiajs/react";
import { TextInput, PrimaryButton, Button } from "@/Components/Inputs";
import SelectInput from "@/Components/SelectInput";
import FormContainer from "@/Components/FormContainer";

const Edit = ({ auth, yarn, colors, grades, suppliers, materials }) => {
  const { data, setData, post, put, processing, errors } = useForm({
    user_id: auth.user.id,
    sku: yarn?.sku ?? "",
    name: yarn?.name ?? "",
    color_id: yarn?.color_id ?? "",
    grade_id: yarn?.grade_id ?? "",
    material_id: yarn?.material_id ?? "",
    supplier_id: yarn?.supplier_id ?? "",
  });

  function submit(e) {
    e.preventDefault();
    yarn?.id ? put(`/yarns/${yarn.id}`) : post("/yarns");
  }

  const title = yarn ? "Update Yarn" : "Create Yarn";
  const buttonText = yarn ? "Update" : "Create";

  return (
    <>
      <Head title={title} />

      <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <Header>
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>
        </Header>
        <FormContainer
          onSubmit={submit}
          processing={processing}
          buttonText={buttonText}
        >
          {/* SKU */}
          <TextInput
            id="sku"
            label="SKU"
            value={data.sku}
            error={errors.sku}
            onChange={(e) => setData("sku", e.target.value)}
            required
          />
          {/* NAME */}
          <TextInput
            id="name"
            label="Name"
            value={data.name}
            error={errors.name}
            onChange={(e) => setData("name", e.target.value)}
            required
          />
          {/* Color */}
          <SelectInput
            label="Colour"
            selected={data.color_id}
            error={errors.color_id}
            options={colors}
            onChange={(e) => {
              setData("color_id", e);
            }}
          />

          {/* Grade */}
          <SelectInput
            label="Grade"
            selected={data.grade_id}
            error={errors.grade_id}
            options={grades}
            onChange={(e) => {
              setData("grade_id", e);
            }}
          />

          {/* Matertial */}
          <SelectInput
            label="Fibre"
            selected={data.material_id}
            error={errors.material_id}
            options={materials}
            onChange={(e) => {
              setData("material_id", e);
            }}
          />

          {/* Supplier */}
          <SelectInput
            label="Supplier"
            selected={data.supplier_id}
            error={errors.supplier_id}
            options={suppliers}
            onChange={(e) => {
              setData("supplier_id", e);
            }}
          />
        </FormContainer>
      </main>
    </>
  );
};

export default Edit;
