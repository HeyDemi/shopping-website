import React, { useState } from 'react'
import './Slider.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



export default function Slider() {
    const [slider, setSlider] = useState(0)

    const data = [
        'https://images.pexels.com/photos/9811628/pexels-photo-9811628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/7679668/pexels-photo-7679668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/7668399/pexels-photo-7668399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]

    const preSlider = () => {
        setSlider(slider === 0 ? 2 : slider - 1)
    }
    const nextSlider = () => {
        setSlider(slider === 2 ? 0 : slider + 1)
    }

    return (
        <div className='slider'>
            <div className='container' style={{ transform: `translateX(-${slider * 100}vw)` }}>
                <div className='slide'>
                    <img src={data[0]} alt='' />
                </div>
                <div className='slide'>
                    <img src={data[1]} alt='' />
                </div>
                <div className='slide'>
                    <img src={data[2]} alt='' />
                </div>
            </div>
            <div className='icons'>
                <div className='icon' onClick={preSlider}>
                    <ArrowBackIosNewIcon />
                </div>
                <div className='icon' onClick={nextSlider}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    )
}
