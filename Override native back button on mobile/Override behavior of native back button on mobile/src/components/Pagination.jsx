import { Pagination, IconButton, ButtonGroup } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const PagePagination = ({ onChange, pageSize, totalPages }) => {
    return (
        <Pagination.Root
            count={totalPages}
            defaultPage={1}
            pageSize={pageSize}
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