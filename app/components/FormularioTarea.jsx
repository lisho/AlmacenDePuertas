import { useRef, useState, useEffect } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    useOutsideClick
  } from "@chakra-ui/react"


const FormularioTarea = ({ isOpen, onOpen, onClose, 
                            handleAdd, handleEditar, 
                            tareaParaEditar, setTareaParaEditar, 
                            formValues, setFormValues, valoresIniciales}) => {
 
    const initialRef = useRef()
    
    const {title, description} = formValues;

    /* Manejamos el click fiera del modal de edicion para borrar los campos del formulario */
/*     useOutsideClick({
        ref: initialRef,
        handler: () => setFormValues(valoresIniciales)
      }) */
    
    
    const handleInputChange = (e) => {
        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value,
        };
        setFormValues(changedFormValues);
        
    };

    const handleSubmit = () => {
        tareaParaEditar 
        ? handleEditar(formValues)
        : handleAdd (formValues);
        console.log("Nueva tarea enviada...")
        setFormValues(valoresIniciales);
        
    }

    const handleCancelar = () => {
        setTareaParaEditar(null); 
        setFormValues(valoresIniciales)
        onClose()
    }

    useEffect(() => {
        tareaParaEditar && setFormValues(tareaParaEditar);
        console.log("Tarea para editar...", tareaParaEditar)
        console.log("Valores del formulario...", formValues)
       
    }, [tareaParaEditar])

    return (

        <>    
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{tareaParaEditar ? "Editar tarea":"Crear nueva tarea"}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                    <FormLabel>Nombre de la tarea</FormLabel>
                    <Input ref={initialRef} placeholder="Tarea" value={title} name="title" onChange={(e) => handleInputChange(e)}/>
                    </FormControl>
        
                    <FormControl mt={4}>
                    <FormLabel>Deacripción</FormLabel>
                    <Input placeholder="Descripción" name="description" value={description} onChange={(e) => handleInputChange(e)}/>
                    </FormControl>
                </ModalBody>
        
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={() => handleSubmit()}>
                    {tareaParaEditar ? "Guardar cambios":"Guardar" }
                    </Button>
                    <Button onClick={() => handleCancelar()}>Cancelar</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default FormularioTarea;