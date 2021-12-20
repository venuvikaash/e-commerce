import React from 'react';
import {ReactComponent as Cart} from '../assets/img/icon-cart.svg'
import Avatar from '../assets/img/image-avatar.png'

const Navbar = () => {
    return (
        <div className="d-flex my-3 justify-content-between">
            <div className="bit-2 d-flex">
                <h2 className='fontFamily'>sneakers</h2>
                <ul className='navbar-nav d-flex flex-row align-items-center list-space'>
                    <li className='nav-item'>Collections</li>
                    <li className='nav-item'>Mens</li>
                    <li className='nav-item'>Womens</li>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Contact</li>
                </ul>
            </div>  
            <div className='bit-3 d-flex flex-row align-items-center'>
                <div className='mx-5'>
                    <Cart fill='hsl(219, 9%, 45%)' />
                </div>
                <div>
                    <img src={Avatar} alt='' className='w-40' />
                </div>
            </div>         
        </div>
    )
}

export default Navbar;