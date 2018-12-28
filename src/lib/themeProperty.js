const supportCSS = window.CSS&&CSS.supports("color", "var(--c)");
export default function themeProperty(v,f,p){return supportCSS?`var(--${v}, ${f});`:`${p.theme[v]}`}