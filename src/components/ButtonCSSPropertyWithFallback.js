import styled from 'styled-components';
import { themeProperty } from "../lib";

const Button = styled.button`
  background-color: ${props => themeProperty("button-background-color", "#dedfe0", props)};
  border-color: ${props => themeProperty("button-border-color", "#c8cacb", props)};
  border-radius: ${props => themeProperty("button-border-radius", "0.2142rem", props)};
  border-style: solid;
  border-width: 1px;
  box-shadow: ${props => themeProperty("button-box-shadow", "none", props)};
  color: ${props => themeProperty("button-color", "#1c1f21", props)};
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: ${props => themeProperty("button-font-size", "1rem", props)};
  font-weight: ${props => themeProperty("button-font-weight", "400", props)};
  line-height: ${props => themeProperty("button-line-height", "1.429", props)};
  outline: none;
  padding-bottom: ${props => themeProperty("button-vertical-padding", "0.286rem", props)};
  padding-left: ${props => themeProperty("button-horizontal-padding", "0.286rem", props)};
  padding-right: ${props => themeProperty("button-horizontal-padding", "0.286rem", props)};
  padding-top: ${props => themeProperty("button-vertical-padding", "0.286rem", props)};
  margin: 0 0.286rem 0.286rem 0;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  white-space: normal;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  &:focus {
    outline: none;
    background-color: ${props => themeProperty("button-focus-background-color", "#dedfe0", props)};
    border-color: ${props => themeProperty("button-focus-border-color", "#c8cacb", props)};
    box-shadow: ${props => themeProperty("button-focus-box-shadow", "0 0 1px 3px rgba(76, 178, 233, 0.5), 0 0 7px 4px rgba(76, 178, 233, 0.35)", props)};
  }

  &:hover {
    background-color: ${props => themeProperty("button-hover-background-color", "#b9bbbc", props)};
    color: ${props => themeProperty("button-hover-color", "#000", props)};
  }

  &:active {
    outline: none;
    -webkit-tap-highlight-color: transparent;
    background-color: ${props => themeProperty("button-active-background-color", "#6f7477", props)};
    border-color: ${props => themeProperty("button-active-border-color", "#52585b", props)};
    color: ${props => themeProperty("button-active-color", "#fff", props)};
  }
`;

Button.defaultProps = {
  theme: {
    'button-background-color': '#dedfe0',
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

export default Button;