import React, { useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppContextProvider = (props) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <AppContext.Provider value={ { photos } }>
      { props.children }
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };