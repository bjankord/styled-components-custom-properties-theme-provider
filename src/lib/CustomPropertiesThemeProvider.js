import React from "react";

/* Convert theme into CSS custom properties */
const CustomPropertiesThemeProvider = props => {
  const CSSCustomProperties = Object.keys(props.theme).reduce(function (
    newObj,
    key
  ) {
    let newKey = `--${key}`;
    newObj[newKey] = props.theme[key];
    return newObj;
  }, {});

  /* Set CSS custom properties on the direct child as inline styles */
  let style = props.children.style ? Object.assign(props.children.style, CSSCustomProperties) : CSSCustomProperties;
  return React.Children.only(React.cloneElement(props.children, { style }));
};

export default CustomPropertiesThemeProvider;