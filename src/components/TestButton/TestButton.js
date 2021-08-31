import styled from "styled-components";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

export const PrimaryButton = styled(Button)`
  && {
    background: ${({ $buttonType, theme }) => ($buttonType === "cancel" ? theme.button_secondary_color : theme.button_primary_color)};
    color: ${({ theme, $buttonType }) => ($buttonType === "cancel" ? theme.button_secondary_text_color : theme.button_primary_text_color)};
    padding: 0.5rem;
    min-width: 6rem;
    transition: 0.2s transform;
    ${({ $size, theme }) =>
      ($size === "small" && `font-size: ${theme.button_font_size_small}; padding: ${theme.button_padding_small};`) ||
      ($size === "large" && `font-size: ${theme.button_font_size_large}; padding: ${theme.button_padding_large};`) ||
      `font-size: ${theme.button_font_size_medium}; padding: ${theme.button_padding_medium};`}

    &:hover {
      background: ${({ $buttonType, theme }) => ($buttonType === "cancel" ? theme.button_secondary_hover : theme.button_primary_hover)};
    }
  }
`;

export function TestButton({ $buttonType, $size, children, onClick }) {
  return (
    <PrimaryButton $buttonType={$buttonType} $size={$size} onClick={onClick}>
      {children}
    </PrimaryButton>
  );
}

PrimaryButton.propTypes = {
  $buttonType: PropTypes.string,
  $size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.string,
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  $buttonType: "",
  $size: "medium",
  children: "Default",
  onClick: undefined,
};
