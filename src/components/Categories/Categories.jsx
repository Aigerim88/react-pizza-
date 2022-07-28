import React from "react";
import PropTypes from 'prop-types';

export default function Categories({value, onChangeCategory}) {  
  Categories.propTypes = {
    value: PropTypes.number,
    onChangeCategory: PropTypes.func,
  }

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return(
        <div className="categories">
              <ul>
                {categories.map((categoryName,i) => <li onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''} key={i}>{categoryName}</li>)}
              </ul>
            </div>
    )
}