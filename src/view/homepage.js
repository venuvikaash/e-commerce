import React, { useState } from 'react';
import Navbar from './navbar';
import Thumbnail1 from '../assets/img/image-product-1-thumbnail.jpg'
import Thumbnail2 from '../assets/img/image-product-2-thumbnail.jpg'
import Thumbnail3 from '../assets/img/image-product-3-thumbnail.jpg'
import Thumbnail4 from '../assets/img/image-product-4-thumbnail.jpg'
import Product1 from '../assets/img/image-product-1.jpg'
// import Product2 from '../assets/img/image-product-2.jpg'
// import Product3 from '../assets/img/image-product-3.jpg'
// import Product4 from '../assets/img/image-product-4.jpg'
import {ReactComponent as Cart} from '../assets/img/icon-cart.svg'
import {ReactComponent as Plus} from '../assets/img/icon-plus.svg'
import {ReactComponent as Minus} from '../assets/img/icon-minus.svg'

const HomePage = () => {
    const [counter,setCounter] = useState({count:0});
    // console.log("counter",counter.count)

    const counterOnAdd = () => {
        setCounter({count: counter.count+1});
    }

    const counterOnSubtract = () => {
        setCounter({count: counter.count-1});
        if(counter.count === 0) setCounter({count: counter.count*0});
    }
    return (
        <div className='container'>
            <Navbar />
            <div>
                <div className='bit-2 d-flex flex-column mainContainer' >
                    <div className='d-flex flex-row justify-content-evenly'>
                        <div>
                            <div className='bit-2'>
                                <img src={Product1} alt='' className='imageThumbnailMain'/>
                             </div>
                            <div className='bit-2 d-flex justify-content-between flex-row my-5'>
                                <img src={Thumbnail1} alt='' className='imageThumbnailSmall' />
                                <img src={Thumbnail2} alt='' className='imageThumbnailSmall' />
                                <img src={Thumbnail3} alt='' className='imageThumbnailSmall' />
                                <img src={Thumbnail4} alt='' className='imageThumbnailSmall' />
                            </div>
                        </div>
                        <div className='w-50 d-flex flex-column justify-content-evenly'>
                            <div className='d-flex flex-column'>
                                <div className='heading1 my-2'>SNEAKER COMPANY</div>
                                <h1 className='mb-4'>Fall Limited Edition Sneakers</h1>
                                <p className='w-75 mb-3'>These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer </p>
                                <div className='d-flex flex-row align-items-center'>
                                    <h2>$ 125.00</h2>
                                    <div className='offer d-flex mx-2'>50%</div>
                                </div>
                                <p className='strikethrough'><del>$ 250.00</del></p>
                                <div className='d-flex flex-row'>
                                    <button className='counter'><Plus className='mx-1' onClick={counterOnAdd}/>{counter.count}<Minus className='mx-1' onClick={counterOnSubtract} /></button>
                                    <button className='addCart'><Cart fill='white' className='mx-3' />Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;