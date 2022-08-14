import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.carousel-item {
    transition: 0.4s!important;
}

body {
    font: 400 14px Poppins, sans-serif;
}
:root {
    --background: #FEDFCE;
    --button: #F4685B;
    --orange: #F4685B;
    --buttonhover: #10081D;
    --textParagraph: #10081D;
    --textPrimary: #10081D;
    --paragraph: #10081D;
    --transparent: #0000000;
    --subTitle: #929292;
}
`