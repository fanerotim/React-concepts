import { Card, Button, Image, Badge, Group } from "@chakra-ui/react"

const ProductCard = ({ data }) => {

    // do not want to render an item if there is no image
    if (!data?.primaryImage) {
        return
    }

    return (
        <Card.Root
            size="sm"
            width={"xs"}
            margin={"0 auto"}
        >
            <Card.Header>
                <Card.Title
                    fontWeight={"medium"}
                    textStyle={"lg"}
                >
                    {data?.title}
                </Card.Title>

                <Badge
                    w={"fit-content"}
                    variant={"outline"}
                >
                    {data?.department}
                </Badge>

                <Badge
                    w={"fit-content"}
                    variant={"outline"}
                >
                    {data?.culture}
                </Badge>
            </Card.Header>

            <Card.Body

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

            <Card.Footer>
                <Group>
                    <Button
                        size={"sm"}
                        variant={"subtle"}
                    >
                        Details
                    </Button>

                    <Button
                        asChild
                        size={"xs"}
                    >
                        <a
                            href={data?.objectURL}
                            target="_blank"
                        >
                            View on website
                        </a>
                    </Button>
                </Group>
            </Card.Footer>
        </Card.Root>
    )
}

export default ProductCard;