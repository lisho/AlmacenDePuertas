import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tareas from '../components/Tareas'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>App de Tareas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          App de Tareas
        </h1>

        <Tareas />
       
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Lisho
        </a>
      </footer>
    </div>
  )
}
