import styled from "styled-components";
import "@fontsource/roboto"

export const Main = styled.main`
padding: 3rem;

.logo {
    display: grid;
    justify-items: center;
}

.informativos {
    display: grid;
    grid-auto-flow: column;
    justify-items: end;
    font-family: "roboto";
    font-size: larger;

    .informativo {
        background: none;
        border: none;
        padding:1.9rem 1.7rem 1rem 1rem;
        color: white;
        font-family: "roboto";
        font-size: 20px;
        
        
    }
        
}

.redesociais {
    .rede {
        background: none;
        border: none;
        padding: 1.6rem 0.6rem 0 0;
        
    }
}

`