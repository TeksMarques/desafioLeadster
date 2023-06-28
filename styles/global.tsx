import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-family: 'Plus Jakarta Sans', sans-serif;
    }

    .header__logo {
        margin: 30px;
        padding-top: 20px;        
        display: flex;
        justify-content: center;
        align-items: center;        
    }

    .header__text__bubble {
        font-size: 14px;
        color: #089bfe;
        border: 2px solid #089bfe;
        border-radius: 20px 20px 20px 0;
        padding: 5px 15px;
        margin-bottom: 10px; 
        font-weight: 900;
        letter-spacing: 0.3px;     

    }

    .header__text_subtitle {
        font-size: 50px;
        color: #333;
        padding-top: 8px;
        margin-bottom: 0px;
        font-weight: 600;
        letter-spacing: 0.3px;
    }

    .header__title {
        position: relative;
        width: max-content;
        height: max-content;
        padding: 0;
        margin-top: 0;
    }

    .header__text__title {
        font-size: 88px;
        font-weight: 800;
        padding-left: 15px;
        padding-right: 15px;
        background-image: linear-gradient(to right, #2c83fb -45%, #1f76f0 100%);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;

    }

    .header__asset {
        position: absolute;
        top: 18px;        
        height: auto;        
        right: 1px;
        width: 40px;
    }

    .header__line {
        width: 100%;
        border: 1px solid #cbd6df;
        margin-top: 10px;
        margin-bottom: 15px;
        
    }

    .header__cto {
        font-size: 18px;
        font-weight: 600;
    }

    .header__bold {
        font-weight: 900;
    }

    .nav__link {
        font-size: 13px;        
        margin-right: 8px;
        border: 1px solid #333;
        border-radius: 30px;
        padding: 5px 15px;
        color: #333;

        &:hover {
            color: #2c83fb;
            border: 1px solid #2c83fb;
        }
    }

    .nav__bold {
        font-weight: 900;
        font-size: 13px;
        margin-right: 8px;
    }

    .image__comparativos {
        width: 580px;
        height: auto;

       padding-top: 2rem;
       margin-left: 10rem;
       z-index: 1;
    }

    .image_grafico {
        position: absolute;
        top: 120px;
        left: -80px;
        background-color: #e1f3fe;
        height: 900px;
        width: 670px;
        transform: rotate(-43deg);
        border-radius: 80px;
        z-index: 0;
        opacity: 1;       
    }

    .image__selo {
        width: 135px;
        height: auto;
        margin-left: 20px;
    }

    .image__rating {
        margin-left: 10px;
        width: 72px;
        height: auto;
    }
    

`;

export default GlobalStyle;
