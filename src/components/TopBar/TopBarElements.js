import styled from "styled-components";

export const TopBarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    background-color: blueviolet;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }
`

export const Logo = styled.img`
    height: 32px;
    width: 32px;
    align-self: center;
    margin-left: 50px;
    transition: all 0.2s ease-in-out;
    :hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
        height: 24px;
        width: 24px;
        margin-left: 0px;
    }
`

export const Title = styled.div`
    align-self: center;
    margin-left: 25px;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    :hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        margin-left: 8px;
    }
`


