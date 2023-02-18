import styled from "styled-components";

export const Container = styled.div`
    background-color: #111;
    color: #fff;
    font-family: 'Roboto', sans-serif;

    .list{
        margin-top: -150px;
    }


    .loading{
        z-index: 2;
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`