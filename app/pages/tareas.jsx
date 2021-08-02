import {
  List,
  ListItem,
  Button,
  Heading,
  useDisclosure,
  Icon,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useEffect, useState,useContext } from "react";
import FormularioTarea from "../components/FormularioTarea";
import Tarea from "../components/TareaItem";
import useIsMounted from 'react-is-mounted-hook';
import { usePaginaActivaContext } from "../components/contextos/PaginaActivaProvider"
import crearNuevoElementoEnBd from "../helpers/crearNuevoElementoEnBD";
import editarElementoEnBd from "../helpers/editarElementoEnBD";
import borrarElementoEnBd from "../helpers/borrarElementoEnBD";

const valoresIniciales = {
  id: null,
  tarea:"",
  descripcion:""
  }


const Tareas = () => {

  const [tareas, setTareas] = useState([]); // Array de todas las tareas
  const [tareaParaEditar, setTareaParaEditar] = useState(null); // Se llena cuando hay una tarea para editar
  
  const { isOpen, onOpen, onClose } = useDisclosure(); // Manejador del modal
  const [formValues, setFormValues] = useState(valoresIniciales)
  const isMounted = useIsMounted();
  const {setBotonActivado} = usePaginaActivaContext()
  
  useEffect(() => {
    isMounted && setBotonActivado("Tareas")
   
  }, [isMounted]) 


  useEffect(() => {
    fetch('http://0.0.0.0:3030/api/tareas')
      .then(response => response.json())
      .then(data => {
        setTareas(data)
        console.log(data)
      });
    
  }, [])

  /* Función para AÑADIR una nueva tarea 
  ** @ param: Objeto tarea
  ** Añade el id, vuelve a crear el array tareas incluyendo la nueva tarea,
  ** actualiza el estado tareas y cierra el modal
  */

  const handleAdd = (tarea) => {
    
     const nuevaTarea = {
      
      ...tarea,
    }; 
   
    console.log(nuevaTarea)
    
    crearNuevoElementoEnBd("http://0.0.0.0:3030/api/tareas", nuevaTarea, setTareas, tareas);
    onClose();
  };

  /* Función para EDITAR una tarea 
  ** @ param: Objeto tarea editada
  ** Mapea el array de tareas y comprueba si coincide el id de la tarea editada
  ** si el id coincide devuelve la tareaeditada y si no deja la tarea que ya existe.
  ** Actualiza el estado de las tareas con las tareasCambiadas, 
  ** cambia el estado de tareaParaEditar a null y cierra el modal.
  */

  const handleEditar = (tareaEditada) => {
      
    /*  const tareasCambiadas = tareas.map((tarea) =>
      tarea.id === tareaEditada.id ? tareaEditada : tarea
    );  */

    editarElementoEnBd("http://0.0.0.0:3030/api/tareas/"+tareaEditada.id, tareaEditada, setTareas);

    /* setTareas(tareasCambiadas); */
    setTareaParaEditar(null);
    onClose();
  };

  const handleBorrar = (tareaParaBorrar) => {
  
      borrarElementoEnBd("http://0.0.0.0:3030/api/tareas/"+tareaParaBorrar.id, setTareas);
  }

  const abrirModal = () => {
    setFormValues(valoresIniciales)
    onOpen()
  }

  return (
    <>
      <Heading as="h1" m="15px" size="xl">
          Tareas
      </Heading>
      <Button
          p="10px"
          ml="10px"
          bg="teal.400"
          color="white"
          onClick={() => abrirModal()}
        >
          <Icon
                as={AddIcon}
                fontSize="xl"
                color="white"
            /> 
            <Text ml={5} display="flex">
                  nueva tarea
                </Text>
        </Button>
      <Heading as="h3" m="15px" size="md">
        Todas las tareas pendientes
      </Heading>

      <List spacing={3}>
        {console.log(tareas)}
        {tareas.map((tarea) => (
          <ListItem key={tarea.id}>
            <Tarea
              tarea={tarea}
              tareas={tareas}
              setTareas={setTareas}
              setTareaParaEditar={setTareaParaEditar}
              handleBorrar = {handleBorrar}
              onOpen={onOpen}
            />
          </ListItem>
        ))}
      </List>
      <FormularioTarea
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        handleAdd={handleAdd}
        handleEditar={handleEditar}
        tareaParaEditar={tareaParaEditar}
        setTareaParaEditar={setTareaParaEditar}
        valoresIniciales={valoresIniciales}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </>
  );
};

export default Tareas;
