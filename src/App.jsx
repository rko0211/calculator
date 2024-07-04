import styles from "./App.module.css";
import Display from "./components/Display";
import Buttoncontainer from "./components/Buttoncontainer";
import { useState } from "react";
function App() {
  // useState() function or react components returns an array
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    // console.log(typeof (calVal));
    if (buttonText === "Del") {
      let temcalVal = calVal;
      temcalVal = temcalVal.substring(0, temcalVal.length - 1);
      setCalVal(temcalVal);
    }
    else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    }
    else if (buttonText === "C") {
      setCalVal("");
    }
    else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }
  return (

    <div className={styles.calculator}>
      <Display displayval={calVal}></Display>
      <Buttoncontainer onButtonClick={onButtonClick}></Buttoncontainer>

    </div>

  )
}

export default App
