import { List, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import Tarea from "./Tarea";

const tareasIniciales = [
    {
        id: 1,
        title: 'Tarea 1',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptates nemo impedit maiores excepturi rem voluptate doloribus possimus sint hic non incidunt nesciunt dicta consequatur mollitia, aliquid ab debitis'
    },
    {
        id: 2,
        title: 'Tarea 2',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptates nemo impedit maiores excepturi rem voluptate doloribus possimus sint hic non incidunt nesciunt dicta consequatur mollitia, aliquid ab debitis'
    }
]


const Tareas = () => {

    const [tareas, setTareas] = useState(tareasIniciales)

    return (
        <>
            <h2> Mis tareas pendientes</h2>
            <List spacing={3}>
                {tareas.map(tarea =>
                    <ListItem key={tarea.id}>

                        <Tarea
                            tarea={tarea}
                            tareas={tareas}
                            setTareas={setTareas}
                        />

                    </ListItem>
                )}
            </List>
        </>
    );
}

export default Tareas;