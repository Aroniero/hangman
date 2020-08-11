import React from "react";
import styled from "styled-components";

const StyledLeftFoot = styled.div`
  position: absolute;
  left: 71px;
  top: 541px;
`;

const LeftFoot = () => {
  return (
    <StyledLeftFoot>
      <svg
        width="62"
        height="31"
        viewBox="0 0 62 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="59"
          height="15.5493"
          rx="6"
          transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 61.0141 15.2703)"
          fill="black"
        />
      </svg>
    </StyledLeftFoot>
  );
};

export default LeftFoot;
