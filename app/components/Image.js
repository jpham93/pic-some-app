import React, { useState } from 'react';

export default ({ className, src }) => {
  const [hover, setHover] = useState(false);
  console.log(hover);
  return (
    <div
      className={ `${className} image-container` }
      onMouseEnter={ () => setHover(true) }
      onMouseLeave={ () => setHover(false) }
    >
      <img src={ src } className="image-grid" />
    </div>
  );
};