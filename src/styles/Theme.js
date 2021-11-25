/**
 * Theme.js
 * Provides the theme for the app
 */
 import React from "react";
 import { ThemeProvider } from "styled-components";
 
 // Styles
 const theme = {
     colors: {
        PrimaryColor: '#6495EC',
        HoverColor: '#9abaf5',
        DisabledColor: 'grey',
        MainBackgroundColor: 'white',
        CorrectColor: '#6ca240',
        IncorrectColor: '#da6565',
        FontHeadingColor: '#ffffff'
    },
 };
 
 const Theme = ({ children }) => {
     return (
         <ThemeProvider theme={theme}>{children}</ThemeProvider>
     );
 }
 
 export default Theme;

 /*
 Original theme

  const theme = {
     colors: {
        PrimaryColor: '#6495EC',
        HoverColor: '#9abaf5',
        DisabledColor: 'grey',
        MainBackgroundColor: 'white',
        CorrectColor: '#6ca240',
        IncorrectColor: '#da6565',
        FontHeadingColor: '#ffffff'
    },
 };
  */
 