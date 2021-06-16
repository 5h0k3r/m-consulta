import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Header(){
    useEffect(() => {
        const mainNavigation = document.querySelector(".main-navigation");
        const overlay = mainNavigation.querySelector(".overlay");
        const toggler = mainNavigation.querySelector(".navbar-toggler");

        const openSideNav = () => mainNavigation.classList.add("active");
        const closeSideNav = () => mainNavigation.classList.remove("active");

        toggler.addEventListener("click", openSideNav);
        overlay.addEventListener("click", closeSideNav);
    });
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top main-navigation">
                <div className="container-fluid">
                    <a className="navbar-brand order-2 order-lg-1 mx-auto mr-lg-3 ml-3 ml-lg-0" href="#home">
                        <Image src={'/images/logo.png'} alt="Logo de e-consulta" className="prueba lazyload" width="136" height="35" />
                    </a>
                    <button className="navbar-toggler " type="button" aria-label="Justify">
                        <span className="navbar-toggler-icon" aria-hidden="true"></span>
                    </button>
                    <div className="overlay d-flex d-lg-none"></div>
                    <div className="order-lg-2 d-lg-flex w-100 sidebar pb-3 pb-lg-0 menu">
                        <ul className="navbar-nav mr-lg-auto mb-2 mb-lg-0">
                            <li className="nav-item link-item mt-4">
                                <Link href="/">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Inicio</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/gobierno">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Gobierno</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/seguridad">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Seguridad</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/politica">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Política</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/nacion">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Nación</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/salud">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Salud</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/opinion">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Opinión</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/educacion">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Educación</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/municipios">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Municipios</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/ciudad">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Ciudad</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/saludable">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Saludable</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/virales">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Virales</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/espectaculos">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Espectáculos</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/entretenimiento">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Entretenimiento</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/deportes">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Deportes</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/ciencia">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Ciencia</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/cultura">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Cultura</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/en-su-tinta">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">En su Tinta</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/elecciones">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Elecciones</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/mundo">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Mundo</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/medio-ambiente">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Medio Ambiente</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/universidades">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Universidades</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/economia">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Economía</a>
                                </Link>
                            </li>
                            <li className="nav-item link-item">
                                <Link href="/seccion/obiturario">
                                    <a className="nav-link px-3 px-lg-2 nav-link-header">Obiturario</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="socials text-center mb-4">
                            <span>
                                <Link  href="https://www.facebook.com/econsulta.noticias" rel="noopener" target="_blank">
                                    <a>
                                        <i className="socialNetwork icon-facebook-1"></i>
                                    </a>
                                </Link> 
                            </span>
                            <span>
                                <Link href="https://twitter.com/e_consulta" target="_blank" rel="noopener">
                                    <a><i className="socialNetwork icon-twitter"></i></a>
                                </Link> 
                            </span>
                            <span>
                                <Link href="https://www.instagram.com/e_consulta/?hl=es-la" target="_blank" rel="noopener">
                                    <a><i className="socialNetwork icon-instagram"></i></a>
                                </Link>
                            </span>
                            <span>
                                <Link href="https://www.youtube.com/user/videoeconsulta" target="_blank" rel="noopener">
                                    <a><i className="socialNetwork icon-youtube-play"></i></a>
                                </Link>
                            </span>
                        </div>
                        <p className="text-white m-3 text-center">
                        <b>e-consulta</b> es un periódico digital de <b>Consultoría Contracorriente.</b> <br />  
                        Nuestras oficinas se ubican en 20 Sur #2520. Col Bellavista y nuestro teléfono es 01 (222) 2.64.66.65
                        </p>
                    </div>
                </div>
                <div className="scrollmenu">
                    <Link href="/">
                        <a className="active">Inicio</a>
                    </Link>
                    <Link href="/seccion/gobierno">
                        <a>Gobierno</a>
                    </Link>
                    <Link href="/seccion/seguridad">
                        <a>Seguridad</a>
                    </Link>
                    <Link href="/seccion/politica">
                        <a>Política</a>
                    </Link>
                    <Link href="/seccion/nacion">
                        <a>Nación</a>
                    </Link>
                    <Link href="/seccion/salud">
                        <a>Salud</a>
                    </Link>
                    <Link href="/seccion/sociedad">
                        <a>Sociedad</a>
                    </Link>
                    <Link href="/opinion">
                        <a>Opinión</a>
                    </Link>
                    <Link href="/seccion/educacion">
                        <a>Educación</a>
                    </Link>
                    <Link href="/seccion/municipios">
                        <a>Municipios</a>
                    </Link>
                    <Link href="/seccion/ciudad">
                        <a>Ciudad</a>
                    </Link>
                    <Link href="/seccion/saludable">
                        <a>Saludable</a>
                    </Link>
                    <Link href="/seccion/virales">
                        <a>Virales</a>
                    </Link>
                    <Link href="/seccion/espectaculos">
                        <a>Espectáculos</a>
                    </Link>
                    <Link href="/seccion/entretenimiento">
                        <a>Entretenimiento</a>
                    </Link>
                    <Link href="/seccion/deportes">
                        <a>Deportes</a>
                    </Link>
                    <Link href="/seccion/ciencia">
                        <a>Ciencia</a>
                    </Link>
                    <Link href="/seccion/cultura">
                        <a>Cultura</a>
                    </Link>
                    <Link href="/seccion/en-su-tinta">
                        <a>En su Tinta</a>
                    </Link>
                    <Link href="/seccion/elecciones">
                        <a>Elecciones</a>
                    </Link>
                    <Link href="/seccion/mundo">
                        <a>Mundo</a>
                    </Link>
                    <Link href="/seccion/medio-ambiente">
                        <a>Medio Ambiente</a>
                    </Link>
                    <Link href="/seccion/universidades">
                        <a>Universidades</a>
                    </Link>
                    <Link href="/seccion/economia">
                        <a>Economía</a>
                    </Link>
                    <Link href="/seccion/obiturario">
                        <a>Obiturario</a>
                    </Link>
                </div>
            </nav>
        </>
    )
}