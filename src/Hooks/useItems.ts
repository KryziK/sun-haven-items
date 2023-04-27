import { useFuse } from "./useFuse";
import useItemMaster from "./useItemMaster";
import { useQueries } from "@tanstack/react-query";

export type GameItemProp = {
  id: number;
  hasIcon: boolean;
  name: string;
  category: string;
  rarity: string;
  description: string;
};

const opts = {
  ignoreLocation: true,
  keys: [{ name: "id", weight: 3 }, { name: "name", weight: 2 }, { name: "description", weight: 1 }],
  threshold: 0.4
};

const useItems = () => {
  const { isSuccess, fileList } = useItemMaster();

  const results = useQueries({
    queries: (fileList ?? []).map(d => ({
      queryKey: ['items', d],
      queryFn: () => fetch(`extracted_items/${d}`).then(res => res.json()),
      enabled: isSuccess
    }))
  });

  const items = results.filter(r => r.isSuccess)
    .flatMap(r => r.data as GameItemProp[]);

  return useFuse(items, opts);
};

export default useItems;