import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const InputContainer = styled.div`
    display: flex;
    width: 80%;
    max-width: 70%;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 40px;
    background-color: blueviolet;
    border-radius: 10px;


    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Selector = styled.select`
    border-radius: 10px;
    width: 130px;
    height: 30px;
    border: none;
    font-size: 16px;
    color: blueviolet;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
    }
`

export const Option = styled.option`
    border-radius: 10px;
    width: 60px;
    height: 30px;
    border: none;
    color: blueviolet;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
    }
`

export const RandomizeBtn = styled.button`
    border-radius: 10px;
    padding: 5px;
    border: none;
    font-size: 16px;
    width: 120px;
    height: 30px;
    color: blueviolet;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
    }
`

export const SortBtn = styled.button`
    border-radius: 10px;
    width: 60px;
    height: 30px;
    border: none;
    font-size: 16px;
    color: blueviolet;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
    }
`

export const StopBtn = styled.button`
    border-radius: 10px;
    width: 60px;
    height: 30px;
    border: none;
    font-size: 16px;
    color: blueviolet;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
    }
`

export const BarContainer = styled.div`
    display: flex;
    width: 70%;
    height: 400px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 75px;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`

export const Bars = styled.div`
    width: 40px;
    height: ${({prop})=>(prop*3)}px;
    background-color: ${({bG}) => (bG)};
    margin: 0px 3px;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    :hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
    }
`

export const Slider = styled.input`
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
    }
`

export const LengthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SpeedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Text = styled.h2`
    margin-right: 10px;
    font-size: 16px;
    color: white;
    transition: all 0.2s ease-in-out;
    :hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
    }
`