import { useQueries } from "@tanstack/react-query"
import * as API from '../api/api';

export const useGetItems = (chunk) => {

    const items = useQueries({
        queries: chunk?.map((itemId) => ({
            queryKey: ['objectData', itemId],
            queryFn: () => API.getItem(itemId),
            staleTime: 60 * 60 * 24 * 1000
        })) ?? []
    })

    const isLoadingItems = items.length 
        ? items.every(item => item.isLoading) 
        : false;

    const isItemError = items.length
        ? items.find(item => item.isError)
        : false;

    return {
        items,
        isLoadingItems,
        isItemError
    }
}