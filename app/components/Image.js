import React, { useState } from 'react';

export default ({ className, src }) => {
  const [hover, setHover] = useState(false);
  const heartIcon = hover && <i className="ri-heart-line favorite"></i>;
  const plusIcon = hover && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={ `${className} image-container` }
      onMouseEnter={ () => setHover(true) }
      onMouseLeave={ () => setHover(false) }
    >
      <img src={ src } className="image-grid" />
      { heartIcon }
      { plusIcon }
    </div>
  );
};