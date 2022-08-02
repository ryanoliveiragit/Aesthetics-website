import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font: 400 14px Poppins, sans-serif;
}
:root {
    --background: #FEDFCE;
    --button: #F4685B;
    --orange: #F4685B;
    --buttonhover: #131041;
    --textParagraph: #131041;
    --textPrimary: #131041;
    --paragraph: #ffffff;
}
`