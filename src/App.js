import styles from "./App.module.css";
import React, { Fragment } from "react";
import UserInput from "./components/UserInput/UserInput";
import EmailForm from "./components/EmailForm";


function App() {
  return (
    <Fragment>
      <div className={styles["main-div"]}>
      <h4>Facebook Video Dwonloader</h4>
{/*         
        <EmailForm/> */}
        <UserInput/>
      </div>
     
    </Fragment>
  );
}

export default App;
