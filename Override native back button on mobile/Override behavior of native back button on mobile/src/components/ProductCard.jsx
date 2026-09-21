import { Card, Button, Image, Badge, Group } from "@chakra-ui/react"

const ProductCard = ({ data }) => {

    // do not want to render an item if there is no image
    if (!data?.primaryImageSmall || !data?.primaryImage) {
        return
    }

    const DESCRIPTION_LENGTH = 100;
    const TITLE_LENGTH = 60;

    return (
        <Card.Root
            size="sm"
            width={"xs"}
            margin={"0 auto"}
            variant={'subtle'}
            colorPalette={'red'}
        >
            <Card.Header>
                <Card.Title
                    fontWeight={"medium"}
                    textStyle={"lg"}
                >
                    {data?.title.length > TITLE_LENGTH
                        ? data.title.slice(0, TITLE_LENGTH) + '...'
                        : data.title}
                </Card.Title>

                {data?.department &&
                    <Badge
                        w={"fit-content"}
                        variant={"outline"}
                    >
                        {data.department}
                    </Badge>}

                {data?.culture &&
                    <Badge
                        w={"fit-content"}
                        variant={"outline"}
                    >
                        {data.culture}
                    </Badge>}
            </Card.Header>

            <Card.Body

            >
                <Image
                    height={'80%'}
                    objectFit={"cover"}
                    alt={data?.title}
                    src={data?.primaryImageSmall ?? data?.primaryImage}
                >
                </Image>
                <Card.Description>
                    {data?.medium.length > DESCRIPTION_LENGTH 
                        ? `${data?.medium.slice(0, DESCRIPTION_LENGTH)}...` 
                        : data?.medium}
                </Card.Description>
            </Card.Body>

            <Card.Footer>
                <Group>
                    <Button
                        variant={"subtle"}
                        size={"xs"}
                        bg={'yellow.200'}
                        color={'black'}
                        fontWeight={'normal'}
                        _hover={{bg: 'red.400'}}
                    >
                        Details
                    </Button>

                    <Button
                        asChild
                        size={"xs"}
                        bg={'orange.100'}
                        color={'black'}
                        fontWeight={'normal'}
                        _hover={{bg: 'red.400'}}
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