import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

export default function Product() {
  const id = useParams().id
  const [selectImg, SetSelectImg] = useState("img")
  const [quantity, setQuantity] = useState(1)
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const dispatch = useDispatch()

  return (
    <div className='product'>
      {
        loading ? 'loading' : (
          <>
            <div className='left'>
              <div className='images'>
                <img src={'http://localhost:1337' + data?.attributes?.img.data.attributes.url} alt='' onClick={e => SetSelectImg("img")} />
                <img src={'http://localhost:1337' + data?.attributes?.img2.data.attributes.url} alt='' onClick={e => SetSelectImg("img2")} />
              </div>
              <div className='mainImg'>
                <img src={'http://localhost:1337' + data?.attributes?.[selectImg]?.data?.attributes?.url} alt='' />
              </div>
            </div>
            <div className='right'>
              <h1>{data.attributes?.title}</h1>
              <span className='price'>{data.attributes?.price}</span>
              <p>It's a information about product ....</p>
              <div className='count'>
                <button onClick={() => setQuantity(pre => pre === 1 ? 1 : pre - 1)}>-</button>
                {quantity}
                <button onClick={() => setQuantity(pre => pre + 1)}>+</button>
              </div>
              <div className='button'>
                <button className='add' onClick={() => dispatch(addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  img: 'http://localhost:1337'+ data.attributes.img.data.attributes.url,
                  price: data.attributes.price,
                  quantity,
                }))}>
                  <AddShoppingCartIcon /> 添加至购物车
                </button>
                <button className='favorite'>
                  <StarIcon /> 添加至收藏
                </button>
              </div>
              <div className='info'>
                <span>Brand: Uniqlo</span>
                <span>Product Type: Tank Top</span>
                <span>Tag: Summer, Women, Top</span>
              </div>
              <hr />
              <div className='details'>
                <span>description</span>
                <hr />
                <span>more information</span>
                <hr />
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}
