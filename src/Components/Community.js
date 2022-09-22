import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Community({
  setTopNavActiveTap,
  setBottomNavActiveTap,
}) {
  const { community_category_param } = useParams();

  const category = {
    following: (
      <>
        <span></span>
      </>
    ),

    picture: (
      <>
        <span></span>
      </>
    ),

    event: (
      <>
        <span></span>
      </>
    ),
  };

  useEffect(() => {
    setTopNavActiveTap('community');
    setBottomNavActiveTap(community_category_param);
  });

  return (
    <div>
      <h4></h4>
      {category[community_category_param]}
    </div>
  );
}
