import React, { useEffect } from 'react';

export default function Mypage({ setTopNavActiveTap, setBottomNavActiveTap }) {
  useEffect(() => {
    setTopNavActiveTap('none');
    setBottomNavActiveTap('none');
  });

  return <div></div>;
}
