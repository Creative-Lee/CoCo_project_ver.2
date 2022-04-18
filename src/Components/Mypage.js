import React,{useState , useEffect} from 'react'


export default function Mypage({setTopNavActiveTap, setBottomNavActiveTap}) {
  useEffect(()=>{
    setTopNavActiveTap('none')
    setBottomNavActiveTap('none')
  })

  return (
    <div>Mypage</div>
  )
}
