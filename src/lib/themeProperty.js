/* Check if browser supports CSS Custom properties, if so, use them otherwise,
fallback to styled-components theme provider implementation */
function themeProperty(prop, propertyName, variableName, fallback) {
  if (window.CSS && CSS.supports("color", "var(--color)")) {
    return `${propertyName}: var(--${variableName}, ${fallback});`;
  } else {
    return `${propertyName}: ${prop.theme[variableName]}`;
  }
}

export default themeProperty;