import React from 'react'
import './List.scss'
import Card from '../Card/Card.js'
import useFetch from '../../hooks/useFetch'

export default function List({ subCat, maxPrice, sort, catId }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][catrgories][id]=${catId}${subCat.map(
      item => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  
  return (
    <div className='list'>
      {loading
          ? 'loading'
          : data?.map(item => (
            <Card item={item} key={item.id} />
          ))
      }
    </div>
  )
}
