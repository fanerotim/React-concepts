import { useQueries } from "@tanstack/react-query"
import * as API from '../api/api';

export const useGetItems = (chunk) => {
    
    const items = useQueries({
        queries: chunk?.map((itemId) => ({
            queryKey: ['objectData', itemId],
            queryFn: async () => await API.getItem(itemId),
        })) ?? [],
    })

    return {
        items
    }
}