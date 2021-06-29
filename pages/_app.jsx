import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Template.css'
import '../styles/Header.css'
import '../styles/Footer.css'
import '../styles/GaleriaPrincipal.css'
import '../styles/AlMyMasL.css'
import '../styles/LaCorte.css'
import '../styles/Slideropinion.css'
import '../styles/Municipios.css'
import '../styles/Multimedia.css'
import '../styles/NotasSoft.css'
import '../styles/Nota.css'
import '../styles/Publicidad.css'
import '../styles/Blogs.css'
import '../styles/Opinion.css'
import '../styles/Pagination.css'
import '../styles/Secciones.css'
import '../styles/Autor.css'
import '../styles/slick.min.css'
import '../styles/slick-theme.min.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <Component {...pageProps} />
}

export default MyApp
