import { Pagination, IconButton, ButtonGroup } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const PagePagination = ({ onPrev, onNext }) => {

    return (
        <Pagination.Root
            count={5}
            page={1}
            pageSize={10}
            onPageChange={onNext}
        >
            <ButtonGroup>
                <Pagination.PrevTrigger asChild>
                    <IconButton>
                        <LuChevronLeft />
                    </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.Items
                    render={(page) => {
                        <IconButton>
                            {page.value}
                        </IconButton>
                    }}
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