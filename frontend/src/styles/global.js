import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  
  html {
    background-color: ${(props) => props.theme.background};
  };
  
  body {
    font-family: 'Poppins', sans-serif;
  };

  .loader {
    border-style: solid;
    border-width: 16px;
    border-color: ${(props) => props.theme.primary1_lighter};
    border-top: 16px solid white;
    border-top-color: ${(props) => props.theme.primary2};
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
