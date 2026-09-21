import ProductCard from './ProductCard';
import Departments from './Departments';
import PagePagination from './Pagination';
import Loader from './Loader';
import { useState, useRef } from 'react';
import { Flex, Heading, ScrollArea, Text } from '@chakra-ui/react';
import { useGetAll } from '../hooks/useGetDetails';
import { useGetItems } from '../hooks/useGetItems';
import { prepareChunks } from '../helpers/prepareChunks';

const ProductList = () => {
    const [deptId, setDeptId] = useState(null);
    // TODO: Handle isError case
    const { isError, isLoading, itemIds } = useGetAll(deptId)

    const chunksOfData = itemIds?.objectIDs.length
        ? prepareChunks(itemIds.objectIDs)
        : []

    const scrollRef = useRef(null);
    const [page, setPage] = useState(0);
    // Pagination component returns 1 as first page, but we need to start from 0, which will be first page
    const handlePageChange = (page) => {
        setPage(() => page - 1);
        scrollRef.current.scrollTo({ top: 0 });
    }
    const { isItemError, isLoadingItems, items } = useGetItems(chunksOfData[page])
    // TODO: Consider moving pagination and theme toggle switch into a sidebar on desktop
    // Improve Card styling

    // TODO:
    // Handle isItemError case
    console.log(items);
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
                setDeptId={setDeptId}
                isLoading={isLoading}
            />

            <Flex
                gap={"2rem"}
                wrap={"wrap"}
                maxW={"80%"}
                margin={"0 auto"}
                justifyContent={'center'}
            >
                {items && !isLoadingItems && !isLoading
                    ? items.map(({ data }, i) => (
                        <ProductCard
                            key={i}
                            data={data}
                        />
                    ))
                    :
                    <Loader
                        size={'xl'}
                        colorPalette={'red'}
                    />
                }
            </Flex>

            {(deptId && items.length) &&

                <Flex
                    justify={'center'}
                    paddingBlock={'3rem'}
                >
                    <PagePagination
                        onChange={handlePageChange}
                        chunksOfData={chunksOfData}
                        page={page}
                    />
                </Flex>
            }
        </>
    )
}

export default ProductList;