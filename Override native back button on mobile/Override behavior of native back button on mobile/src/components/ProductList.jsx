import ProductCard from './ProductCard';
import * as API from '../api/api';
import Departments from './Departments';
import { useForm } from 'react-hook-form';
import { useQueries, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Flex } from '@chakra-ui/react';

const ProductList = () => {

    const [deptId, setDeptId] = useState(null);
    const { register, handleSubmit } = useForm();

    const queryClient = useQueryClient();
    const { data: itemIds, isLoading, isError } = useQuery({
        queryKey: ['itemIds'],
        queryFn: async () => await API.getAll(deptId),
        enabled: !!deptId,
    })

    const onSubmit = handleSubmit((data) => {
        setDeptId(() => data.department);

        if (deptId !== data.department) {
            // invalidate cache when department id changes
            queryClient.invalidateQueries({ queryKey: ['itemIds'] });
        }
    })

    const items = useQueries({
        queries: [21810, 21811, 21812, 21813, 21814, 21815, 21816, 21817, 21818, 21819, 21820].map((itemId) => ({
            queryKey: ['objectData', itemId],
            queryFn: async () => await API.getItem(itemId)
        }))
    })

    return (
        <>
            <Departments
                onSubmit={onSubmit}
                register={register}
            />

            <Flex 
                // direction={"column"}
                gap={"2rem"}
                wrap={"wrap"}
                maxW={"80%"}
                margin={"0 auto"}
            >
                {items && items.map(({ data }, i) => (
                    <ProductCard
                        key={i}
                        data={data}
                    />
                ))}
            </Flex>
        </>
    )
}

export default ProductList;