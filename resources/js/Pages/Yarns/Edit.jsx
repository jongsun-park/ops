import Header from "@/Layouts/Header";
import { Head, useForm } from "@inertiajs/react";
import { TextInput, PrimaryButton, Button } from "@/Components/Inputs";

const Edit = ({ auth, yarn }) => {
    const { data, setData, put, processing, errors } = useForm({
        user_id: auth.user.id,
        sku: yarn?.sku ?? "",
        name: yarn?.name ?? "",
    });

    function submit(e) {
        e.preventDefault();
        put(`/yarns/${yarn.id}`);
    }

    return (
        <>
            <Head title="Update Yarn" />
            <Header>
                <div className="flex justify-between align-center">
                    <h2 className="font-semibold text-3xl text-gray-800 leading-tight mx-auto">
                        Update Yarn
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
