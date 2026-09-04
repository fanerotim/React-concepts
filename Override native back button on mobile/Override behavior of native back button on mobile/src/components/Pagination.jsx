import { Pagination, IconButton, ButtonGroup } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const PagePagination = ({ onChange, pageSize, totalPages }) => {
    return (
        <Pagination.Root
            count={totalPages}
            defaultPage={1}
            pageSize={pageSize}
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

                {/* <Pagination.Items
                    render={(page) => (
                        <IconButton>
                            {page.value}
                        </IconButton>
                    )}
                /> */}
                <Pagination.PageText
                    variant={'outline'}
                    colorPalette={'orange'}
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