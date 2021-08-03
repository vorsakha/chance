import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../context";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  max-width: 1000px;
  margin:0 auto;
  padding: 0;
}

body{
  min-height:100vh;
  /* padding:0 1rem; */
  margin:0;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

main {
  margin-top: 56px;
  height: 100%;
  min-height: 100vh;

  @media screen and (min-width: 681px) {
    margin-left: 270px;
    margin-top: 0;
  padding-left: 1rem;

  }
}

code {
  background-color: #fcfcfc;
  border: 1px solid rgba(75, 85, 99, 0.1); 
  border-radius: 4px;
  padding: 1rem;
}

pre {
  background-color: #fcfcfc;
  border: 1px solid rgba(75, 85, 99, 0.1); 
  border-radius: 4px;
  padding: 1rem;

  // Wrap text that don't respect width
  white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;      /* Internet Explorer 5.5+ */
}

a {
  text-decoration: none;
  color: dodgerblue;
  font-weight: bold;
}
a:hover {
    color: #1b75d0;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
