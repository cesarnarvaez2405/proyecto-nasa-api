import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../utilities/clientHttp'
import style from '../styles/ipodDetalles.module.css'

export const IpodDetalles = () => {
    const { ipodDate } = useParams()
    console.log(ipodDate)
    const [Ipod, setIpod] = useState(null)


    useEffect(() => {

        get("/planetary/apod?date=" + ipodDate + "&api_key=").then(data => {

            setIpod(data)

        })

    }, [ipodDate])

    if (!Ipod) {
        return null
    } else {
        return (
            <>

                <div className={style.ipodDetalles}>
                    <div className= {`${style.contenerImgTitle} ${style.col}`}><h1 className={style.titleIpodDetalles}>{Ipod.title}</h1>
                        <img className={`${style.imgIpodDetalles} ${style.col}`} src={Ipod.url} alt={Ipod.title}  />
                    </div>
                    <p className={style.explicacionIpodDetalles}>{Ipod.explanation}</p>
                    <h2 className={style.dateIpodDetalles}>{Ipod.date}</h2>

                </div>


            </>
        )
    }
}
