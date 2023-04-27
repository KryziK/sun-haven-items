import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import { debounce } from "throttle-debounce";

export const useFuse = <T>(list: T[], options: Fuse.IFuseOptions<T>) => {
    const [query, updateQuery] = useState('');

    const fuse = useMemo(() => new Fuse(list, options), [list, options]);

    const hits = useMemo(
        () => !query
            ? list.slice(0, 99).map((item, refIndex) => ({ item, refIndex }))
            : fuse.search(query, { limit: 99 }),
        [fuse, list, query]
    );

    const setQuery = useMemo(() => debounce(100, updateQuery), []);

    return { hits, query, updateQuery: setQuery };
};