import Header from "@/Layouts/Header";
import { Head, useForm } from "@inertiajs/react";
import { TextInput, PrimaryButton, Button } from "@/Components/Inputs";
import SelectInput from "@/Components/SelectInput";

const Create = ({ auth, yarns }) => {
    const { data, setData, post, processing, errors } = useForm({
        user_id: auth.user.id,
        sku: "",
        name: "",
        description: "",
        yarn1_id: "",
        yarn2_id: "",
        yarn3_id: "",
        yarn4_id: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/products");
    }

    return (
        <>
            <Head title="Create Product" />
            <Header>
                <div className="flex justify-between align-center">
                    <h2 className="font-semibold text-3xl text-gray-800 leading-tight mx-auto">
                        Create New Product
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
                                onChange={(e) => setData("sku", e.target.value)}
                                required
                            />
                            {/* NAME */}
                            <TextInput
                                id="name"
                                label="Name"
                                value={data.name}
                                error={errors.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            {/* Descrpition */}
                            <TextInput
                                id="description"
                                label="description"
                                value={data.description}
                                error={errors.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                required
                            />
                            {/* Yarn1_id */}
                            <SelectInput
                                id="yarn1_id"
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
                                id="yarn2_id"
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
                                id="yarn3_id"
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
                                id="yarn4_id"
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
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </main>
        </>
    );
};

export default Create;
