import { router, usePage } from "@inertiajs/react";

import { useEffect, useMemo, useState } from "react";
import AuthenticatedLayout from "./AuthenticatedLayout";
import Flash from "./Flash";
import GuestLayout from "./GuestLayout";

const Layout = ({ children }) => {
  const user = usePage().props.auth.user;

  // Layout for Portfolio - Disable default layout
  if (usePage().component == "AboutMe/Index") {
    return <>{children}</>;
  }

  //   Page Transition
  const [transitioning, setTransitioning] = useState(null);

  useEffect(() => {
    router.on("start", () => {
      setTransitioning(true);
    });
    router.on("finish", () => {
      setTransitioning(false);
    });
  }, []);

  const pageTransition = useMemo(
    () =>
      `animate__animated ${
        transitioning ? "animate__fadeOut" : "animate__fadeIn"
      }`,
    [transitioning],
  );

  if (!user) {
    return <GuestLayout className={pageTransition}>{children}</GuestLayout>;
  }

  return (
    <AuthenticatedLayout user={user} className={pageTransition}>
      {children}
      <Flash />
    </AuthenticatedLayout>
  );
};

export default Layout;
