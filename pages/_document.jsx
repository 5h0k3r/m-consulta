import Document, { Html, Head, Main } from 'next/document'
import NextScript from '../components/customNextHead/_customNextHead.tsx'

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