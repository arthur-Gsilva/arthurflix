import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    padding-left: 30px;

    h2{
        font-size: 1.6rem;
        margin-bottom: .5rem;
    }


    .arrow-left,
    .arrow-right{
        font-size: 50px;
        position: absolute;
        width: 40px;
        height: 300px;
        background-color: rgba(0,0,0,.6);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        opacity: 0;
        transition: .3s;

    }

    .arrow-left{
        left: 0;
    }

    .arrow-right{
        right: 0;
    }

    &:hover .arrow-left{
        opacity: 1;
    }
    &:hover .arrow-right{
        opacity: 1;
    }


    @media(max-width: 760px){
        .arrow-left,
        .arrow-right{
            opacity: 1;
        }
    }
`

export const ContentArea = styled.div`
    display: flex;
    overflow: hidden;
    transition: .5s;


    img{
        transform: scale(.9);
        cursor: pointer;
        transition:all ease.3s;
        border-radius: 10px;

        &:hover{
            transform: scale(1) ;
        }
    }

`