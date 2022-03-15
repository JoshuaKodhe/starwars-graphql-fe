import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    html, body {
        height: 100%;
        margin: 0;
        padding:0 ;
        font-family: 'Source Sans Pro', sans-serif;
        color: #191C23;
        background-color: #F4F9F9;
      }
 `;
