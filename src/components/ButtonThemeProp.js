import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.theme["button-background-color"]};
  border-color: ${props => props.theme["button-border-color"]};
  border-radius: ${props => props.theme["button-border-radius"]};
  border-style: solid;
  border-width: 1px;
  box-shadow: ${props => props.theme["button-box-shadow"]};
  color: ${props => props.theme["button-color"]};
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: ${props => props.theme["button-font-size"]};
  font-weight: ${props => props.theme["button-font-weight"]};
  line-height: ${props => props.theme["button-line-height"]};
  outline: none;
  padding-bottom: ${props => props.theme["button-vertical-padding"]};
  padding-left: ${props => props.theme["button-horizontal-padding"]};
  padding-right: ${props => props.theme["button-horizontal-padding"]};
  padding-top: ${props => props.theme["button-vertical-padding"]};
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
    background-color: ${props => props.theme["button-focus-background-color"]};
    border-color: ${props => props.theme["button-focus-border-color"]};
    box-shadow: ${props => props.theme["button-focus-box-shadow"]};
  }

  &:hover {
    background-color: ${props => props.theme["button-hover-background-color"]};
    color: ${props => props.theme["button-hover-color"]};
  }

  &:active {
    outline: none;
    -webkit-tap-highlight-color: transparent;
    background-color: ${props => props.theme["button-active-background-color"]};
    border-color: ${props => props.theme["button-active-border-color"]};
    color: ${props => props.theme["button-active-color"]};
  }
`;

StyledButton.defaultProps = {
  theme: {
    'button-backgroundColor': '#dedfe0',
    'button-border-color': '#c8cacb',
    'button-border-radius': '0.2142rem',
    'button-box-shadow': 'none',
    'button-color': '#1c1f21',
    'button-font-size': '1rem',
    'button-font-weight': '400',
    'button-line-height': '1.429',
    'button-vertical-padding': '0.286rem',
    'button-horizontal-padding': '0.286rem',
    'button-focus-background-color': '#dedfe0',
    'button-focus-border-color': '#c8cacb',
    'button-focus-box-shadow': '0 0 1px 3px rgba(76, 178, 233, 0.5), 0 0 7px 4px rgba(76, 178, 233, 0.35)',
    'button-hover-background-color': '#b9bbbc',
    'button-hover-color': '#000',
    'button-active-background-color': '#6f7477',
    'button-active-border-color': '#52585b',
    'button-active-color': '#fff',
  }
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

Button.defaultProps = {
  type: 'button'
};

export default Button;