import React from 'react';

const AppContext = React.createContext();

const AppContextProvider = (props) => {
  return (
    <AppContext.Provider value="">
      { props.children }
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };