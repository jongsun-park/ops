import { usePage } from "@inertiajs/react";

import AuthenticatedLayout from "./AuthenticatedLayout";
import GuestLayout from "./GuestLayout";

const Layout = ({ children }) => {
    const user = usePage().props.auth.user;

    if (!user) {
        return <GuestLayout>{children}</GuestLayout>;
    }

    return <AuthenticatedLayout user={user}>{children}</AuthenticatedLayout>;
};

export default Layout;
