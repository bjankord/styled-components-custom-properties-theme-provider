(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,o){},115:function(e,t,o){"use strict";o.r(t);o(70);var n=o(0),r=o.n(n),a=o(21),l=o.n(a),s=(o(108),o(65)),c=o(22),m=function(e){var t=Object.keys(e.theme).reduce(function(t,o){return t["--".concat(o)]=e.theme[o],t},{});return r.a.createElement(c.a,{theme:e.theme},r.a.createElement("div",{style:t},e.children))};var u=function(e,t,o,n){return window.CSS&&CSS.supports("color","var(--color)")?"".concat(t,": var(--").concat(o,", ").concat(n,");"):"".concat(t,": ").concat(e.theme[o])};function i(){var e=Object(s.a)(["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n  border-width: 2px;\n  border-style: solid;\n  background-color: #fff;\n\n  /* Theming Properties */\n  ","\n  ","\n"]);return i=function(){return e},e}var d=c.b.button(i(),function(e){return u(e,"color","button-color","palevioletred")},function(e){return u(e,"border-color","button-border-color","palevioletred")});d.defaultProps={theme:{"button-color":"palevioletred","button-border-color":"palevioletred"}};var p={"button-color":"mediumseagreen","button-border-color":"mediumseagreen"};var h=function(){return r.a.createElement("div",{style:{padding:"1rem 2rem",fontFamily:"sans-serif",lineHeight:"1.5"}},r.a.createElement("h1",null,"styled-components-custom-properties-theme-provider"),r.a.createElement("p",null,"Custom styled-components theme provider which uses CSS custom properties in browsers that support them. Will fallback to using styled components theme provider implementation in browsers that don't support CSS custom properties."),r.a.createElement(d,null,"Default Themed Button"),r.a.createElement(m,{theme:p},r.a.createElement(d,null,"Custom Themed Button")),r.a.createElement("h2",null,"Implementation Notes"),r.a.createElement("p",null,"This first button use CSS Custom property fallback syntax, ",r.a.createElement("code",null,"color: var(--button-color, palevioletred);")," for a default theme. In browsers that don't support CSS custom properties, ",r.a.createElement("code",null,"Button.defaultProps.theme")," is used to set the default / fallback value."),r.a.createElement("p",null,"This second button sits inside the ",r.a.createElement("code",null,"CustomPropertiesThemeProvider")," component. This component defines values for the CSS custom properties used in the ",r.a.createElement("code",null,"Button")," component. e.g. ",r.a.createElement("code",null,"--button-color: mediumseagreen;"),". In modern browsers, the CSS custom properties work as intended. In browsers that don't support CSS custom properties, the ",r.a.createElement("code",null,"CustomPropertiesThemeProvider")," component uses ",r.a.createElement("a",{href:"https://www.styled-components.com/docs/advanced/#theming"},"styled-components theme provider implementation"),"."),r.a.createElement("a",{href:"https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/src/App.js"},"View Usage"))};l.a.render(r.a.createElement(h,null),document.getElementById("root"))},69:function(e,t,o){e.exports=o(115)}},[[69,2,1]]]);
//# sourceMappingURL=main.dd3bb1d0.chunk.js.map