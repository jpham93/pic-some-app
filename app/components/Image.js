import React, { useState } from 'react';

/**
 * Individual photo props is passed by Top Level component
 */
export default ({ className, url, id, isFavorite, photos, setPhotos }) => {
  const [hover, setHover] = useState(false);

  const clickFavorite = () => {
    const newPhotos = photos.map(photo => {
      if (photo.id === id) {
        photo.isFavorite = !isFavorite;
      }
      return photo;
    });
    setPhotos(newPhotos);
  };

  const plusIcon = <i className="ri-add-circle-line cart"></i>;
  const heartIconClass = isFavorite ? 'ri-heart-fill' : 'ri-heart-line';
  return (
    <div
      className={ `${className} image-container` }
      onMouseEnter={ () => setHover(true) }
      onMouseLeave={ () => setHover(false) }
    >
      <img src={ url } className="image-grid" />
      {
        hover &&
        <>
          { plusIcon }
          <i className={ `${heartIconClass} favorite` } onClick={ clickFavorite }></i>
        </>
      }
    </div>
  );
};