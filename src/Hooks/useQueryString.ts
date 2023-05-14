import { useCallback, useState } from "react";

const getQueryStringValue = (key: string) =>
    new URLSearchParams(window.location.search).get(key);

const setQueryStringValue = (key: string, newValue: string, defaultValue: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if (newValue !== defaultValue)
        searchParams.set(key, newValue);
    else
        searchParams.delete(key);

    const newRelativePathQuery = (window.location.pathname + '?' + searchParams.toString()).replace(/\?$/, '');
    console.log(newRelativePathQuery);
    console.log(window.location.pathname);
    if (newRelativePathQuery !== window.location.href)
        history.pushState(null, '', newRelativePathQuery);
};

const useQueryString = (key: string, initialValue: string) => {
    const [value, setValue] = useState(getQueryStringValue(key) || initialValue);

    const onSetValue = useCallback((newValue: string) => {
        setValue(newValue);
        setQueryStringValue(key, newValue, initialValue);
    }, [initialValue, key]);

    return [value, onSetValue] as const;
};

export default useQueryString;