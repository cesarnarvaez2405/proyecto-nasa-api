import React, { useEffect, useState } from 'react'
import { get } from '../utilities/clientHttp'
import { ContentApod } from './contentApod'
import style from '../styles/listadosApod.module.css'

export const ListadosApod = () => {

  const [ApodList, setApodList] = useState([])

  useEffect(() => {

    get("/planetary/apod?count=12&api_key=").then(data => {
      setApodList(data)
    })

  }, [])

  console.log(ApodList)

  return (
    <>

      <ul className= {style.listadosApod} >
        {ApodList.map((apod) =>
          <ContentApod key={apod.date} apod ={apod}/>
        )}
      </ul>


    </>
  )
}
