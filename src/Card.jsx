import React from 'react'
      

export const Card = ({img,title,price,text}) => {
  return (
    <article className="menu-item">
      <img
        src={img}
        alt="buttermilk pancakes"
        className="photo"
      />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <p className="item-text">
          {text}
        </p>
      </div>
    </article>
  )
}
