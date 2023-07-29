import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

export default function Products() {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  const [selectSubCat, SetSelectSubCat] = useState([])

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    SetSelectSubCat(
      isChecked
        ? [...selectSubCat, value]
        : selectSubCat.filter(item => item !== value)
    )
  }
  const { data, loading, error } = useFetch(`/sub-categories?filters[categories][id][$eq]=${catId}`)

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h3>商品分类</h3>
          {data?.map(item =>
          (<div className='inputItem' key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
            <label htmlFor={item.id}>{item.attributes?.title}</label>
          </div>)
          )}
        </div>
        <div className='filterItem'>
          <h3>按价格筛选</h3>
          <div className='inputItem'>
            <span>0</span>
            <input type='range' min={0} max={1000} onChange={e => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h3>排序</h3>
          <div className='inputItem'>
            <input type='radio' name='priceSort' id='asc' value="asc" onChange={e => setSort('asc')}/>
            <label htmlFor='asc'>价格（升序）</label>
          </div>
          <div className='inputItem'>
            <input type='radio' name='priceSort' id='desc' value="desc" onChange={e => setSort("desc")} />
            <label htmlFor='desc'>价格（降序）</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img className="catImg" src='https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='背景图' />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCat={selectSubCat}/>
      </div>
    </div>
  )
}
