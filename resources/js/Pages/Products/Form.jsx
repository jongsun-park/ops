import Header from "@/Layouts/Header";
import { Head, useForm } from "@inertiajs/react";
import { TextInput, PrimaryButton, Button } from "@/Components/Inputs";
import SelectInput from "@/Components/SelectInput";
import FormContainer from "@/Components/FormContainer";

const Form = ({
  auth,
  product,
  yarns,
  units,
  looms,
  labels,
  hem_types,
  hem_sizes,
  corners,
}) => {
  const init = {
    user_id: product?.user_id ?? auth.user.id,

    name: product?.name ?? "",
    sku: product?.sku ?? "",
    description: product?.description ?? "",

    tf_number: product?.tf_number ?? "",
    divs: product?.divs ?? "",
    ppcm: product?.ppcm ?? "",
    pprepeat: product?.pprepeat ?? "",
    cut_width: product?.cut_width ?? "",
    cut_length: product?.cut_length ?? "",
    finish_width: product?.finish_width ?? "",
    finish_length: product?.finish_length ?? "",

    yarn1_id: product?.yarn1_id ?? "",
    yarn2_id: product?.yarn2_id ?? "",
    yarn3_id: product?.yarn3_id ?? "",
    yarn4_id: product?.yarn4_id ?? "",

    unit_id: product?.unit_id ?? "",
    loom_id: product?.loom_id ?? "",
    label_id: product?.label_id ?? "",
    hem_type_id: product?.hem_type_id ?? "",
    hem_size_id: product?.hem_size_id ?? "",
    corner_id: product?.corner_id ?? "",
  };

  const { data, setData, put, post, processing, errors } = useForm(init);

  function submit(e) {
    e.preventDefault();
    product?.id ? put(`/products/${product.id}`) : post("/products");
  }

  function onChange(e) {
    setData(e.target.name, e.target.value);
  }

  const title = product ? "Update Yarn" : "Create Yarn";
  const buttonText = product ? "Update" : "Create";

  return (
    <>
      <Head title={title} />

      <main>
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

          {/* tf_number */}
          <TextInput
            id="tf_number"
            label="TF Number"
            value={data.tf_number}
            error={errors.tf_number}
            onChange={onChange}
            required
          />

          {/* divs */}
          <TextInput
            id="divs"
            label="Divisors"
            value={data.divs}
            error={errors.divs}
            onChange={onChange}
            required
          />

          {/* ppcm */}
          <TextInput
            id="ppcm"
            label="PPCM"
            value={data.ppcm}
            error={errors.ppcm}
            onChange={onChange}
            required
          />

          {/* pprepeat */}
          <TextInput
            id="pprepeat"
            label="pprepeat"
            value={data.pprepeat}
            error={errors.pprepeat}
            onChange={onChange}
            required
          />

          {/* cut_width */}
          <TextInput
            id="cut_width"
            label="cut_width"
            value={data.cut_width}
            error={errors.cut_width}
            onChange={onChange}
            required
          />

          {/* cut_length */}
          <TextInput
            id="cut_length"
            label="cut_length"
            value={data.cut_length}
            error={errors.cut_length}
            onChange={onChange}
            required
          />
          {/* finish_width */}
          <TextInput
            id="finish_width"
            label="finish_width"
            value={data.finish_width}
            error={errors.finish_width}
            onChange={onChange}
            required
          />
          {/* finish_length */}
          <TextInput
            id="finish_length"
            label="finish_length"
            value={data.finish_length}
            error={errors.finish_length}
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

          {/* unit_id */}
          <SelectInput
            label="Unit"
            selected={data.unit_id}
            error={errors.unit_id}
            options={units}
            onChange={(e) => {
              setData("unit_id", e);
            }}
          />

          {/* loom_id */}
          <SelectInput
            label="Loom"
            selected={data.loom_id}
            error={errors.loom_id}
            options={looms}
            onChange={(e) => {
              setData("loom_id", e);
            }}
          />

          {/* label_id */}
          <SelectInput
            label="Label"
            selected={data.label_id}
            error={errors.label_id}
            options={labels}
            onChange={(e) => {
              setData("label_id", e);
            }}
          />

          {/* hem_type_id */}
          <SelectInput
            label="Hem Type"
            selected={data.hem_type_id}
            error={errors.hem_type_id}
            options={hem_types}
            onChange={(e) => {
              setData("hem_type_id", e);
            }}
          />

          {/* hem_size_id */}
          <SelectInput
            label="Hem Size"
            selected={data.hem_size_id}
            error={errors.hem_size_id}
            options={hem_sizes}
            onChange={(e) => {
              setData("hem_size_id", e);
            }}
          />

          {/* corner_id */}
          <SelectInput
            label="Corner"
            selected={data.corner_id}
            error={errors.corner_id}
            options={corners}
            onChange={(e) => {
              setData("corner_id", e);
            }}
          />
        </FormContainer>
      </main>
    </>
  );
};

export default Form;
