(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(t,e,n){},126:function(t,e,n){"use strict";n.r(e);n(81);var o=n(0),r=n.n(o),a=n(32),c=n.n(a),u=(n(119),n(130)),l=n(128),i=n(129),b=n(12),d=n(4),s=function(t){var e=Object.keys(t.theme).reduce(function(e,n){return e["--".concat(n)]=t.theme[n],e},{}),n=t.children.style?Object.assign(t.children.style,e):e;return r.a.Children.only(r.a.cloneElement(t.children,{style:n}))},m=window.CSS&&CSS.supports("color","var(--color)")?s:d.a,h=function(t){return r.a.createElement(m,{theme:t.theme},t.children)},p=window.CSS&&CSS.supports("color","var(--c)");function f(t,e,n){return p?"var(--".concat(t,", ").concat(e,");"):"".concat(n.theme[t])}function g(){var t=Object(b.a)(["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n  border-width: 2px;\n  border-style: solid;\n  background-color: #fff;\n\n  /* Theming Properties */\n  color: ",";\n  border-color: ",";\n"]);return g=function(){return t},t}var v=d.b.button(g(),function(t){return f("button-color","palevioletred",t)},function(t){return f("button-border-color","palevioletred",t)});v.defaultProps={theme:{"button-color":"palevioletred","button-border-color":"palevioletred"}};var x={"button-color":"mediumseagreen","button-border-color":"mediumseagreen"};var k=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"styled-components-custom-properties-theme-provider"),r.a.createElement("p",null,"Custom styled-components theme provider which uses CSS custom properties in browsers that support them. Will fallback to using styled components theme provider implementation in browsers that do not support CSS custom properties."),r.a.createElement(v,null,"Default Themed Button"),r.a.createElement(h,{theme:x},r.a.createElement(v,null,"Custom Themed Button")),r.a.createElement("h2",null,"Implementation Notes"),r.a.createElement("p",null,"This first button use CSS Custom property fallback syntax, ",r.a.createElement("code",null,"color: var(--button-color, palevioletred);")," for a default theme. In browsers that do not support CSS custom properties, ",r.a.createElement("code",null,"Button.defaultProps.theme")," is used to set the default / fallback value."),r.a.createElement("p",null,"This second button sits inside the ",r.a.createElement("code",null,"CustomPropertiesThemeProvider")," component. This component defines values for the CSS custom properties used in the ",r.a.createElement("code",null,"Button")," component. e.g. ",r.a.createElement("code",null,"--button-color: mediumseagreen;"),". In modern browsers, the CSS custom properties work as intended. In browsers that do not support CSS custom properties, the ",r.a.createElement("code",null,"CustomPropertiesThemeProvider")," component uses ",r.a.createElement("a",{href:"https://www.styled-components.com/docs/advanced/#theming"},"styled-components theme provider implementation"),"."),r.a.createElement("a",{href:"https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/src/App.js"},"View Usage"))},w=n(18),E=n(19),y=n(21),C=n(20),T=n(22),S=function(t,e,n,o,r,a,c){console.log("--------- logProfile fired -----------"),console.log("".concat(t,"'s ").concat(e.toUpperCase()," phase:")),console.log("Actual time: ".concat(n," ms")),console.log("Base time: ".concat(o," ms")),console.log("Start time (since component mounted): ".concat(r," ms")),console.log("Commit time (since component mounted): ".concat(a," ms"))},P=function(t){return Array.apply(null,{length:t}).map(Number.call,Number)};function z(){var t=Object(b.a)(["\n  background-color: ",";\n  border-color: ",";\n  border-radius: ",";\n  border-style: solid;\n  border-width: 1px;\n  box-shadow: ",";\n  color: ",";\n  cursor: pointer;\n  display: inline-block;\n  font-family: inherit;\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  outline: none;\n  padding-bottom: ",";\n  padding-left: ",";\n  padding-right: ",";\n  padding-top: ",";\n  margin: 0 0.286rem 0.286rem 0;\n  text-align: center;\n  text-decoration: none;\n  text-transform: none;\n  touch-action: manipulation;\n  user-select: none;\n  white-space: normal;\n\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n  &:focus {\n    outline: none;\n    background-color: ",";\n    border-color: ",";\n    box-shadow: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n\n  &:active {\n    outline: none;\n    -webkit-tap-highlight-color: transparent;\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  }\n"]);return z=function(){return t},t}var j=d.b.button(z(),function(t){return t.theme["button-background-color"]},function(t){return t.theme["button-border-color"]},function(t){return t.theme["button-border-radius"]},function(t){return t.theme["button-box-shadow"]},function(t){return t.theme["button-color"]},function(t){return t.theme["button-font-size"]},function(t){return t.theme["button-font-weight"]},function(t){return t.theme["button-line-height"]},function(t){return t.theme["button-vertical-padding"]},function(t){return t.theme["button-horizontal-padding"]},function(t){return t.theme["button-horizontal-padding"]},function(t){return t.theme["button-vertical-padding"]},function(t){return t.theme["button-focus-background-color"]},function(t){return t.theme["button-focus-border-color"]},function(t){return t.theme["button-focus-box-shadow"]},function(t){return t.theme["button-hover-background-color"]},function(t){return t.theme["button-hover-color"]},function(t){return t.theme["button-active-background-color"]},function(t){return t.theme["button-active-border-color"]},function(t){return t.theme["button-active-color"]});j.defaultProps={theme:{"button-backgroundColor":"#dedfe0","button-border-color":"#c8cacb","button-border-radius":"0.2142rem","button-box-shadow":"none","button-color":"#1c1f21","button-font-size":"1rem","button-font-weight":"400","button-line-height":"1.429","button-vertical-padding":"0.286rem","button-horizontal-padding":"0.286rem","button-focus-background-color":"#dedfe0","button-focus-border-color":"#c8cacb","button-focus-box-shadow":"0 0 1px 3px rgba(76, 178, 233, 0.5), 0 0 7px 4px rgba(76, 178, 233, 0.35)","button-hover-background-color":"#b9bbbc","button-hover-color":"#000","button-active-background-color":"#6f7477","button-active-border-color":"#52585b","button-active-color":"#fff"}};var O=j,B={"button-active-background-color":"rgba(89, 159, 253, 0.6)","button-active-border-color":"rgba(17, 22, 25, 0.75)","button-active-color":"rgba(17, 22, 25, 0.75)","button-background-color":"rgba(89, 159, 253, 0.2)","button-border-color":"#599ffd","button-border-radius":"3px","button-box-shadow":"0 1px 1px 0 rgba(17, 22, 25, 0.5)","button-color":"rgba(17, 22, 25, 0.75)","button-focus-background-color":"rgba(89, 159, 253, 0.2)","button-focus-border-color":"#599ffd","button-focus-box-shadow":"0 1px 1px 0 rgba(17, 22, 25, 0.5), inset 0 0 0 1px #96c2fe","button-font-size":"16px","button-font-weight":"500","button-horizontal-padding":"3px","button-hover-background-color":"rgba(89, 159, 253, 0.6)","button-hover-color":"rgba(17, 22, 25, 0.75)","button-line-height":"1.5","button-vertical-padding":"3px"},A={"button-active-background-color":"#2a4b77","button-active-border-color":"#2a4b77","button-active-color":"#fff","button-background-color":"#0c5fd0","button-border-color":"#0c5fd0","button-border-radius":"4px","button-box-shadow":"0 1px 1px 0 rgba(18, 21, 24, 0.4)","button-color":"#fff","button-focus-background-color":"#0c5fd0","button-focus-border-color":"#0c5fd0","button-focus-box-shadow":"0 1px 1px 0 rgba(17, 22, 25, 0.5), 0 0 0 1px #fff inset","button-font-size":"17px","button-font-weight":"normal","button-horizontal-padding":"4px","button-hover-background-color":"#3a67a4","button-hover-color":"#fff","button-line-height":"1.4","button-vertical-padding":"4px"},I=r.a.unstable_Profiler,N=function(t){function e(){var t,n;Object(w.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(y.a)(this,(t=Object(C.a)(e)).call.apply(t,[this].concat(r)))).state={theme:1},n.changeTheme=function(){n.setState(function(t){return{theme:!t.theme}})},n}return Object(T.a)(e,t),Object(E.a)(e,[{key:"render",value:function(){var t=P(2e3);return r.a.createElement("div",null,r.a.createElement("h1",null,"Styled Components Theme Provider Test"),r.a.createElement("button",{type:"button",onClick:this.changeTheme},"Change Theme"),r.a.createElement("hr",null),r.a.createElement(I,{id:"styled components theme provider",onRender:S},r.a.createElement(d.a,{theme:this.state.theme?B:A},r.a.createElement("div",null,t.map(function(t){return r.a.createElement(O,{key:t},"Themed Button")})))))}}]),e}(o.Component);function R(){var t=Object(b.a)(["\n  background-color: var(--button-background-color, #dedfe0);\n  border-color: var(--button-border-color, #c8cacb);\n  border-radius: var(--button-border-radius, 0.2142rem);\n  border-style: solid;\n  border-width: 1px;\n  box-shadow: var(--button-box-shadow, none);\n  color: var(--button-color, #1c1f21);\n  cursor: pointer;\n  display: inline-block;\n  font-family: inherit;\n  font-size: var(--button-font-size, 1rem);\n  font-weight: var(--button-font-weight, 400);\n  line-height: var(--button-line-height, 1.429);\n  outline: none;\n  padding-bottom: var(--button-vertical-padding, 0.286rem);\n  padding-left: var(--button-horizontal-padding, 0.286rem);\n  padding-right: var(--button-horizontal-padding, 0.286rem);\n  padding-top: var(--button-vertical-padding, 0.286rem);\n  margin: 0 0.286rem 0.286rem 0;\n  text-align: center;\n  text-decoration: none;\n  text-transform: none;\n  touch-action: manipulation;\n  user-select: none;\n  white-space: normal;\n\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n  &:focus {\n    outline: none;\n    background-color: var(--button-focus-background-color, #dedfe0);\n    border-color: var(--button-focus-border-color, #c8cacb);\n    box-shadow: var(--button-focus-box-shadow, 0 0 1px 3px rgba(76, 178, 233, 0.5), 0 0 7px 4px rgba(76, 178, 233, 0.35));\n  }\n\n  &:hover {\n    background-color: var(--button-hover-background-color, #b9bbbc);\n    color: var(--button-hover-color, #000);\n  }\n\n  &:active {\n    outline: none;\n    -webkit-tap-highlight-color: transparent;\n    background-color: var(--button-active-background-color, #6f7477);\n    border-color: var(--button-active-border-color, #52585b);\n    color: var(--button-active-color, #fff);\n  }\n"]);return R=function(){return t},t}var W=d.b.button(R()),_=r.a.unstable_Profiler,F=function(t){function e(){var t,n;Object(w.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(y.a)(this,(t=Object(C.a)(e)).call.apply(t,[this].concat(r)))).state={theme:1},n.changeTheme=function(){n.setState(function(t){return{theme:!t.theme}})},n}return Object(T.a)(e,t),Object(E.a)(e,[{key:"render",value:function(){var t=P(2e3);return r.a.createElement("div",null,r.a.createElement("h1",null,"Custom Properties Theme Provider Test"),r.a.createElement("button",{type:"button",onClick:this.changeTheme},"Change Theme"),r.a.createElement("hr",null),r.a.createElement(_,{id:"custom properties theme provider",onRender:S},r.a.createElement(s,{theme:this.state.theme?B:A},r.a.createElement("div",null,t.map(function(t){return r.a.createElement(W,{key:t},"Themed Button")})))))}}]),e}(o.Component);function J(){var t=Object(b.a)(["\n  background-color: ",";\n  border-color: ",";\n  border-radius: ",";\n  border-style: solid;\n  border-width: 1px;\n  box-shadow: ",";\n  color: ",";\n  cursor: pointer;\n  display: inline-block;\n  font-family: inherit;\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  outline: none;\n  padding-bottom: ",";\n  padding-left: ",";\n  padding-right: ",";\n  padding-top: ",";\n  margin: 0 0.286rem 0.286rem 0;\n  text-align: center;\n  text-decoration: none;\n  text-transform: none;\n  touch-action: manipulation;\n  user-select: none;\n  white-space: normal;\n\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n  &:focus {\n    outline: none;\n    background-color: ",";\n    border-color: ",";\n    box-shadow: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n\n  &:active {\n    outline: none;\n    -webkit-tap-highlight-color: transparent;\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  }\n"]);return J=function(){return t},t}var U=d.b.button(J(),function(t){return f("button-background-color","#dedfe0",t)},function(t){return f("button-border-color","#c8cacb",t)},function(t){return f("button-border-radius","0.2142rem",t)},function(t){return f("button-box-shadow","none",t)},function(t){return f("button-color","#1c1f21",t)},function(t){return f("button-font-size","1rem",t)},function(t){return f("button-font-weight","400",t)},function(t){return f("button-line-height","1.429",t)},function(t){return f("button-vertical-padding","0.286rem",t)},function(t){return f("button-horizontal-padding","0.286rem",t)},function(t){return f("button-horizontal-padding","0.286rem",t)},function(t){return f("button-vertical-padding","0.286rem",t)},function(t){return f("button-focus-background-color","#dedfe0",t)},function(t){return f("button-focus-border-color","#c8cacb",t)},function(t){return f("button-focus-box-shadow","0 0 1px 3px rgba(76, 178, 233, 0.5), 0 0 7px 4px rgba(76, 178, 233, 0.35)",t)},function(t){return f("button-hover-background-color","#b9bbbc",t)},function(t){return f("button-hover-color","#000",t)},function(t){return f("button-active-background-color","#6f7477",t)},function(t){return f("button-active-border-color","#52585b",t)},function(t){return f("button-active-color","#fff",t)});U.defaultProps={theme:{"button-background-color":"#dedfe0","button-border-color":"#c8cacb","button-border-radius":"0.2142rem","button-box-shadow":"none","button-color":"#1c1f21","button-font-size":"1rem","button-font-weight":"400","button-line-height":"1.429","button-vertical-padding":"0.286rem","button-horizontal-padding":"0.286rem","button-focus-background-color":"#dedfe0","button-focus-border-color":"#c8cacb","button-focus-box-shadow":"0 0 1px 3px rgba(76, 178, 233, 0.5), 0 0 7px 4px rgba(76, 178, 233, 0.35)","button-hover-background-color":"#b9bbbc","button-hover-color":"#000","button-active-background-color":"#6f7477","button-active-border-color":"#52585b","button-active-color":"#fff"}};var D=U,H=r.a.unstable_Profiler,V=function(t){function e(){var t,n;Object(w.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(y.a)(this,(t=Object(C.a)(e)).call.apply(t,[this].concat(r)))).state={theme:1},n.changeTheme=function(){n.setState(function(t){return{theme:!t.theme}})},n}return Object(T.a)(e,t),Object(E.a)(e,[{key:"render",value:function(){var t=P(2e3);return r.a.createElement("div",null,r.a.createElement("h1",null,"Custom Properties Theme Provider With Fallback Test"),r.a.createElement("button",{type:"button",onClick:this.changeTheme},"Change Theme"),r.a.createElement("hr",null),r.a.createElement(H,{id:"custom properties theme provider",onRender:S},r.a.createElement(h,{theme:this.state.theme?B:A},r.a.createElement("div",null,t.map(function(t){return r.a.createElement(D,{key:t},"Themed Button")})))))}}]),e}(o.Component);var q=function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/theme-provider-test-page"},"ThemeProvider Test Page")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/custom-properties-theme-provider-test-page"},"CustomPropertiesThemeProvider Test Page")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/custom-properties-theme-provider-with-fallback-test-page"},"CustomPropertiesThemeProvider With Fallback Test Page"))),r.a.createElement("hr",null),r.a.createElement(i.a,{exact:!0,path:"/",component:k}),r.a.createElement(i.a,{path:"/theme-provider-test-page",component:N}),r.a.createElement(i.a,{path:"/custom-properties-theme-provider-test-page",component:F}),r.a.createElement(i.a,{path:"/custom-properties-theme-provider-with-fallback-test-page",component:V})))};c.a.render(r.a.createElement(q,null),document.getElementById("root"))},80:function(t,e,n){t.exports=n(126)}},[[80,2,1]]]);
//# sourceMappingURL=main.9dcddd29.chunk.js.map