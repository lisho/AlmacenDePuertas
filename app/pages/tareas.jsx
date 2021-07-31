import {
  List,
  ListItem,
  Button,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState,useContext } from "react";
import FormularioTarea from "../components/FormularioTarea";
import Tarea from "../components/Tarea";
import useIsMounted from 'react-is-mounted-hook';
import { usePaginaActivaContext } from "../components/contextos/PaginaActivaProvider"

const tareasIniciales = [
  {
    id: 1,
    title: "Tarea 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptates nemo impedit maiores excepturi rem voluptate doloribus possimus sint hic non incidunt nesciunt dicta consequatur mollitia, aliquid ab debitis",
  },
  {
    id: 2,
    title: "Tarea 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptates nemo impedit maiores excepturi rem voluptate doloribus possimus sint hic non incidunt nesciunt dicta consequatur mollitia, aliquid ab debitis",
  },
];

const valoresIniciales = {
  id: "",
  title:"",
  description:""
  }


const Tareas = () => {

  const [tareas, setTareas] = useState(tareasIniciales); // Array de todas las tareas
  const [tareaParaEditar, setTareaParaEditar] = useState(null); // Se llena cuando hay una tarea para editar
  const { isOpen, onOpen, onClose } = useDisclosure(); // Manejador del modal
  const [formValues, setFormValues] = useState(valoresIniciales)
  const isMounted = useIsMounted();
  const {setBotonActivado} = usePaginaActivaContext()
  
  useEffect(() => {
    isMounted && setBotonActivado("Tareas")
   
  }, [isMounted]) 

  /* Función para AÑADIR una nueva tarea 
  ** @ param: Objeto tarea
  ** Añade el id, vuelve a crear el array tareas incluyendo la nueva tarea,
  ** actualiza el estado tareas y cierra el modal
  */

  const handleAdd = (tarea) => {
    
     const nuevaTarea = {
      
      ...tarea,
      id: Date.now()+Math.floor(Math.random()),
    }; 
   
    console.log(nuevaTarea)
    const tareasCambiadas = [nuevaTarea, ...tareas];

    setTareas(tareasCambiadas);
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
      
    const tareasCambiadas = tareas.map((tarea) =>
      tarea.id === tareaEditada.id ? tareaEditada : tarea
    );

    setTareas(tareasCambiadas);
    setTareaParaEditar(null);
    onClose();
  };

  const abrirModal = () => {
    setFormValues(valoresIniciales)
    onOpen()
  }

  return (
    <>
      <Heading as="h1" m="15px" size="xl">
          App de Tareas
      </Heading>
      <Heading as="h3" m="15px" size="md">
        Mis tareas pendientes
        <Button
          p="5px"
          ml="10px"
          bg="teal.400"
          color="white"
          onClick={() => abrirModal()}
        >
          +
        </Button>
      </Heading>

      <List spacing={3}>
        {tareas.map((tarea) => (
          <ListItem key={tarea.id}>
            <Tarea
              tarea={tarea}
              tareas={tareas}
              setTareas={setTareas}
              setTareaParaEditar={setTareaParaEditar}
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
