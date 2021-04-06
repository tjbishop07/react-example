import React, { useState } from "react";
export const AppContext = React.createContext({
  users: [],
  setUsers: (amount) => {},
  clearUsers: () => {},
});
export const AppContextProvider = (props) => {
  const setUsers = (amount) => {
    fetch(`https://randomuser.me/api/?results=${amount}`)
      .then((response) => response.json())
      .then((data) => {
        setState({ ...state, users: data.results });
      });
  };

  const clearUsers = () => {
    setState({ ...state, users: [] });
  };

  const initState = {
    users: [],
    setUsers: setUsers,
    clearUsers: clearUsers,
  };

  const [state, setState] = useState(initState);

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};
export default AppContext;
