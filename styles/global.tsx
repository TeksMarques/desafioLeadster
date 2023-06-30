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

    // conteudo do header

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

    // conteudo do navbar

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

    // conteudo da seção de informações

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

    // conteudo do footer
    
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
    
    // conteudo do card
    
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

    // conteudo da Modal

    .dialog__panel {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 110%;
        max-width: 32rem;
        max-height: 80vh;
        background-color: #fff;
        border-radius: 1rem;
        overflowY: auto;
        transform: none;
        text-align: left;
        overflow: hidden;        
        gap: 1.3rem;
        padding: 1.5rem 0 1.5rem 0;
        box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.15);        
        align-items: center;
        border-top: solid;
        border-color: #3b82f6;

        transition-property: all;
        transition-duration: 0.3s;  
        transition-timing-function: ease;   
        transition-delay: 0s;

    }    

    .btn__download-left {
        padding: 2px 4px;
       
    }

    .btn__download-right {
        padding: 2px 4px;
       
    }

    .green__button {
        color: #008e72;
        background-color: #c2f4ea;
        cursor: pointer;
      }
      
    .blue__button {
        color: #007deb;
        background-color: #c2e6ff;
        cursor: pointer;
    }
      
    .yellow__button {
        color: #d9b112;
        background-color: #fff8d0;
        cursor: pointer;
    }

    .blue__button .btn__download-left {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1769b076;
        height: 100%;
    }

    .green__button .btn__download-left {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #008e7250;
        height: 100%;
    }

    .yellow__button .btn__download-left {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #dfb3045e;
        height: 100%;
    }

`;

export default GlobalStyle;
