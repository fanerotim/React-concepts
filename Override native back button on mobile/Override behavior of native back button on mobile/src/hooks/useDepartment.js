import { useForm, Controller } from 'react-hook-form';

export const useDepartment = (setDeptId) => {
    const { handleSubmit, control } = useForm();

    const onSubmit = handleSubmit(({ departments }) => {
        const id = departments?.length && departments[0];

        if (!id) return;

        setDeptId(() => id)
    })

    return {
        onSubmit,
        Controller,
        control
    }
}