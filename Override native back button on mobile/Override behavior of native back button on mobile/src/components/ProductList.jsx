import ProductCard from './ProductCard';
import * as API from '../api/api';
import Departments from './Departments';
import { useForm, Controller } from 'react-hook-form';
import { useQueries, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

const PAGE = 0;
const LIMIT = 20;

const ProductList = () => {

    const [deptId, setDeptId] = useState(null);
    const { handleSubmit, control } = useForm();

    const queryClient = useQueryClient();

    const { data: itemIds, isLoading, isError } = useQuery({
        queryKey: ['itemIds'],
        queryFn: async () => await API.getAll(deptId),
        enabled: !!deptId,
    })

    const onSubmit = handleSubmit(({departments}) => {
        const id = departments.length && departments[0];

        if (!id) return;

        setDeptId(() => id);

        if (deptId !== id) {
            // invalidate cache when department id changes
            queryClient.invalidateQueries({ queryKey: ['itemIds'] });
        }
    })

    const queries = itemIds?.objectIDs && itemIds?.objectIDs.slice(PAGE, LIMIT);

    const items = useQueries({
        queries: queries?.map((itemId) => ({
            queryKey: ['objectData', itemId],
            queryFn: async () => await API.getItem(itemId),
        })) ?? []
    })

    return (
        <>
            <Heading
                size={"4xl"}
                fontWeight={"normal"}
                textAlign={"center"}
                padding={"3rem"}
            >
                The Metropolitan Museum of Art

            </Heading>
            <Text
                textStyle={"md"}
                textAlign={"center"}
                fontWeight={"light"}
                paddingX={"3rem"}
            >
                You can browse the free API here and click on link to view items on the official website for more information
            </Text>
            <Departments
                onSubmit={onSubmit}
                Controller={Controller}
                control={control}
            />

            <Flex
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