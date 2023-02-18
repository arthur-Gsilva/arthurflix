import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-size: cover;
    background-position: center;
    
`

export const FeaturedVertical = styled.div`
    height: inherit;
    width: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);

    
`

export const FeaturedHorizontal = styled.div`
    height: inherit;
    width: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    padding-bottom: 120px;

    @media(max-width: 760px){
        padding-left: 20px;
        background: transparent;
    }


    h3{
        font-size: 3rem;

        @media(max-width: 760px){
            font-size: 1.7rem;
        }
    }

`

export const FeaturedInfo = styled.div`
    margin: 20px 0;
    display: flex;
    gap: 20px;
    font-weight: bold;

    .points{
        color: green;
    }
`

export const Description = styled.div`
    color: #ccc;
    max-width: 450px;
    margin-bottom: 15px;

    @media(max-width: 760px){
        font-size: 1rem;
        max-width: 100%;
        margin-right: 40px;
    }
`

export const Buttons = styled.div`

    display: flex;
    align-items: center;

    .watch{
        background-color: #fff;
    }

    .list{
        background-color: #444;
        color: #fff;
        margin-bottom: -150px;
    }

    a{
        margin-right: 10px;
        padding: 10px 20px;
        border-radius: 5px;
        color: #000;
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        transition: .3s;

        &:hover{
            opacity: .7;
        }
    }
`

export const Gender = styled.div`
    margin-top: 15px;
    color: #ccc;
`