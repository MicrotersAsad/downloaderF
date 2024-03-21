import styles from "./App.module.css";
import React, { Fragment } from "react";
import UserInput from "./components/UserInput/UserInput";


function App() {
  return (
    <Fragment>
      <div className={styles["main-div"]}>
        
        <UserInput />
      </div>
     
    </Fragment>
  );
}

export default App;
