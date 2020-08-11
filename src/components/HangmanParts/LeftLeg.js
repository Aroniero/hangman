import React from "react";
import styled from "styled-components";

const StyledLeftLeg = styled.div`
  position: absolute;
  left: 95px;
  top: 410px;
`;

const LeftLeg = () => {
  return (
    <StyledLeftLeg>
      <svg
        width="72"
        height="146"
        viewBox="0 0 72 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="36"
          height="141.204"
          transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 71.3196 9.3175)"
          fill="#247B2D"
        />
      </svg>
    </StyledLeftLeg>
  );
};

export default LeftLeg;
