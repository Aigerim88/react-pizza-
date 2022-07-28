import React, { useEffect, useState } from "react";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import "../scss/app.scss";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

export default function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const[sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating'
  })

  useEffect(() => {
    setisLoading(true)

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc' 
    const sortBy = sortType.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''

    fetch(`https://62c99e4bd9ead251e8be4eb3.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
    .then(res => res.json())
    .then(arr => {
        setItems(arr), 
        setisLoading(false)
      })    
      window.scrollTo(0,0 )
  }, [categoryId, sortType])

  return (
    <div className="container">
        <div className="content__top">
        <Categories value={categoryId}  onChangeCategory = {(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort = {(i) => setSortType(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
        {isLoading 
        ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
        : items.map(obj => <PizzaBlock {...obj} key={obj.id} />)
        }
        </div>
    </div>
  );
}