import React, { useEffect, useState } from 'react'
import { get } from '../utilities/clientHttp'
import style from '../styles/apiPood.module.css'

export const ApiApod = () => {
    const [nasa, setNasa] = useState([])

        useEffect(() => {
            get("/planetary/apod?api_key=").then(data => {
                setNasa(data)
            })
        }, [])

    console.log(nasa)
    return (
        <>

            <div className= {style.apod}>
                <img src={nasa.url} alt={nasa.title} className= {style.imgIpod}/>
                <div className= {style.desc}>
                    <h1>{nasa.title}</h1>
                    <p>{nasa.explanation}</p>
                </div>
            </div>



        </>
    )
}
