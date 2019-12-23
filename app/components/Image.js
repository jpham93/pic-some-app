import React from 'react';

export default ({ className, src }) => (
  <div className={ `${className} image-container` }>
    <img src={ src } className="image-grid" />
  </div>
);