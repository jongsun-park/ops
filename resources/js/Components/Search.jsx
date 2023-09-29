import { router } from "@inertiajs/react";

import { useCallback, useState } from "react";
import { debounce } from "lodash";

const Search = ({ filters = "" }) => {
    const [query, setQuery] = useState(filters);

    const debouncedQuery = useCallback(
        debounce((value) => {
            router.get(
                route(route().current()),
                { search: value },
                {
                    preserveState: true,
                    replace: true,
                }
            );
        }, 300),
        []
    );

    const onChange = (e) => {
        setQuery(e.target.value);
        debouncedQuery(e.target.value);
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
