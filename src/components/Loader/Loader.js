import Lottie from 'react-lottie';
import animationData from '../../assets/animations/loader.json';
import { Modal } from '@material-ui/core';
import styled from 'styled-components'
import React from 'react'
import PropTypes from "prop-types";


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

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

    div {
      background: rgba(2, 31, 54, 1) !important;
    }
  }
`;

export function Loader({isLoading}) {
  return(
    <StyledModal open={isLoading}>
      <Lottie 
        height={400}
        width={400}
        options={defaultOptions}
        isStopped={false}
        isPaused={false}
        speed={3}
      /> 
    </StyledModal>

  );
}


Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};