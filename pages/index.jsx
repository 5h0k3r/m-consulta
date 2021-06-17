import Head from 'next/head'
import Template from '../template/template'
import dynamic from 'next/dynamic'
import {Bling as GPT} from "react-gpt"
import Script from 'next/script'

import GaleriaPrincipal from '../../../../components/GaleriaPrincipal/GaleriaPrincipal'
const AlMyMasL = dynamic(() => import("../components/AlMyMasL/AlMyMasL"))
const LaCorte = dynamic(() => import("../components/LaCorte/LaCorte"))
const Municipios = dynamic(() => import("../components/Municipios/Municipios"))
const SliderOpinion = dynamic(() => import("../components/SliderOpinion/SliderOpinion"))
const Multimedia = dynamic(() => import("../components/Multimedia/Multimedia"))
const NotasSoft = dynamic(() => import("../components/NotasSoft/NotasSoft"))
const Blogs = dynamic(() => import("../components/Blogs/Blogs"))

GPT.enableSingleRequest();

export default function Home() {
  return (
    <Template>
      <Head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type": "Organization",
            "name": "e-consulta.com",
            "alternateName": "e-consulta.com",
            "url": `${process.env.eConsultaCanonical}`,
            "logo": {
              "@type":"ImageObject",
              "url":"https://www.e-consulta.com/assets/images/logo_02.png"
            },
            "sameAs": [
              "https://www.facebook.com/econsulta.noticias",
              "https://twitter.com/e_consulta",
              "https://www.youtube.com/user/videoeconsulta"
            ]
          })}}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type": "WebPage",
            "headline": "e-consulta.com | Periódico Digital de Noticias de Puebla | México 2021",
            "description": "e-consulta – Periódico Digital de Noticias de Puebla,Periódico Digital e-consulta, sitio de Referencia Obligada en noticias minuto por minuto de Puebla, Tlaxcala, Oaxaca Veracruz y el mundo, con secciones de Política, Gobierno, Ciudad, Educación, Universidades, Salud, Economía, Sociedad, Ecología, Seguridad, Nación, Mundo, Cultura, Turismo, Ciencia, Columnas, Artículos, cartones, videos, fotogalerías, gráficos, foros, blogs, chats, redes sociales, Twitter, Facebook, comentarios en notas, obituarios",
            "publisher": {
              "@type": "Organization",
              "name": "e-consulta.com",
              "url": `${process.env.eConsultaCanonical}`,
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.e-consulta.com/assets/images/logo_02.png"
              },
              "sameAs": [
                "https://www.facebook.com/econsulta.noticias",
                "https://twitter.com/e_consulta",
                "https://www.youtube.com/user/videoeconsulta"
              ]
            }
          })}}
        />
      </Head>
      <div id="div-gpt-ad-1595634310559-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/MovilPortada_FullTop_320x50"
                    slotSize={[320, 50]}
                />
            </div>
            <GaleriaPrincipal />
            <div id="div-gpt-ad-1595638274390-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/MoPo_320x50_2nd_new"
                    slotSize={[320, 50]}
                />
            </div>
            <AlMyMasL />
            <LaCorte />
            
            <div id="div-gpt-ad-1617048661461-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/MoPo_300x250_DespuesCorte"
                    slotSize={[300, 250]}
                />
            </div>
            <Municipios />
            <div id="div-gpt-ad-1623355430247-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/CuboGenerico_300x250"
                    slotSize={[300, 250]}
                />
            </div>
            <SliderOpinion />
            <div id="div-gpt-ad-1623355430247-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/CuboGenerico_300x250"
                    slotSize={[300, 250]}
                />
            </div>
            <Multimedia />
            <div id="div-gpt-ad-1623355430247-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/CuboGenerico_300x250"
                    slotSize={[300, 250]}
                />
            </div>
            <NotasSoft path="deportes" title="Deportes" />
            <div id="div-gpt-ad-1623355430247-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/CuboGenerico_300x250"
                    slotSize={[300, 250]}
                />
            </div>
            <NotasSoft path="virales" title="Virales" />
            <div id="div-gpt-ad-1623355430247-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/CuboGenerico_300x250"
                    slotSize={[300, 250]}
                />
            </div>
            <NotasSoft path="nacionymundo" title="Nación y Mundo" />
            <div id="div-gpt-ad-1623355430247-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/CuboGenerico_300x250"
                    slotSize={[300, 250]}
                />
            </div>
            <Blogs />
    </Template>
  )
}
