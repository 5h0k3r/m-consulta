import React from 'react'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import Template from '../template/template'
import Script from 'next/script'

function Page({data}){
    const content = data.response
    const html = content.body_value
    return(
        <Template>
            <Head>
                <title>e-consulta.com</title>
            </Head>
            <Script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" strategy="beforeInteractive" />
            

                
            <div className="txtview text-justify note-body" id="body_note" >
                {ReactHtmlParser(html)}
            </div>
            
        </Template>
    )
}

export async function getServerSideProps({params}){
    const { slug } = params
    const page = "https://da21w.e-tlaxcala.mx/index.php/page"+"/"+slug
    const res = await fetch(page)
    const data = await res.json()
    return{
        props: {
            data: data
        }
    }
}

export default Page