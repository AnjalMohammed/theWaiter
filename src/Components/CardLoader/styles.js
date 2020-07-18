import styled from "styled-components";

export const CardParent = styled.div`
{
    background-color: #fff; 
    height: auto; 
    width: auto; 
    overflow: hidden; 
    box-shadow: 9px 17px 45px -29px 
                rgba(0, 0, 0, 0.44); 


    /* Card image loading */ 
    .card__image img { 
        width: 100%; 
        height: 100%; 
    } 
    
    .card__image.loading { 
        height: 300px; 
        width: 400px; 
    } 

    /* The loading Class */ 
    .loading { 
        position: relative; 
        background-color: #acc7e1; 
    } 

    /* The moving element */ 
    .loading::after { 
        display: block; 
        content: ""; 
        position: absolute; 
        width: 100%; 
        height: 100%; 
        transform: translateX(-100%); 
        background: -webkit-gradient(linear, left top, 
                    right top, from(transparent),  
                    color-stop(rgba(255, 255, 255, 0.2)), 
                    to(transparent)); 
                        
        background: linear-gradient(90deg, transparent, 
                rgba(255, 255, 255, 0.2), transparent); 

        /* Adding animation */ 
        animation: loading 0.8s infinite; 
    } 

    /* Loading Animation */ 
    @keyframes loading { 
        100% { 
            transform: translateX(100%); 
        } 
    }
}`;