import React, { useContext, useEffect } from "react";
import { AppContextProvider, AppContext } from "./AppContext";
import CustomHeader from "./components/header";
import UserList from "./components/user_list";
import "./App.css";

// WELCOME!

function App() {
  const state = useContext(AppContext);

  useEffect(() => {
    state.setUsers(100);
  }, [state]);

  return (
    <AppContextProvider>
      <CustomHeader />
      <UserList />
    </AppContextProvider>
  );
}

export default App;
