import React from "react";
import { forwardRef } from "react";

const CardInput = forwardRef(({ changeHandler, backSpaceHandler }, ref) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 8) {
      backSpaceHandler(e);
    } else {
      changeHandler(e);
    }
  };

  return (
    <>
      <input ref={ref} onKeyUp={handleKeyUp} minLength={5} maxLength={5} />
    </>
  );
});

export default CardInput;
