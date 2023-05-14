import useQueryString from "./useQueryString";
import Fuse from "fuse.js";
import { useEffect, useMemo, useState } from "react";
import { debounce } from "throttle-debounce";

export const useFuse = <T>(list: T[], options: Fuse.IFuseOptions<T>) => {
    const [urlQuery, setUrlQuery] = useQueryString('search', '');
    const [query, setQuery] = useState(urlQuery);

    const fuse = useMemo(() => new Fuse(list, options), [list, options]);

    const hits = useMemo(
        () => !query
            ? list.slice(0, 99).map((item, refIndex) => ({ item, refIndex }))
            : fuse.search(query, { limit: 99 }),
        [fuse, list, query]
    );

    const doUpdateQuery = useMemo(() => debounce(100, setQuery), []);

    useEffect(() => {
        setUrlQuery(query);
    }, [query, setUrlQuery]);

    return { hits, query, updateQuery: doUpdateQuery };
};