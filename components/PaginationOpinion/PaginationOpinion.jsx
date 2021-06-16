import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import {Bling as GPT} from 'react-gpt';

export default function PaginationOpinion(){
    const [pageIndex, setPageIndex] = useState(0);
    const { data } = useSWR(process.env.eConsultaOpinionList+"/"+pageIndex)
    if (!data) return (<div className="d-flex justify-content-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>)
    return(
        <>
            <div id="div-gpt-ad-1623608534630-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/Generico_320x50"
                    slotSize={[320, 50]}
                />
            </div>
            <nav aria-labelledby="Page navigation pagination-seccion-opinion" className="pagination-seccion-opinion">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${pageIndex <= 0 ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => setPageIndex(pageIndex - 1)}>Anterior</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => setPageIndex(pageIndex + 1)}>Siguiente</a>
                    </li>
                </ul>
            </nav>
            
            <ul className="content-secciones">
                {data.data.map((article, index) =>(
                    <li key={index}>
                        {index == 5 ?
                        (
                            [<Link href={`/${article.url_alias}`}>
                            <article className="secciones new new-summary invert" key={article.nid}>
                                <figure className="news-media">
                                    <a>
                                        <Image className="lazyload" src={article.img_url.replace('public://', process.env.eConsultaImagenes)} alt={article.title} layout='fill' />
                                    </a>
                                </figure>
                                <div className="news-data">
                                    <h1 className="news-title">{article.title}</h1>
                                </div>
                                <div className="author-fecha-seccion nota-autor byline">
                                    <Link href={'/autores/' + article.autor}>{article.autor}</Link>
                                </div>
                            </article>
                        </Link>, <div id="div-gpt-ad-1623519879945-0" className="text-center mt-2 mb-2">
                                    <GPT
                                        adUnitPath="/138222292/GenericoDobleCubo_300x600"
                                        slotSize={[300, 600]}
                                    />
                                </div>]
                        )
                        :
                        (
                            <Link href={`/${article.url_alias}`}>
                                <article className="secciones new new-summary invert" key={article.nid}>
                                    <figure className="news-media">
                                        <a>
                                            <Image className="lazyload" src={article.img_url.replace('public://', process.env.eConsultaImagenes)} alt={article.title} layout='fill' />
                                        </a>
                                    </figure>
                                    <div className="news-data">
                                        <h1 className="news-title">{article.title}</h1>
                                    </div>
                                    <div className="author-fecha-seccion nota-autor byline">
                                        <Link href={'/autores/' + article.autor}>{article.autor}</Link>
                                    </div>
                                </article>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
            <nav aria-labelledby="Page navigation pagination-seccion-opinion" className="pagination-seccion-opinion">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${pageIndex <= 0 ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => setPageIndex(pageIndex - 1)}>Anterior</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" onClick={() => setPageIndex(pageIndex + 1)}>Siguiente</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}