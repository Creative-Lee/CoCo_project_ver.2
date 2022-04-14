import React from 'react'
import {CloseButton} from 'react-bootstrap'

export default function TopBannerAds({
  setIsTopBannerAdsShow
}){

  return (
    <div className="top-banner">
      <CloseButton onClick={()=>{setIsTopBannerAdsShow(false)}}/> 
      <p className="top-banner__inner">🤑 Fromcoco 첫 구매라면 최대 10,000원 할인! 🤑</p>
      <p className="top-banner__inner-hidden">🤑 첫 구매라면 최대 10,000원 할인! 🤑</p>
    </div>
  )
}