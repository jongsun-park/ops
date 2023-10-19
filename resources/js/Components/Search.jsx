import { router } from "@inertiajs/react";

import { debounce } from "lodash";
import { useCallback, useState } from "react";

const Search = ({ filters = "", className }) => {
  const [query, setQuery] = useState(filters);

  const debouncedQuery = useCallback(
    debounce((value) => {
      router.get(
        route(route().current()),
        { search: value },
        {
          preserveState: true,
          replace: true,
        },
      );
    }, 300),
    [],
  );

  const onChange = (e) => {
    setQuery(e.target.value);
    debouncedQuery(e.target.value);
  };

  const onClickReset = () => {
    setQuery();
    router.get(route(route().current()));
  };

  return (
    <form className={className}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        className="mr-2 min-w-[240px] flex-1 rounded border-gray-50 shadow"
        value={query ?? ""}
        onChange={onChange}
      />
      <button
        type="reset"
        className="rounded p-2 text-sm font-bold uppercase text-blue-400 hover:bg-blue-400 hover:text-white"
        onClick={onClickReset}
      >
        reset
      </button>
    </form>
  );
};

export default Search;
