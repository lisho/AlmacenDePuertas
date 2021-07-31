import Head from "next/head";
import styles from "../styles/Home.module.css";
import DrawerSidebar from "../components/sidebar/DrawerSidebar.jsx";
/* import tamVentana from "../helpers/tamVentana";
import { useEffect, useState } from "react"; */
import {PaginaActivaProvider} from "../components/contextos/PaginaActivaProvider"
let tamMain;



function DefaultLayout({ children }) {
  
/*   useEffect(() => {
    tamMain = tamVentana() - 300;
  }, []); */

  return (
    <div className={styles.container}>
      <Head>
        <title>App de Tareas</title>
        <meta
          name="description"
          content="Aplicacion para la gestión del trabajo EMMAS"
        />
        <title>Gestion EMMAS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PaginaActivaProvider>
        <DrawerSidebar />

        <main id="main" className={styles.main} >
          {children}
        </main>

        <footer className={styles.footer}>
          <a href="" target="_blank" rel="noopener noreferrer">
            Powered by Lisho
          </a>
        </footer>
      </PaginaActivaProvider>
    </div>
  );
}

export default DefaultLayout;
