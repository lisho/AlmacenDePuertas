import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const Tarea = ({ tarea, setTareaParaEditar, onOpen, handleBorrar}) => {
   
    const [isTruncated, setIsTruncated] = useState(true)

    const handleVer = () => {
        setIsTruncated(!isTruncated)
    }

   /*  const handleBorrar = (tareaId) => {
        const nuevasTareas = tareas.filter(t => tareaId !== t.id);
        setTareas(nuevasTareas);    
        setTareaParaBorrar(tareaId);
    } */

    const handleEditar = (tarea) => {
        console.log(`editar tarea ${tarea.id}`)
        setTareaParaEditar(tarea);
        onOpen();
    }

    return (
        <Box bg="teal.400" p="10px" h="100%" w="80vw" color="white">
            <Heading as="h2" size="xl">{tarea.tarea} </Heading>
            {
                isTruncated ? <Text fontSize="md" isTruncated>{tarea.descripcion}</Text>
                    : <Text fontSize="md" >{tarea.descripcion}</Text>
            }

            <Button colorScheme="blue" 
                    size="sm" 
                    m="2px"
                    onClick = {() => handleEditar(tarea)}
            >
                Editar
            </Button>

            <Button colorScheme="red" 
                    size="sm" 
                    m="2px"
                    onClick = {() => handleBorrar(tarea)}
            >
                Borrar
            </Button>

            <Button colorScheme="teal"
                    size="sm"
                    m="2px"
                    onClick={() => handleVer()}
            >
                {isTruncated ? "Ver todo" : "Ocultar"}
            </Button>
            
        </Box>
    );
}

export default Tarea;