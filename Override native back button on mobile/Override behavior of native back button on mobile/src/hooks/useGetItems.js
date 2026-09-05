import { useQueries } from "@tanstack/react-query"
import * as API from '../api/api';

export const useGetItems = (chunk, isLoading) => {
    
    const items = useQueries({
        queries: chunk?.map((itemId) => ({
            queryKey: ['objectData', itemId],
            queryFn: async () => await API.getItem(itemId),
        })) ?? [],
        enabled: isLoading
    })

    const isFetchingItems = items.length 
        ? items.every(item => item.isFetching) 
        : false;

    return {
        items,
        isFetchingItems
    }
}