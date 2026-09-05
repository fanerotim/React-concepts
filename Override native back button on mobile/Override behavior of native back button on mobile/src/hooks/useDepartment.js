import { useForm, Controller } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';

export const useDepartment = (deptId, setDeptId) => {
    const { handleSubmit, control } = useForm();
    
    const queryClient = useQueryClient();

    const onSubmit = handleSubmit(({ departments }) => {
        const id = departments?.length && departments[0];

        if (!id) return;

        setDeptId(() => id)

        if (deptId !== id) {
            // invalidate cache when department id changes
            queryClient.invalidateQueries({ queryKey: ['itemIds'] });
        }
    })

    return {
        onSubmit,
        Controller,
        control
    }
}