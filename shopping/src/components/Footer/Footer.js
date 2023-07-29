import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='about'>
        <div className='top'>了解我们</div>
        <ul>
          <li>人才招聘</li>
          <li>网站故事</li>
        </ul>
      </div>
      <div className='cooperate'>
        <div className='top'>合作信息</div>
        <ul>
          <li>我要开店</li>
          <li>加入联盟</li>
        </ul>
      </div>
      <div className='help'>
        <div className='top'>帮助中心和购物指南</div>
        <ul>
          <li>付款帮助</li>
          <li>退款帮助</li>
          <li>退货与换货</li>
          <li>帮助中心</li>
        </ul>
      </div>
    </div>
  )
}
