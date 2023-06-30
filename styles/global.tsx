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
    
    .footer__logo {
        width: 200px;
        height: auto;
        margin-top: 20px;        
        padding: 0;        
        display: flex;
        justify-content: center;
        align-items: center;        
    }

    .footer__links {
        text-decoration: none;
        text-align: center;
        font-size: 14px;
        color: #333;
        font-weight: medium;
        padding-bottom: 10px;
    }

    .footer__redes {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ebeef5;
        margin-bottom: 1rem;
        margin-right: 1rem;
        display: flex;
        justify-content: center;
        align-items: center; 
        color: #333;
        
        &:hover {
            background-color: #2c83fb;
            color: #fff;
        }
  
    }

    .footer__copy {
        text-decoration: none;
        font-size: 11px;
        color: #089bfe;
    }        
    
    .cards__container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);              
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
        margin-top: 8px;
        margin-bottom: 8px;
        padding-top: 2rem;
      }

    .card__image {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;  
        object-fit: cover;
        border-radius: 1rem;
    }

    .active-page {
        border: 1px solid #0183ff;
        padding: 2px 10px;
        color: #0183ff;
        border-radius: 5px;
    }

`;

export default GlobalStyle;
