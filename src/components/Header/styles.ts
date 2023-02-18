import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    height: 70px;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    z-index: 10;
    transition: .3s;


    .black{
        background-color: #111 !important
    }


    .logo-area img{
        width: 150px;
    }

    .user img{
        width: 50px;
    }
`

