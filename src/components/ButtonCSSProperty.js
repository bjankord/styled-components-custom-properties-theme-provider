import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--button-background-color, #dedfe0);
  border-color: var(--button-border-color, #c8cacb);
  border-radius: var(--button-border-radius, 0.2142rem);
  border-style: solid;
  border-width: 1px;
  box-shadow: var(--button-box-shadow, none);
  color: var(--button-color, #1c1f21);
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: var(--button-font-size, 1rem);
  font-weight: var(--button-font-weight, 400);
  line-height: var(--button-line-height, 1.429);
  outline: none;
  padding-bottom: var(--button-vertical-padding, 0.286rem);
  padding-left: var(--button-horizontal-padding, 0.286rem);
  padding-right: var(--button-horizontal-padding, 0.286rem);
  padding-top: var(--button-vertical-padding, 0.286rem);
  margin: 0 0.286rem 0.286rem 0;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  touch-action: manipulation; /* Enable fast tap interaction in webkit browsers; see https://webkit.org/blog/5610/more-responsive-tapping-on-ios/ */
  user-select: none; /* Prevent text selection on buttons on mobile devices */
  white-space: normal;

  /* Remove the inner border and padding in Firefox. */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  &:focus {
    outline: none;
    background-color: var(--button-focus-background-color, #dedfe0);
    border-color: var(--button-focus-border-color, #c8cacb);
    box-shadow: var(--button-focus-box-shadow, 0 0 1px 3px rgba(76, 178, 233, 0.5), 0 0 7px 4px rgba(76, 178, 233, 0.35));
  }

  &:hover {
    background-color: var(--button-hover-background-color, #b9bbbc);
    color: var(--button-hover-color, #000);
  }

  &:active {
    outline: none;
    -webkit-tap-highlight-color: transparent;
    background-color: var(--button-active-background-color, #6f7477);
    border-color: var(--button-active-border-color, #52585b);
    color: var(--button-active-color, #fff);
  }
`;

const defaultProps = {
  type: 'button',
};

const Button = props => {
  const {
    text,
    type,
    children,
    ...customProps
  } = props;
  return (
    <StyledButton {...customProps} type={type}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = defaultProps;

export default Button;