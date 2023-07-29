import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.scss'
import  Cart from '../Cart/Cart.js';

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='item'>
                        <Link className='link' to="/products/1">女装</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="/products/2">男装</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to="./products/3">童装</Link>
                    </div>
                </div>
                <div className='center'>
                    <Link className="link" to="/">Shopping</Link>
                </div>
                <div className='right'>
                    <div className='icons'>
                        <SearchIcon className='icon'/>
                        <Person2Icon className='icon'/>
                        <FavoriteIcon className='icon'/>
                    </div>
                    <div className="shoppingCart" onClick={ () => setOpen(!open)}>
                        <ShoppingCartIcon />
                        <span>99+</span>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}
