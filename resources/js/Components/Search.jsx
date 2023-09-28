import { router } from "@inertiajs/react";

import { useState } from "react";

const Search = ({ filters = "" }) => {
    const [query, setQuery] = useState(filters);

    const onChange = (e) => {
        setQuery(e.target.value);

        router.get(
            route(route().current()),
            { search: e.target.value },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    return (
        <form>
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
                className="rounded mr-4 min-w-[240px] border-gray-50 shadow"
                value={query ?? ""}
                onChange={onChange}
            />
            <button
                type="reset"
                className="uppercase text-sm text-blue-400 font-bold"
            >
                reset
            </button>
        </form>
    );
};

export default Search;
