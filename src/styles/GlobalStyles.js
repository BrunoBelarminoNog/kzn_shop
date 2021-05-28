import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
	--white: #F8F9FA;
	--white-2: #E9ECEF;
	--white-3: #dee2e6;
	--gray: #ced4da;
	--gray-2: #adb5bd;
	--gray-3: #6c757d;
	--darkgray: #495057;
	--darkgray-2: #343a40;
	--black: #212529;
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, button, cite, code,
del, dfn, em, img, ins, input, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  	outline: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
button {
    cursor: pointer;
}
a {
    text-decoration: none;
}
h1, h2, h3 {
	font-family: 'Bebas Neue', cursive;
}

body {
	background-color: var(--white-2);
}
`;
