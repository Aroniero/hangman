import React from "react";
import styled from "styled-components";

const StyledRightFoot = styled.div`
  position: absolute;
  left: 224px;
  top: 541px;
`;

const RightFoot = () => {
  return (
    <StyledRightFoot>
      <svg
        width="62"
        height="31"
        viewBox="0 0 62 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="15.2703"
          width="59"
          height="15.5493"
          rx="6"
          transform="rotate(-15 0 15.2703)"
          fill="black"
        />
      </svg>
    </StyledRightFoot>
  );
};

export default RightFoot;
