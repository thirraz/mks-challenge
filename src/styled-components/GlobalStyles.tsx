import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
 :root{
  --color-brand: #0F52BA;
  --color-white: #fff;
  --color-gray:#373737;
  --color-gray-light: #F9F9F9;
  --color-black:#000000;

  --primary-font:'Montserrat', sans-serif
 }

 *,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
 }

 html{
  font-size:62.5%;
  scroll-behavior: smooth;
 }

 body{
  font-family: var(--primary-font);
 }

 
`

export default GlobalStyles
