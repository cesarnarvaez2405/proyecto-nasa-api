import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/contentApod.module.css'

export const ContentApod = ({ apod }) => {
  return (
    <>

      <li className={style.contentApod}>
        <Link to={"/apod/date/" + apod.date}>
          <h1 className={style.tituloApod}>{apod.title}</h1>
          <img src={apod.url} alt={apod.title} className={style.imgApod} />
          <h1 className={style.tituloApod}>{apod.date}</h1>
        </Link>
      </li>

    </>
  )
}
