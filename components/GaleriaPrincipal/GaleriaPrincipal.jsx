import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Axios from 'axios'
import Slider from "@bit/akiran.react-slick.slider"

export default function MainNote(){
    const [notaPrincipal, setNotaPrincipal] = useState([]);
    const [galeria, setGaleria] = useState({response: []});
    useEffect(() =>{
        Axios({
            url: process.env.eConsultaMainNota
        })
        .then((response) =>{
            setNotaPrincipal(response.data.response.slice(0, 1));
            const eliminado = response.data.response.shift();
            setGaleria(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [setNotaPrincipal]);
    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        rows: 1,
        slidesPerRow: 2,
        lazyLoad: true,
        arrows: true
    }
    return(
        <>
            {notaPrincipal.map((notap, index) =>(
                notap.external_link ? (
                    <Link href={`/${notap.external_link}`} key={index}>
                        <div className="card card-new-galery">
                            <div className="new-galery-img">
                                <Image src={notap.external_img_uri.replace('public://', process.env.eConsultaImagenPrincipal)} className="new-galery card-img card-img-top card-img-main-note lazyload" alt={notap.title} layout='fill' placeholder="blur" />
                            </div>
                            <div className="card-body card-title ">
                                <h5 className="card-title text-center font-weight">{notap.title}</h5>
                            </div>
                        </div>
                    </Link>
                ) : (
                    <Link href={`/${notap.alias}`} key={index}>
                        <div className="card card-new-galery">
                            <div className="new-galery-img">
                                <Image src={notap.img_uri.replace('public://', process.env.eConsultaImagenPrincipal)} className="new-galery card-img card-img-top card-img-main-note lazyload" alt={notap.title} layout='fill' />
                            </div>
                            <div className="card-body card-title ">
                                <h5 className="card-title text-center font-weight">{notap.title}</h5>
                            </div>
                        </div>
                    </Link>
                )
            ))}
            <div className="row galeria-s">
                <Slider {...setting}>
                    {galeria.response.map((nota, index) =>(
                        nota.external_link ? (
                            <Link href={`/${nota.external_link}`} key={index} >
                                <div className="card card-first-slider text-white" >
                                    <Image src={nota.external_img_uri.replace('public://', process.env.eConsultaImagenSecundaria)} className="new-galery card-img card-img-top card-img-galeria lazyload" alt={nota.title} layout='fill' />
                                    <div className="card-img-overlay card-title-first-slider__article">
                                        <h2 className="card-title card-title-first-slider__title">{nota.title}</h2>
                                    </div>
                                </div>
                            </Link>
                        ): (
                            <Link href={`/${nota.alias}`} key={index} >
                                <div className="card card-first-slider text-white" >
                                    <Image src={nota.img_uri.replace('public://', process.env.eConsultaImagenSecundaria)} className="new-galery card-img card-img-top card-img-galeria lazyload" alt={nota.title} layout='fill' />
                                    <div className="card-img-overlay card-title-first-slider__article">
                                        <h2 className="card-title card-title-first-slider__title">{nota.title}</h2>
                                    </div>
                                </div>
                            </Link>
                        )
                    ))}
                </Slider>
            </div>
        </>
    )
}
