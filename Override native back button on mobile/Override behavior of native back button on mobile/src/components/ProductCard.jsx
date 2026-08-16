import { Card, Button, Image, Text, Badge } from "@chakra-ui/react"

const ProductCard = ({ data }) => {

    console.log(data);

    return (
        <Card.Root
            size="sm"
            width={"sm"}
            margin={"0 auto"}
        >
            <Card.Header>
                <Card.Title
                    fontWeight={"medium"}
                    textStyle={"lg"}
                >
                    {data?.title}
                </Card.Title>

                <Badge w={"fit-content"}>
                    {data?.department}
                </Badge>

                <Badge w={"fit-content"}>
                    {data?.objectDate}
                </Badge>
            </Card.Header>

            <Card.Body
                width={"xs"}
                margin={"0 auto"}
            >
                <Image
                    objectFit={"cover"}
                    alt={data?.title}
                    src={data?.primaryImage}
                >
                </Image>
                <Card.Description>
                    {data?.medium}
                </Card.Description>
            </Card.Body>

            <Card.Footer
                width={"sm"}
                margin={"0 auto"}
            >
                <Button>
                    Details
                </Button>
            </Card.Footer>
        </Card.Root>
    )
}

export default ProductCard;