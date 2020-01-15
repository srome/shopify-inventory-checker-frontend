import React from "react";
import styled, { keyframes } from "styled-components/macro";

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const LdsDualRing = styled.div`
  display: inline-block;
  width: 2em;
  height: 2em;
  margin: 0.5em;
  &:after {
    content: " ";
    display: block;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: 5px solid #fcf;
    border-color: #fcf transparent #fcf transparent;
    animation: ${spinner} 1.2s linear infinite;
  }
`;

const Loader = () => (
  <StyledLoader>
    Loading Products <LdsDualRing />
  </StyledLoader>
);

export default Loader;
