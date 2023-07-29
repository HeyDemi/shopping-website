import React from 'react'
import './Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { delToCart } from '../../redux/cartReducer';

export default function Cart() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products)
    const totalPrice = () => {
        let total = 0
        products.forEach(item => (total += item.quantity * item.price))
        return total.toFixed(2)
    }
    return (
        <div className='cart'>
            <h2>购物车</h2>
            {products?.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt='' />
                    <div className='detail'>
                        <p>{item.title}</p>
                        <div className='price'> {item.quantity} * ￥{item.price}</div>
                    </div>
                    <DeleteIcon className='delete' onClick={() => dispatch(delToCart(item.id))}/>
                </div>
            ))}
            <div className='total'>
                <span>总计</span>
                <span className='price'>￥{totalPrice()}</span>
            </div>
            <button>结算</button>
        </div>
    )
}
