import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const TextInput = ({
    label = "",
    id = "",
    value = "",
    error = "",
    placeholder = "",
    onChange,
}) => {
    return (
        <div className="sm:col-span-4">
            <label
                htmlFor={id}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                        name={id}
                        id={id}
                        autoComplete={id}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder={placeholder}
                    />
                </div>
                {error && <div className="text-red-600">{error}</div>}
            </div>
        </div>
    );
};

const PrimaryButton = ({ type = "button", disabled = false, children }) => (
    <button
        type={type}
        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        disabled={disabled}
    >
        {children}
    </button>
);

const Button = ({ type = "button", children }) => (
    <button
        type={type}
        className="text-sm font-semibold leading-6 text-gray-900"
    >
        {children}
    </button>
);

const Create = ({ auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        user_id: auth.user.id,
        sku: "",
        name: "",
    });

    function submit(e) {
        e.preventDefault();
        console.log(data);
        post("/yarns");
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between align-center">
                    <h2 className="font-semibold text-3xl text-gray-800 leading-tight">
                        Create New Yarn
                    </h2>
                </div>
            }
        >
            <Head title="Create Yarn" />
            <form
                onSubmit={submit}
                className="max-w-md mx-auto bg-white mt-8 p-8 rounded shadow"
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
                        />
                        {/* NAME */}
                        <TextInput
                            id="name"
                            label="Name"
                            value={data.name}
                            error={errors.name}
                            onChange={(e) => setData("name", e.target.value)}
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
        </AuthenticatedLayout>
    );
};

export default Create;
