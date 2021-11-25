/**
 * Theme.js
 * Provides the theme for the app
 */
 import React from "react";
 import { ThemeProvider } from "styled-components";
 
 // Styles
 const theme = {
     colors: {
        PrimaryColor: 'cornflowerblue'
    },
 };
 
 const Theme = ({ children }) => {
     return (
         <ThemeProvider theme={theme}>{children}</ThemeProvider>
     );
 }
 
 export default Theme;
 