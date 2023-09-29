import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
// import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import Layout from "./Layouts/Layoput";

const appName = import.meta.env.VITE_APP_NAME || "OPS";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout || ((page) => <Layout children={page} />);
        return page;

        // return resolvePageComponent(
        //     `./Pages/${name}.jsx`,
        //     import.meta.glob("./Pages/**/*.jsx")
        // );
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
