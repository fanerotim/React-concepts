import { Spinner, VStack, Text } from "@chakra-ui/react"

const Loader = ({ size, colorPalette }) => {
    return (
        <VStack>
            <Spinner
                size={size}
                color={`${colorPalette}.400`}
            />
            <Text>Loading...</Text>
        </VStack>
    )
}

export default Loader;