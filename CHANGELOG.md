Changelog
=========

Unreleased
----------

1.0.0-beta.2 - (December 28th, 2018)
------------------------------------
### Breaking Changes
I don't like to release breaking changes in beta, but here we are.

* Changed CSS custom property fallback logic from being in CustomPropertiesThemeProvider component to CustomPropertiesFallbackThemeProvider component.
* `themeProperty` function argument order updated. `props` is now the last argument that should be passed, this makes it easier to make it optional.
* Removed first argument, `propertyName`, from `themeProperty` function. This should be set outside of the `themeProperty` function.

Old way:
`${props => themeProperty(props, "color", "button-color", "palevioletred")}`

New way:
`color: ${props => themeProperty("button-color", "palevioletred", props)}`

### Added
* Added CustomPropertiesFallbackThemeProvider component

1.0.0-beta.1 - (December 20th, 2018)
------------------------------------
* Initial beta release