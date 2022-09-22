import React, { useEffect } from 'react';

export default function Cs({ setTopNavActiveTap, setBottomNavActiveTap }) {
  useEffect(() => {
    setTopNavActiveTap('none');
    setBottomNavActiveTap('none');
  });

  return <div></div>;
}
