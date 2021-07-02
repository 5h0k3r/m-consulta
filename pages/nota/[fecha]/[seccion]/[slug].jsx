import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Slider from "@bit/akiran.react-slick.slider"
import Ad from 'react-google-publisher-tag'
import {Bling as GPT} from "react-gpt"
import ReactHtmlParser from 'react-html-parser'
import Template from '../../../../template/template'
import useSWR from 'swr'
//import { FacebookProvider, Comments } from 'react-facebook';


const GaleriaPrincipal = dynamic(() => import('../../../../components/GaleriaPrincipal/GaleriaPrincipal')) 
const Almomento = dynamic(() => import('../../../../components/AlMyMasL/AlMyMasL'))
const Share = dynamic(() => import('../../../../components/Share/Share'))
const Relativas = dynamic(() => import('../../../../components/Relativas/Relativas'))

GPT.enableSingleRequest();

 
function Nota({nota}){
    useEffect(() => {
        const i = document.createElement("script");
        i.setAttribute("src", "https://www.instagram.com/static/bundles/es6/EmbedSDK.js/58b07fec4121.js")
        i.setAttribute("defer", "true")
        const instScript = document.getElementsByClassName("instagram-media")[0]
        instScript ? instScript.appendChild(i) : null
        document.head.appendChild(i)

        const twitterScript = document.createElement("script")
        twitterScript.setAttribute("src", "https://platform.twitter.com/widgets.js")
        twitterScript.setAttribute("defer", true)
        const tweetElement = document.getElementsByClassName("twitter-tweet")[0]
        tweetElement ? tweetElement.appendChild(twitterScript) : null

        const tiktok = document.createElement("script")
        tiktok.setAttribute("src", "https://www.tiktok.com/embed.js")
        tiktok.setAttribute("defer", true)
        const tiktokScript = document.getElementsByClassName("tiktok-embed")[0]
        tiktokScript ? tiktokScript.appendChild(tiktok) : null



    }, [])
    const content = nota.data
    const { src_imgs } = nota.data
    const html = content.cuerpo
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: false
    }
    console.log(nota)
    return(
        <Template>
            <Head>
                {ReactHtmlParser(content.seo)}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: content.nota_schema }} ></script>
                <meta property="fb:pages" content="159467817449892" />
            </Head>
            <Script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" strategy="beforeInteractive" />
            <Script src="https://www.instagram.com/static/bundles/es6/EmbedSDK.js/58b07fec4121.js" />
            <Script src="https://platform.twitter.com/widgets.js" />
            <Script src="https://www.tiktok.com/embed.js" />
            <div id="div-gpt-ad-1595602447264-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/MobileNote_FullTop_320x50"
                    slotSize={[320, 50]}
                />
            </div>
            <div className="row" >
                {src_imgs.length > 1 ? (
                    <Slider {...setting}>
                        {src_imgs.map((image, index) =>(
                            <Image
                                className="img-fluid lazyload"
                                width={360}
                                height={240}
                                src={image.img_uri.replace('public://', process.env.eConsultaImagenes)}
                                alt={content.title}
                                key={index}
                            />
                        ))}
                    </Slider>
                ) : (
                    <Image
                        className="img-fluid lazyload"
                        width={360}
                        height={240}
                        src={src_imgs[0].img_uri.replace('public://', process.env.eConsultaImagenes)}
                        alt={content.title}
                    />
                )}
            </div>
            
            <div className={`row mx-2  ${content.SECCION.toLowerCase()}`}>
                <Share url={content.URL_ALIAS} title={content.title}/>
                
                <div className="separador mt-2">
                    <span className="nota-seccion">{content.SECCION}</span>
                </div>
                <div className="nota-title">
                    <h1>{content.title}</h1>
                </div>
                <div className="nota-autor byline mt-2">
                    Por <Link href={'/autor/' + content.AUTOR}>{content.AUTOR}</Link>  | {content.date_torender} | {content.credit_img ? ( <div>{content.credit_img} </div>) : (<></>)}
                </div>
                {content.sumario ? (
                    <div className="nota-sumario">
                        {content.sumario}
                    </div>
                ) : <></>}
                
                <div className="txtview text-justify note-body" id="body_note" >
                    {/*ReactHtmlParser(html)*/}
                    {
                        html.map( (p, index) =>(
                            
                            index+1 == 3 ? 
                            (
                                [ ReactHtmlParser((p.search('blockquote') !== -1) ? p : '<p>'+p+'</p>') , <div id="div-gpt-ad-1595629171961-0" className="text-center mt-2 mb-2"><GPT adUnitPath="/138222292/test" slotSize={[300, 250]} /></div> ]
                            )
                            : (index+1 > 3 && ((index+1) % 3 ===0)) ?
                            (
                                [ ReactHtmlParser((p.search('blockquote') !== -1) ? p : '<p>'+p+'</p>'), <div className="text-center mt-3 mb-3"><Ad path="/138222292/CuboGenerico_300x250" id="div-gpt-ad-1623355430247-0" format="RECTANGLE"/></div> ]
                            ): ReactHtmlParser((p.search('blockquote') !== -1) ? p : '<p>'+p+'</p>')
                        ) )
                        
                    }
                </div>
                <div className="tags-list">
                    {
                        content.tags.map( (tag, index) =>(
                            <Link href={'/tags/'+tag.name} key={index}>
                                {tag.name}
                            </Link>
                        ) )
                    }
                </div>
            </div>
            {/*
            <div className="">
                <FacebookProvider appId="522731284465449">
                    <Comments href={"https://www.e-consulta.com/" + content.URL_ALIAS} />
                </FacebookProvider>
            </div>
            */}

            <div className="relativas mt-3">
                <div className="r-head">
                    Notas relacionadas
		        </div>
                <Relativas rel={content.relativas} />
            </div>
            <div id="div-gpt-ad-1623519879945-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/GenericoDobleCubo_300x600"
                    slotSize={[300, 600]}
                />
            </div>
            <Almomento/>
            <div className="row">
                <div className="com-xs-12 text-center text-white mb-2 pt-2 en-protada">
                    <h3><b>EN PORTADA</b></h3>
                </div>
            </div>
            <GaleriaPrincipal />
            <div className="text-center mb-2 mt-2">
                <Ad path="/138222292/CuboGenerico_300x250" id="div-gpt-ad-1623355430247-0" format="RECTANGLE"/>
            </div>
        </Template>
    )
}

export async function getServerSideProps({params}){
    const { fecha, seccion, slug } = params
    const nota = fecha+"/"+seccion+"/"+slug
    const res = await fetch(process.env.eConsultaNota+''+nota)
    const data = await res.json()
    return{
        props: {
            nota: data
        }
    }
}

export default Nota