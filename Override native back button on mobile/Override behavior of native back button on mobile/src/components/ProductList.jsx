import ProductCard from './ProductCard';
import * as API from '../api/api';
import Departments from './Departments';
import { useForm, Controller } from 'react-hook-form';
import { useQueries, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { useGetAll } from '../hooks/useGetDetails';
import { useGetItems } from '../hooks/useGetItems';
import { prepareChunks } from '../helpers/prepareChunks';

const PAGE = 3;

const ProductList = () => {

    const [deptId, setDeptId] = useState(null);
    const { handleSubmit, control } = useForm();

    const { itemIds } = useGetAll(deptId)
    const chunks = itemIds?.objectIDs.length
        ? prepareChunks(itemIds.objectIDs)
        : []

    
    const queryClient = useQueryClient();

    const onSubmit = handleSubmit(({ departments }) => {
        const id = departments.length && departments[0];

        if (!id) return;

        setDeptId(() => id);

        if (deptId !== id) {
            // invalidate cache when department id changes
            queryClient.invalidateQueries({ queryKey: ['itemIds'] });
        }
    })

    const [page, setPage] = useState(0);

    const handlePageChange = () => {
        setPage((curPage) => curPage + 1);
    }

    const handlePrevPage = () => {
        setPage((curPage) => curPage - 1);
    }

    const {items} = useGetItems(chunks[page])

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

            <button 
                onClick={handlePageChange}>
                Next Page
            </button>

            <button
                onClick={handlePrevPage}>
                Previus Page
            </button>
        </>
    )
}

export default ProductList;