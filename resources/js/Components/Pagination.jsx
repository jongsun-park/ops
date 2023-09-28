import { Link } from "@inertiajs/react";

/**
 * Laravel React Pagination
 * https://www.itsolutionstuff.com/post/laravel-react-js-pagination-using-vite-exampleexample.html?utm_content=cmp-true
 */

export default function Pagination({ links }) {
    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-600 text-white";
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    const modifyLabel = (label) =>
        label.replace("&laquo;", "").replace("&raquo;", "").trim();

    return (
        links.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8">
                    {links.map((link) =>
                        link.url === null ? (
                            <div
                                className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                                key={link.label}
                            >
                                {modifyLabel(link.label)}
                            </div>
                        ) : (
                            <Link
                                className={getClassName(link.active)}
                                href={link.url}
                                key={link.label}
                            >
                                {modifyLabel(link.label)}
                            </Link>
                        )
                    )}
                </div>
            </div>
        )
    );
}
