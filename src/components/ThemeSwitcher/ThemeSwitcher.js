import React from "react";
import styled from "styled-components";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import PropTypes from "prop-types";

const ThemeSwitcherButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const StyledMoon = styled(NightsStayIcon)`
  && {
    color: ${({ theme }) => theme.button_primary_color};
    ${({ $size, theme }) =>
      ($size === "small" && `font-size: ${theme.button_icon_size_small};`) ||
      ($size === "large" && `font-size: ${theme.button_icon_size_large}; `) ||
      `font-size: ${theme.button_icon_size_medium};`}
  }
`;

const StyledSun = styled(Brightness5Icon)`
  && {
    color: ${({ theme }) => theme.button_primary_color};
    ${({ $size, theme }) =>
      ($size === "small" && `font-size: ${theme.button_icon_size_small};`) ||
      ($size === "large" && `font-size: ${theme.button_icon_size_large}; `) ||
      `font-size: ${theme.button_icon_size_medium};`}
  }
`;

// eslint-disable-next-line react/prop-types
export const SwitchButton = ({ isDarkTheme, onClick, $size }) => {
  return (
    <ThemeSwitcherButton onClick={onClick}>
      <div>{!isDarkTheme ? <StyledMoon $size={$size} /> : <StyledSun $size={$size} />}</div>
    </ThemeSwitcherButton>
  );
};

SwitchButton.propTypes = {
  $size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  isDarkTheme: PropTypes.bool.isRequired,
};

SwitchButton.defaultProps = {
  $size: "medium",
  onClick: undefined,
};
