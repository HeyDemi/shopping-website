import React from 'react'
import Slider from '../../components/Slider/Slider'
import './Home.scss'
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts'
import Category from '../../components/Category/Category'

export default function Home() {
  return (
    <div className='home'>
      <Slider />
      <FeatureProducts type="featured" />
      <Category />
      <FeatureProducts type="trending" />
    </div>
  )
}
