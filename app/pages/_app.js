/* import '../styles/globals.css'*/
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import DefaultLayout from '../layouts/DefaultLayout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider /* theme={theme} */>
      <DefaultLayout>  
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  )
}

export default MyApp

