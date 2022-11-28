import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #3A3A3A;
    
  }

  a {
    color: #f9c731;
    font-weight: bold;
    text-decoration: none;
  }

  p {
    font-size: 16px;
  }
`
  
function App ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default App