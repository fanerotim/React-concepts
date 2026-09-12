import { useGetItems } from "../hooks/useGetItems";
import { Pagination, IconButton, ButtonGroup } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const PagePagination = ({ onChange, chunksOfData, page }) => {
    // prefetch items
    useGetItems(chunksOfData[page + 1])
    const pagesCount = chunksOfData.length;

    return (
        <Pagination.Root
            // total number of data items. i have prepared the data in chunks of 5 items per arr, chunks contains multiple arrays, each with 5 items (or less if no more are available in db)
            count={pagesCount}
            // number of data items to show per page, but as my data is prepared to be of 5 items per page, keeping of value of 1 is the only option, unless I change the design to have 1 array with more items
            pageSize={1}
            key={'xs'}
            onPageChange={(e) => onChange(e.page)}
        >
            <ButtonGroup>
                <Pagination.PrevTrigger asChild>
                    <IconButton
                        size={'xs'}
                        variant={'outline'}
                        colorPalette={'orange'}
                    >
                        <HiChevronLeft />
                    </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.PageText
                    fontWeight={'light'}
                    bg={'purple.subtle'}
                    paddingInline={'2'}
                    paddingBlock={'1'}
                    borderRadius={'10%'}
                    fontSize={'xs'}
                />
                <Pagination.NextTrigger asChild>
                    <IconButton
                        size={'xs'}
                        variant={'outline'}
                        colorPalette={'orange'}
                    >
                        <HiChevronRight />
                    </IconButton>
                </Pagination.NextTrigger>
            </ButtonGroup>
        </Pagination.Root>
    )
}

export default PagePagination;