import React from 'react'
import './Category.scss'
import { Link } from 'react-router-dom'

export default function Category() {
    return (
        <div className='category'>
            {/* men New women Accessories shoes*/}
            <div className='col'>
                <div className='row'>
                    <img src='https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                    <Link className='link' to="/products/1">
                        <button>Sale</button>
                    </Link>
                </div>
                <div className='row'>
                    <img src='https://images.pexels.com/photos/16774771/pexels-photo-16774771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                    <Link className='link' to="/products/1">
                        <button>Men</button>
                    </Link>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <img src='https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                    <Link className='link' to="/products/1">
                        <button>New</button>
                    </Link>
                </div>
            </div>
            <div className='col-lg'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <img src='https://images.pexels.com/photos/15814603/pexels-photo-15814603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                            <Link className='link' to="/products/1">
                                <button>women</button>
                            </Link>
                        </div>
                    </div>
                    <div className='col'>
                        < div className='row'>
                            <img src='https://images.pexels.com/photos/16569312/pexels-photo-16569312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                            <Link className='link' to="/products/1">
                                <button>Accessories</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <img src='https://images.pexels.com/photos/3964579/pexels-photo-3964579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                    <Link className='link' to="/products/1">
                        <button>Shoes</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
