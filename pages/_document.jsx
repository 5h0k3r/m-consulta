import Document, {NextScript, Html, Head, Main } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    render() {
      return (
        <Html lang="es">
          <Head>
            
          </Head>
          <body>
            <Main /> 
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument