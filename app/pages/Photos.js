import React, { useContext } from "react";
import { AppContext } from '../context/appContext';
import { getClass } from '../utils';
import Image from '../components/Image';

export default (props) => {
  const { photos } = useContext(AppContext);
  console.log(photos);
  const mapPhotos = photos.map(({ id, url, isFavorite }, index) => (
    <Image key={ id } src={ url } className={ getClass(index) } />
  ));
  return (
    <main className="photos">
      { mapPhotos }
    </main>
  );
};