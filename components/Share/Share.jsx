import React from 'react'
import Link from 'next/link'

export default function Share({ url, title}) {

    return(
        <div className="social-media mb-2 mt-2">
            <div className="social-element">
            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank">
                <span className="face" style={{width: '25%'}}>
                <i className="icon-facebook-1"></i>
                </span>
            </Link>
            </div>
            <div className="social-element">
            <Link href={`https://twitter.com/intent/tweet?text=${encodeURI(title)}&url=${encodeURI('https://www.e-consulta.com/' + url)}&via=e_consulta`} target="_blank">
                <span className="twit" style={{width: '25%'}}>
                <i className="icon-twitter"></i>
                </span>
            </Link>
            </div>
            <div className="social-element">
            <Link href={`whatsapp://send?text=${encodeURI(title)} - [Leer] ${'https://www.e-consulta.com/' + url}`} data-action="share/whatsapp/share">
                <span className="whats" style={{width: '25%'}}>
                <i className="icon-whatsapp"></i>
                </span>
            </Link>
            </div>
            <div className="social-element">
            <Link href={`tg://msg_url?url=${'https://www.e-consulta.com/' + url}`} target="_blank">
                <span className="tele" style={{width: '25%'}}>
                <i className="icon-telegram"></i>
                </span>
            </Link>
            </div>
        </div>   
    )
}
