import * as API from '../api/api';
import { useQuery } from '@tanstack/react-query';

export const useGetAll = (deptId) => {
    const { data: itemIds, isLoading, isError } = useQuery({
        queryKey: ['itemIds', deptId],
        queryFn: () => API.getAll(deptId),
        enabled: !!deptId,
        staleTime: 60 * 60 * 24 * 1000,
    })

    return {
        itemIds,
        isLoading,
        isError
    }
}

