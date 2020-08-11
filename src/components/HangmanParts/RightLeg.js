import React from "react";
import styled from "styled-components";

const StyledRightLeg = styled.div`
  position: absolute;
  left: 190px;
  top: 410px;
`;

const RigthLeg = () => {
  return (
    <StyledRightLeg>
      <svg
        width="72"
        height="146"
        viewBox="0 0 72 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="9.3175"
          width="36"
          height="141.204"
          transform="rotate(-15 0 9.3175)"
          fill="#247B2D"
        />
      </svg>
    </StyledRightLeg>
  );
};

export default RigthLeg;
