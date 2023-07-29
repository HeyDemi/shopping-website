import { Link } from 'react-router-dom'
import React from 'react'
import './Card.scss'

export default function Card({ item }) {
  return (
    <Link className="link" to={`product/${item.id}`}>
      <div className='card'>
        <div className='image'>
          {item.attributes?.isNew && <span>New</span>}
          <img src={'http://localhost:1337' + item.attributes?.img.data?.attributes.url} alt='' />
        </div>
        <h2>{item.attributes?.title}</h2>
        <div className='price'>
          <h3>￥{item.oldPrice || Math.round(item.attributes?.price*1.5)}</h3>
          <h3>￥{item.attributes?.price}</h3>
        </div>
      </div>
    </Link>
  )
}
