import "./App.css";
import Pin from "./components/Pin";
import { useState } from "react";
import SecondPin from "./components/card/SecondPin";

function App() {
  const [otp, setOtp] = useState("");
  const [cardValue, setCardValue] = useState('');

  return (
    <div className="App">
      <Pin
        length={4}
        setOtpHandler={(value) => {
          setOtp(value);
        }}
      />
      <h1>The Value of OTP is {otp}</h1>
      <hr />
      <div>
        <h1>Card</h1>
        <SecondPin
          length={4}
          setCardValueHandler={(val) => {
            setCardValue(val);
          }}
        />
        <h1>Cards Value is: {cardValue}</h1>
      </div>
    </div>
  );
}

export default App;
