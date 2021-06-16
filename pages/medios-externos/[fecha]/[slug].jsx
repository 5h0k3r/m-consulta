import React from 'react'
import Template from '../../../template/template'
import ReactHtmlParser from 'react-html-parser'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Share = dynamic( () => import('../../../components/Share/Share'))

export default function MediosExternos({data}){
    console.log(data)
    const content = data.response
    return(
        <Template>
            <Head>
            </Head>
            <div className="row">

            </div>
            <div className={`row mx-2  ${content.SECCION.toLowerCase()}`}>
                <Share url={content.URL_ALIAS} title={content.title}/>
                <div className="separador mt-2">
                    <span className="nota-seccion">{content.SECCION}</span>
                </div>
                <div className="nota-title">
                    <h1>{content.title}</h1>
                </div>
                <div className="nota-autor byline">
                    Por {content.SECCION} | {content.created}
                </div>
                <div className="txtview text-justify note-body" id="body_note" >
                    {ReactHtmlParser(content.cuerpo)}
                </div>
            </div>
        </Template>
    )
}

export async function getServerSideProps({params}){
    const { fecha, slug } = params
    const nota = fecha+"/"+slug
    const res = await fetch(process.env.eConsultaMediosExternos+nota)
    const data = await res.json()
    return{
        props: {
            data: data
        }
    }
}