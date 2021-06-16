import React from 'react'
import Template from '../../../template/template'
import ReactHtmlParser from 'react-html-parser';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LaCorte from '../../../components/LaCorte/LaCorte'
import OpinionSlider from '../../../components/SliderOpinion/SliderOpinion'
import Masopinion from '../../../components/Masopinon/Masopinon'
import dynamic from 'next/dynamic'
import Ad from 'react-google-publisher-tag'

const Share = dynamic( () => import('../../../components/Share/Share'))

function Opinion({ data }) {
    const content = data.data
    const html = content.cuerpo
    //console.log(content)
    return (
        <Template>
            <Head>
                <title>{content.title}</title>
            </Head>
            <div className="mt-4">
                
                <div className="nota-title col-xs-12">
                    <h1><b>{content.title}</b></h1>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>
                            <span className="w-100">{content.date_torender}</span>
                            <Link href={'/autores/'+content.AUTOR}>{content.AUTOR}</Link>
                        </p>
                    </div>
                    <div className="float-left note-sumary note-sumary-cont" style={{width: '69%'}}>
                        <p><b>{content.sumario}</b></p>
                    </div>
                    <div className="float-rigth" style={{width: '30%'}}>
                        <Image
                            className="img-fluid float-rigth"
                            width={150}
                            height={150}
                            src={content.src_imgs.replace('public://', process.env.eConsultaImagenes)}
                            alt={content.title}
                        />
                    </div>
                    {
                        content.description != '' ?
                        (
                            <div className="col-xs-12 semblanza">
                                {ReactHtmlParser(content.description)}
                            </div>
                        )
                        :
                        (
                            <></>
                        )
                    }
                    
                    <Share url={content.URL_ALIAS} title={content.title}/>
                    
                </div>
                <div className="txtview text-justify" >
                    {html.map((p, index) =>(
                        index+1 == 3 ? 
                        (
                            [ ReactHtmlParser('<p>'+p + '</p>'), <Masopinion data={content.relativas} /> ]
                        )
                        : (index+1 > 3 && ((index+1) % 3 === 0))?
                        (
                            [ ReactHtmlParser('<p>'+p + '</p>'), <div className="text-center mt-3 mb-3"><Ad path="/138222292/CuboGenerico_300x250" id="div-gpt-ad-1623355430247-0" format="RECTANGLE"/></div> ]
                        ) 
                        :  ReactHtmlParser('<p>'+p + '</p>') 
                    ))}
                </div>
            </div>
            <OpinionSlider/>
            <LaCorte />
        </Template>
    )
}

export async function getServerSideProps({ params }) {
    const { fecha, slug } = params
    const nota = fecha + "/" +  slug
    const res = await fetch('http://da21w.e-tlaxcala.mx/index.php/opinion/' + nota)
    const data = await res.json()
    return {
        props: {
            data: data
        }
    }
}

export default Opinion