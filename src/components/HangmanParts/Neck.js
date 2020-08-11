import React from "react";
import styled from "styled-components";

const StyledNeck = styled.div`
  position: absolute;
  left: 163px;
  top: 219px;
  z-index: -1;
`;

const Neck = () => {
  return (
    <StyledNeck>
      <svg
        width="30"
        height="22"
        viewBox="0 0 30 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="22" fill="#F0EDD4" />
      </svg>
    </StyledNeck>
  );
};

export default Neck;
