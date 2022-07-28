import React from 'react'
import search from '../../assets/icons/search.svg'
import s from './Search.module.scss'

export default function Search() {
    return(
        <div className={s.root}>
            <img className={s.icon} src={search} alt='search'/>
            <input className={s.input} placeholder='Поиск пиццы...'/>
        </div>
    )
}