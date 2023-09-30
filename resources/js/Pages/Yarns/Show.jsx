import { Head, Link } from "@inertiajs/react";

import Header from "@/Layouts/Header";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const Show = ({ yarn, user }) => {
    const title = `Yarn - ${yarn?.name}`;
    return (
        <>
            <Head title={title} />
            <Header>
                <div className="flex justify-between align-center">
                    <h2 className="flex items-center font-semibold text-3xl text-gray-800 leading-tight">
                        {title}
                        {user?.can?.update && (
                            <Link
                                href={route("yarns.edit", yarn.id)}
                                className="ml-2"
                                title="Update Yarn"
                            >
                                <PencilSquareIcon className="h-[24px] w-[24px] text-blue-500" />
                            </Link>
                        )}
                        {user?.can?.delete && (
                            <Link
                                href={route("yarns.destroy", yarn.id)}
                                method="delete"
                                as="button"
                                className="ml-2"
                                title="Delete Yarn"
                            >
                                <TrashIcon className="h-[24px] w-[24px] text-red-500" />
                            </Link>
                        )}
                    </h2>
                </div>
            </Header>
            <main>
                <div className="mx-5 px-5 py-5 rounded bg-white space-y-3">
                    <p>Created By: {user.name}</p>
                    <p>Created At: {yarn.created_at}</p>
                    <p>Name: {yarn.name}</p>
                    <p>Sku: {yarn.sku}</p>
                </div>
            </main>
        </>
    );
};

export default Show;
