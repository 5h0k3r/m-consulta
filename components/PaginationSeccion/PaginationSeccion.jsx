import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import {Bling as GPT} from 'react-gpt';

GPT.enableSingleRequest();

export default function PaginationSeccion({slug}){
    const [pageIndex, setPageIndex] = useState(0);
    const { data } = useSWR(process.env.eConsultaSeccion+slug+"/"+pageIndex)
    if (!data) return (<div className="d-flex justify-content-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>)
    const pNota = data.data.slice(0, 1)
    const eliminado = data.data.shift()
    const notas = data.data
    return(
        <>
            {pNota.map((notap, index) =>(
                <Link href={`/${notap.alias}`} key={index}>
                    <div className="card card-main-note text-white mb-2 mt-2 " >
                        <Image src={notap.uri.replace('public://', process.env.eConsultaImagenes)} className="card-img card-img-main-note lazyload" alt={notap.title} layout='fill' />
                        <div className="card-img-overlay card-title-main-note__article">
                            <h3 className="card-title-main-note__title">{notap.title}</h3>
                        </div>
                    </div>
                </Link>
            ))}
            <div id="div-gpt-ad-1623608534630-0" className="text-center mt-2 mb-2">
                <GPT
                    adUnitPath="/138222292/Generico_320x50"
                    slotSize={[320, 50]}
                />
            </div>
            <ul className="content-secciones">
                {notas.map((article, index) =>(
                    <li key={index}>
                        {index == 3 ? 
                        (
                            [
                                <Link href={`/${article.alias}`}>
                                    <article className="secciones new new-summary invert" key={article.nid}>
                                        <figure className="news-media">
                                            <a>
                                                <Image className="lazyload" src={article.uri.replace('public://', process.env.eConsultaImagenes)} alt={article.title} layout='fill' />
                                            </a>
                                        </figure>
                                        <div className="news-data">
                                            <h1 className="news-title">{article.title}</h1>
                                        </div>
                                        <div className="author-fecha-seccion nota-autor byline">
                                            {
                                                article.author? (
                                                    <>
                                                        <Link href={'/autor/' + article.author}>{article.author}</Link> / {article.created}
                                                    </>
                                                ): (
                                                    <>
                                                        Staff / {article.created}
                                                    </>
                                                )
                                            }
                                        </div>
                                    </article>
                                </Link>,
                                <div id="div-gpt-ad-1623519879945-0" className="text-center mt-2 mb-2">
                                    <GPT
                                        adUnitPath="/138222292/GenericoDobleCubo_300x600"
                                        slotSize={[300, 600]}
                                    />
                                </div>
                            ]
                        ) : (
                            <Link href={`/${article.alias}`}>
                                <article className="secciones new new-summary invert" key={article.nid}>
                                    <figure className="news-media">
                                        <a>
                                            <Image className="lazyload" src={article.uri.replace('public://', process.env.eConsultaImagenes)} alt={article.title} layout='fill' />
                                        </a>
                                    </figure>
                                    <div className="news-data">
                                        <h1 className="news-title">{article.title}</h1>
                                    </div>
                                    <div className="author-fecha-seccion nota-autor byline">
                                        {
                                            article.author? (
                                                <>
                                                    <Link href={'/autor/' + article.author}>{article.author}</Link> / {article.created}
                                                </>
                                            ): (
                                                <>
                                                    Staff / {article.created}
                                                </>
                                            )
                                        }
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