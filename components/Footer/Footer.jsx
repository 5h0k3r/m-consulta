import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="row footer">
            <div className="col-md-12 col-xs-12">
                <div className="row pre-menu">
                    <div className="socials">
                        <span>
                            <Link  href="https://www.facebook.com/econsulta.noticias" rel="noopener" target="_blank">
                                <a><i className="socialNetwork icon-facebook-1"></i></a>
                            </Link> 
                        </span>
                        <span>
                            <Link href="https://twitter.com/e_consulta" target="_blank" rel="noopener">
                                <a><i className="socialNetwork icon-twitter"></i></a>
                            </Link> 
                        </span>
                        <span>
                            <Link href="https://www.youtube.com/user/videoeconsulta" target="_blank" rel="noopener">
                                <a><i className="socialNetwork icon-youtube-play"></i></a>
                            </Link>
                        </span>
                        <span>
                            <Link href="https://www.instagram.com/e_consulta/?hl=es-la" target="_blank" rel="noopener">
                                <a><i className="socialNetwork icon-instagram"></i></a>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>

            <hr className="linea"/>


            <div className="col-md-12 col-xs-12 ">
                
                <Image 
                    className="lazyload"
                    src="https://www.e-consulta.com/assets/images/logo_02.png"
                    width={270}
                    height={90}
                    alt="Logo e-consulta"
                />
                <div className="brand">Es una marca registrada, propiedad de 
                    <a href="http://contracorriente.lat/" target="__blank">
                         CONTRACORRIENTE
                    </a>
                </div>
            </div>
            <div className="col-md-12 col-xs-12">
                <hr className="linea"/>
                <Image
                    className="logo-3 lazyload"
                    src="https://www.e-consulta.com/assets/images/comscore-logo.png"
                    alt="Logo comscore footer"
                    width={250}
                    height={60}
                />
            </div>
        </div>
    )
}