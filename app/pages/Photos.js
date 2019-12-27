import React, { useContext } from "react";
import { AppContext } from '../context/appContext';
import { getClass } from '../utils';
import Image from '../components/Image';

export default (props) => {
  const { photos, setPhotos } = useContext(AppContext);
  const mapPhotos = photos.map(({ id, url, isFavorite }, index) => {
    return (
      <Image
        key={ id }
        id={ id }
        url={ url }
        className={ getClass(index) }
        isFavorite={ isFavorite }
        photos={ photos }
        setPhotos={ setPhotos }
      />);
  });

  return (
    <main className="photos">
      { mapPhotos }
    </main>
  );
};