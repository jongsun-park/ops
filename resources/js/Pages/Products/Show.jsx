import { Head, Link } from "@inertiajs/react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Header from "@/Layouts/Header";
import Label from "@/Components/Label";

const YarnBox = ({ title = "", yarn = {} }) => (
    <Link href={route("yarns.show", yarn.id)}>
        <div className="bg-white border border-transparent shadow-sm rounded p-5 my-4 space-y-2 hover:bg-transparent hover:shadow-none hover:border-blue-500">
            <h3 className="text-blue-500 font-bold uppercase">{title}</h3>

            <ul role="list">
                <li>
                    <Label>Name</Label>
                    {yarn.name}
                </li>
                <li>
                    <Label>SKU</Label>
                    {yarn.sku}
                </li>
            </ul>
        </div>
    </Link>
);

const Show = ({ product, yarns, user }) => {
    const title = `Product - ${product?.name}`;

    return (
        <>
            <Head title={title} />
            <Header>
                <div className="flex justify-between align-center">
                    <h2 className="flex items-center font-semibold text-3xl text-gray-800 leading-tight">
                        {title}
                        {user?.can?.update && (
                            <Link
                                href={route("products.edit", product.id)}
                                className="ml-2"
                                title="Update product"
                            >
                                <PencilSquareIcon className="h-[24px] w-[24px] text-blue-500" />
                            </Link>
                        )}
                        {user?.can?.delete && (
                            <Link
                                href={route("products.destroy", product.id)}
                                method="delete"
                                as="button"
                                className="ml-2"
                                title="Delete product"
                            >
                                <TrashIcon className="h-[24px] w-[24px] text-red-500" />
                            </Link>
                        )}
                    </h2>
                </div>
            </Header>
            <main>
                <div className="mx-5 px-5 py-5 rounded bg-white space-y-3">
                    <p>
                        <Label>Created By</Label>
                        {user.name}
                    </p>
                    <p>
                        <Label>Created At</Label>
                        {product.created_at}
                    </p>
                    <p>
                        <Label>Name</Label>
                        {product.name}
                    </p>
                    <p>
                        <Label>Sku</Label>
                        {product.sku}
                    </p>
                    <p>
                        <Label>Description</Label> {product.description}
                    </p>
                </div>

                <div className=" px-5 py-5 space-y-3">
                    <h2 className="flex items-center font-semibold text-2xl text-gray-800 leading-tight">
                        Yarns
                    </h2>
                    <YarnBox title="Yarn 1" yarn={yarns.yarn1} />
                    <YarnBox title="Yarn 2" yarn={yarns.yarn2} />
                    <YarnBox title="Yarn 3" yarn={yarns.yarn3} />
                    <YarnBox title="Yarn 4" yarn={yarns.yarn4} />
                </div>
            </main>
        </>
    );
};

export default Show;
