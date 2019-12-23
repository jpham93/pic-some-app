import React, { useState } from 'react';

const AppContext = React.createContext();

const AppContextProvider = (props) => {
  const [photos, setPhotos] = useState([]);

  return (
    <AppContext.Provider value={ photos }>
      { props.children }
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };