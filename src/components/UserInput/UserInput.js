import style from "./UserInput.module.css";
import InputSection from "./InputSection";
import ResultSection from "../ResultSection/ResultSection";
import Loader from "../UI/Loader";
import { useState } from "react";
import Error from "../UI/Error";

const UserInput = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoader, setLoader] = useState(false);
  const [isServerOk, setServerOk] = useState(true);
  // Update the initial state of `title` to be a string instead of an array
  const [urlResult, setUrlResult] = useState({
    thumb: "",
    urls: [],
    title: "",
  });

  const userInputHandler = async (url, type) => {
    // Reset `urlResult` appropriately, with `title` as a string
    setUrlResult({
      thumb: "",
      urls: [],
      title: "",
    });

    let urls;
    switch (type) { // Using a switch statement for cleaner code
      case "yt":
        urls = "https://downlaoder-1.onrender.com/api/v1/yt";
        break;
      case "tw":
        urls = "https://downlaoder-1.onrender.com/api/v1/tw";
        break;
      case "fb":
        urls = "https://downlaoder-1.onrender.com/api/v1/fb";
        break;
      case "ig":
        urls = "https://downlaoder-1.onrender.com/api/v1/ig";
        break;
      default:
        // Handling unexpected types
        setErrorMessage("Invalid type provided.");
        setServerOk(false);
        return; // Exit early to avoid making a request
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ urls: url }),
    };

    if (type === "error") {
      setServerOk(false);
      setErrorMessage(url);
    } else {
      setLoader(true);
      try {
        const response = await fetch(urls, options);
        const result = await response.json();
        setLoader(false);
        if (result.status === "fail") {
          setServerOk(false);
          setErrorMessage(result.error);
        } else {
          setServerOk(true);
          setUrlResult(result); // Assuming `result` structure aligns with `urlResult`
        }
      } catch (err) {
        setLoader(false);
        setServerOk(false);
        setErrorMessage("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className={style["input-div"]}>
      
      <InputSection userUrls={userInputHandler} />
      {isLoader && <Loader />}
      {/* Use optional chaining and nullish coalescing operator for safer access */}
      {urlResult.urls?.length > 0 && isServerOk && (
        <ResultSection result={urlResult} />
      )}
      {!isServerOk && <Error error={errorMessage} />}
    </div>
  );
};

export default UserInput;
