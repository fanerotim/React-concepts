import { Pagination, IconButton, ButtonGroup } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const PagePagination = ({ onChange, pageSize, totalPages }) => {
    console.log(pageSize)
    return (
        <Pagination.Root
            count={totalPages}
            defaultPage={1}
            pageSize={pageSize}
            onPageChange={(e) => onChange(e.page)}
        >
            <ButtonGroup>
                <Pagination.PrevTrigger asChild>
                    <IconButton>
                        <LuChevronLeft />
                    </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.Items
                    render={(page) => (
                        <IconButton>
                            {page.value}
                        </IconButton>
                    )}
                />

                <Pagination.NextTrigger asChild>
                    <IconButton>
                        <LuChevronRight />
                    </IconButton>
                </Pagination.NextTrigger>
            </ButtonGroup>
        </Pagination.Root>
    )
}

export default PagePagination;