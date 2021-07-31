import styles from '../styles/Home.module.css'
import useIsMounted from 'react-is-mounted-hook';
import { useEffect } from 'react';
import { usePaginaActivaContext } from "../components/contextos/PaginaActivaProvider"

export default function Home() {

 const isMounted = useIsMounted();
 const {setBotonActivado} = usePaginaActivaContext()

  
  useEffect(() => {
    isMounted && setBotonActivado("Home")
   
  }, [isMounted]) 

  return (
    <div >
      
        <h1 className={styles.title}>
         Bienvenidos!!
        </h1>

    </div>
  )
}
