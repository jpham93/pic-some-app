import React, { useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppContextProvider = (props) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(res => res.json())
      .then(data => {
        const withFavProp = data.map(data => {
          data.isFavorite = false;
          return data;
        });
        setPhotos(withFavProp);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <AppContext.Provider value={ { photos, setPhotos } }>
      { props.children }
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };