import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const Tarea = ({ tarea }) => {

    const [isTruncated, setIsTruncated] = useState(true)

    const handleVer = () => {
        setIsTruncated(!isTruncated)
    }

    return (
        <Box bg="teal.400" p="10px" h="100%" w="80vw" color="white">
            <Heading as="h2" size="xl">{tarea.title} </Heading>
            {
                isTruncated ? <Text fontSize="md" isTruncated>{tarea.description}</Text>
                    : <Text fontSize="md" >{tarea.description}</Text>
            }

            <Button colorScheme="teal" size="sm" m="2px">Borrar</Button>
            <Button colorScheme="teal"
                size="sm"
                m="2px"
                onClick={() => handleVer()}>
                {isTruncated ? "Ver todo" : "Ocultar"}
            </Button>
        </Box>
    );
}

export default Tarea;