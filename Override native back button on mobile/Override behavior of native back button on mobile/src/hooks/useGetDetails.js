import * as API from '../api/api';
import {useQuery} from '@tanstack/react-query';

export const useGetAll = (deptId) => {
    
    // TODO: debug why isLoading is always false, even if network is throttled
    const { data: itemIds, status } = useQuery({
        queryKey: ['itemIds'],
        queryFn: async () => await API.getAll(deptId),
        enabled: !!deptId,
    })
    
    console.log(status, 'this is status state of the query')

    return {
        itemIds,
    }
}