import Lottie from "react-lottie";
import animationData from "../../assets/animations/sad.json";
import { Modal } from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const StyledModal = styled(Modal)`
  && {
    position: absolute;
    width: auto;
    left: 0;
    right: 0;
    top: 0;
    right: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    

    div {
      h1 {
        color: white;
        margin-top: 3rem;
        text-align: center;
        pointer-events: none;
        border: none;
        outline: none;
      }
    }
  }
`;

export function ErrorLocation({ isError, setIsError, errorMessage }) {
  return (
    <StyledModal open={isError} onClick={setIsError}>
      <div>
        <Lottie height={400} width={400} options={defaultOptions} isStopped={false} isPaused={false} />
        <h1>{errorMessage}</h1>
      </div>
    </StyledModal>
  );
}
ErrorLocation.propTypes = {
  isError: PropTypes.bool.isRequired,
  setIsError: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
};
