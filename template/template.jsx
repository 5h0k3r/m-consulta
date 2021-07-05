import React, { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Template({children}){
    useEffect(() => {
        const a = document.createElement("script");
        a.setAttribute('type', 'text/javascript');
        a.innerHTML = `var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-35299520-5']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();`
        document.head.appendChild(a)
    })
    return(
        <div className="pt-5">
            <Head>
                <title>m.e-consulta.com | Periódico Digital de Noticias de Puebla | México 2021</title>
                <meta name="description" content="Periódico Digital de Noticias de Puebla" />
                <link rel="apple-touch-icon preconnect" sizes="57x57" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon preconnect" sizes="60x60" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon preconnect" sizes="72x72" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon preconnect" sizes="76x76" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon preconnect" sizes="114x114" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon preconnect" sizes="120x120" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon preconnect" sizes="144x144" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon preconnect" sizes="152x152" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon preconnect" sizes="180x180" href="https://www.e-consulta.com/assets/images/favicons/apple-icon-180x180.png"/>
                <link rel="icon preconnect" type="image/png" sizes="192x192"  href="https://www.e-consulta.com/assets/images/favicons/android-icon-192x192.png"/>
                <link rel="icon preconnect" type="image/png" sizes="32x32" href="https://www.e-consulta.com/assets/images/favicons/favicon-32x32.png"/>
                <link rel="icon preconnect" type="image/png" sizes="96x96" href="https://www.e-consulta.com/assets/images/favicons/favicon-96x96.png"/>
                <link rel="icon preconnect" type="image/png" sizes="16x16" href="https://www.e-consulta.com/assets/images/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="https://www.e-consulta.com/assets/images/favicons/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="https://www.e-consulta.com/assets/images/favicons/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff" />
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet " media="screen and (max-width: 600px)" />
                <link rel="stylesheet" href="/static/fontello-z/css/fontello.css" as="style" media="screen and (max-width: 600px)" />
            </Head>
            <Script>
                {`
                    var _comscore = _comscore || [];
                    _comscore.push({ c1: "2", c2: "16333908" });
                    (function() {
                      var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
                      s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
                      el.parentNode.insertBefore(s, el);
                    })();
                `}
            </Script>
            <noscript>
                <img src="https://sb.scorecardresearch.com/p?c1=2&c2=16333908&cv=2.0&cj=1" />
            </noscript>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 main-heading">
                        <div className="pt-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}