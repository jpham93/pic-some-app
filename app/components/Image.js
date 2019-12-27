import React, { useState } from 'react';

export default ({ className, src }) => {
  const [hover, setHover] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const plusIcon = <i className="ri-add-circle-line cart"></i>;
  const heartIconClass = isFavorite ? 'ri-heart-fill' : 'ri-heart-line';

  return (
    <div
      className={ `${className} image-container` }
      onMouseEnter={ () => setHover(true) }
      onMouseLeave={ () => setHover(false) }
    >
      <img src={ src } className="image-grid" />
      {
        hover &&
        <>
          { plusIcon }
          <i className={ `${heartIconClass} favorite` } onClick={ () => setFavorite(prevFav => !prevFav) }></i>
        </>
      }
    </div>
  );
};