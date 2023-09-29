import { Head, Link } from "@inertiajs/react";
import {
    ChevronDoubleRightIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/outline";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
import Search from "@/Components/Search";

const Yarn = ({ auth, yarns = [], filters }) => {
    console.log(yarns.data);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between align-center">
                    <h2 className="flex items-center font-semibold text-3xl text-gray-800 leading-tight">
                        Yarns
                        <Link
                            href={route("yarns.create")}
                            className="ml-2"
                            title="Create a new yarn"
                        >
                            <PlusCircleIcon className="h-[30px] w-[30px] text-blue-500" />
                        </Link>
                    </h2>
                    <Search filters={filters.search} />
                </div>
            }
        >
            <Head title="Yarns" />

            <div className="mx-5 px-5 rounded bg-white">
                <ul role="list" className="divide-y divide-gray-100">
                    <li className="flex justify-between gap-x-6 py-5">
                        <p className="flex-1 font-bold text-sm leading-6 text-gray-900">
                            Name
                        </p>
                        <p className="flex-1 font-bold text-sm leading-6 text-gray-900">
                            Created By
                        </p>
                        <p className="flex-1 font-bold text-sm leading-6 text-gray-900">
                            SKU
                        </p>
                        <p className="flex-0 w-10"></p>
                    </li>

                    {yarns.data.map(
                        ({ id, name, user_name, user_email, sku }) => (
                            <li
                                key={id}
                                className="flex justify-between gap-x-6 py-5"
                            >
                                <p className="flex-1 text-sm leading-6 text-gray-900">
                                    {name}
                                </p>
                                <p className="flex-1 text-sm leading-6 text-gray-900">
                                    <a href={`mailto:${user_email}`}>
                                        {user_name}
                                    </a>
                                </p>
                                <p className="flex-1 text-sm leading-6 text-gray-900">
                                    {sku}
                                </p>
                                {/* <a href={route(`yarn/${id}`)}>EDIT</a> */}
                                <a
                                    href={`yarn/${id}`}
                                    className="flex-0 mr-3 opacity-75 text-blue-300 hover:text-blue-600 hover:opacity-100"
                                >
                                    <ChevronDoubleRightIcon className="h-6 w-6 text-blue-500" />
                                </a>
                            </li>
                        )
                    )}
                </ul>
            </div>

            {yarns.data.length == 0 && (
                <div className="grid place-content-center h-24 border border-gray-300 bg-slate-50 rounded-md m-5">
                    <p>Please enter different keywords</p>
                </div>
            )}

            <div className="m-5 pb-10">
                <Pagination class="mt-6" links={yarns.links} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Yarn;
