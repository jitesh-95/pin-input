import React from "react";
import { useRef } from "react";
import { useState } from "react";
import CardInput from "./CardInput";

const SecondPin = ({ length, setCardValueHandler }) => {
  const [cardValue, setCardValue] = useState(new Array(length).fill(""));
  const [cardBoxex] = useState(new Array(length).fill(1));
  const cardRef = useRef([]);

  //functions
  const handleCardValue = (e, index) => {
    let value = e.target.value;
    cardValue[index] = value;
    setCardValue(cardValue);

    //setting ref to next input
    if (value.length === 5 && index < length - 1) {
      cardRef.current[index + 1].focus();
    }
    if (value.length === 5) {
      cardRef.current[index].className = "green";
    }
    if (value.length < 5) {
      cardRef.current[index].className = "red";
    }
    // setCardValueHandler(cardValue.join("-"));
  };

  const handleBackSpace = (e, index) => {
    let value = e.target.value;
    //setting ref to previous input

    if (value.length === 0 && index > 0) {
      cardRef.current[index - 1].focus();
    }
    if (value.length < 5) {
      cardRef.current[index].className = "red";
    }

    cardValue[index] = value;
    setCardValue(cardValue);
    setCardValueHandler('');
  };

  const handleSubmit = () => {
    for (let i = 0; i < length; i++) {
      if (cardRef.current[i].value.length !== 5) {
        // setCardValueHandler("")
        return cardRef.current[i].focus();
      }
    }
    return setCardValueHandler(cardValue.join("-"));
  };

  return (
    <>
      <div className="cardInputs">
        {cardBoxex.map((item, index) => (
          <CardInput
            key={index}
            changeHandler={(e) => handleCardValue(e, index)}
            backSpaceHandler={(e) => handleBackSpace(e, index)}
            ref={(elem) => {
              cardRef.current[index] = elem;
            }}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default SecondPin;
