import { useQuery } from "@tanstack/react-query";

type ItemMaster = {
    gameVersion: string;
    totalItems: number;
    fileList: string[];
};

const useItemMaster = () => {
    const { isLoading, isSuccess, error, data } = useQuery<ItemMaster>({
        queryKey: ["GameItem", "MasterList"],
        queryFn: () => fetch("extracted_items/items.json").then(res => res.json())
    });

    return {
        isLoading,
        isSuccess,
        error,
        gameVersion: data?.gameVersion,
        itemCount: data?.totalItems ?? 0,
        fileList: data?.fileList
    };
};

export default useItemMaster;