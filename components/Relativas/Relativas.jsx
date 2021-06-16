import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Relativas({rel}){
    return(
        <>
            {rel.map((item, index) => (
                <div className="r-el pt-4" key={index}>
                    <Link href={'/' + item.alias}>
                        <a>
                            <div className="r-image text-center">
                                <Image className="lazyload" src={item.img_uri.replace('public://', process.env.eConsultaImagenes)} width={300} height={200} alt={ item.title }/>
                            </div>
                            <div className="r-title">{item.title}</div>
                        </a>
                    </Link>
                    <div className="r-space"></div>
	            </div>
            ))}
        </>
    )
}