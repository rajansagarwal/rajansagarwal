import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { extendTheme } from "@chakra-ui/react"
import type { AppProps } from 'next/app'
import { GeistProvider, CssBaseline } from '@geist-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
		<GeistProvider>
      <Component {...pageProps} />
		</GeistProvider>
    </ChakraProvider>
  )
}

export default MyApp