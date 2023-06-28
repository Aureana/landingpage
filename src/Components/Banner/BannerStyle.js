import styled from "styled-components";
import "@fontsource/roboto"

export const Main = styled.main`
margin: 0;

.banner {
    
    .acelera {
        display: grid;
        justify-items: end;
        color: yellow;
        font-family: 'Roboto';
        font-size: larger;

        .metodoacelera {
            font-size: 45px;
            max-width: 45rem;
        }
        .duas {
            border: 2px solid yellow;
            font-size: 30px;

        }
        div {
            max-width: 50rem;
            padding: 1rem;
        }
    }
    .unica {
        
        color: white;
        max-width: 18rem;
        font-family: 'Roboto';
        
        .metodounico {
            font-size: larger;
        }

        button {
            border-radius: 12px;
            border: none;
            padding: 5px;
            color: rgba(82,61,128);
            background-color: yellow;
            font-size: 15px ;
            font-family: 'Roboto';
        }
    }
}

.menino {
    margin-right: 10rem;
}
`
/* .comentarios {
    display: flex;
    justify-content: space-between;
    min-width: 51rem;

    .card {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        background: rgb(83,83,83);
        background: linear-gradient(193deg, rgba(83,83,83,0.9) 7%, rgba(83,83,83,0.9) 31%);
        max-width: 14rem;
        max-height: 29rem;
        border-radius: 25px;
        border: none;
        padding: 15px;
}
} */