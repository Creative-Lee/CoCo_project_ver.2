import React from "react";
import { Outlet } from "react-router-dom";

import { TopBannerAds, TopNav, BottomNav, OffCanvasForMobile, Footer } from './layoutComponents/index'

export default function Layout({
  isTopBannerAdsShow,
  setIsTopBannerAdsShow,

  isBottomNavShow,
  setIsBottomNavShow,
  setIsMouseOnHeader,
  hideBottomNav,
  setTopNavOpenTap,  

  topNavActiveTap,
  setTopNavActiveTap,
  setBottomNavActiveTap, 

  coconut,jjongLogo2,cartIcon,searchIcon,
  
  isAuthenticated, signOutAccount,

  topNavOpenTap,
  initialScroll,
  bottomNavActiveTap,

  isOffCanvasShow,
  setIsOffCanvasShow,

  instaIcon
}){
  const headerInlineStyle = {height : "80px", marginBottom: "80px"}

  return(
    <div className="App">
      {        
        isTopBannerAdsShow === true &&
        <TopBannerAds setIsTopBannerAdsShow={setIsTopBannerAdsShow}/>
      }

      <header className="header" 
      style={isBottomNavShow === false ? headerInlineStyle : null }
      onMouseOver={()=>{ setIsBottomNavShow(true); setIsMouseOnHeader(true);}}
      onMouseOut={()=>{ hideBottomNav() ; setIsMouseOnHeader(false);}}
      onMouseLeave={()=>{ setTopNavOpenTap(false)}}>
        <TopNav 
        isBottomNavShow={isBottomNavShow}    
        setIsBottomNavShow={setIsBottomNavShow}
        setBottomNavActiveTap={setBottomNavActiveTap} 
        setIsOffCanvasShow={setIsOffCanvasShow} 
        topNavActiveTap={topNavActiveTap}
        setTopNavActiveTap={setTopNavActiveTap}
        coconut={coconut}     
        jjongLogo2={jjongLogo2}
        cartIcon={cartIcon}
        searchIcon={searchIcon}
        initialScroll={initialScroll}
        setTopNavOpenTap={setTopNavOpenTap}
        isAuthenticated={isAuthenticated}
        signOutAccount={signOutAccount}/>

        <BottomNav 
        bottomNavActiveTap={bottomNavActiveTap}
        setBottomNavActiveTap={setBottomNavActiveTap} 
        isBottomNavShow={isBottomNavShow}
        setIsBottomNavShow={setIsBottomNavShow}
        topNavActiveTap={topNavActiveTap} 
        setTopNavActiveTap={setTopNavActiveTap}
        initialScroll={initialScroll}
        topNavOpenTap={topNavOpenTap}/>
      </header>

      <OffCanvasForMobile 
        isOffCanvasShow={isOffCanvasShow} 
        setIsOffCanvasShow={setIsOffCanvasShow}
      />

      <main>
        <Outlet/>
      </main>

      <Footer instaIcon={instaIcon}/>
    </div>
  )
}