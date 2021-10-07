import React, { useState } from 'react';
import { AppContainer, InputContainer, Selector, Option, RandomizeBtn, Slider, SortBtn, Bars, BarContainer, Text, StopBtn, LengthContainer, SpeedContainer } from "./AppElements";

const AppSection = () => {
    const [array, setArray] = useState([44,22,67,19,24,90,34,39,44,22,67,19,24,90,34,39,12,88,13,55]);
    const [colorKey, setColorKey] = useState(["blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet","blueviolet"])
    const [size, setSize] = useState(20);
    const [sortChoice, setSortChoice] = useState("Bubble Sort");
    const [speed, setSpeed] = useState(200);
    const [isRunning, setIsRunning] = useState(false);

    const speedSlider = (event) => {
        setSpeed(event.target.value);
    }

    const sliderSize = (event) => {
        setSize(event.target.value);
    }

    const setChoice = (event) => {
        setSortChoice(event.target.value);
    }
    

    const combinedFunction = (event) => {
        sliderSize(event);
        arrayGenerator();
    }

    const arrayGenerator = () => {
        let somearray = [];
        let someColor = [];
        for(let i=0 ; i<size ; i++) {
            somearray.push(Math.floor((Math.random()+0.10)*100));
        }
        for(let i=0 ; i<size ; i++) {
            someColor.push("blueviolet");
        }
        setArray(somearray);
        setColorKey(someColor);
    }
    
    function waitMe(ms) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                },ms);
            })
    }

    const changeColor = async (j) => {
        await waitMe(speed);
        colorKey[j] = "blueviolet";
    }

    const sortingAlgorithms = async () => {
        setIsRunning(true);
        let arr = [...array];
        switch(sortChoice) {
            case "Bubble Sort":
                let flag = true;
                while(flag) {
                    flag = false;
                    for( let i=0 ; i<arr.length-1 ; i++ ) {
                        colorKey[i] = "red";
                        colorKey[i+1] = "red";
                        await waitMe(speed);
                        if( arr[i] > arr[i+1] ) {
                            let temp = arr[i];
                            arr[i] = arr[i+1];
                            arr[i+1] = temp;
                            flag = true;
                            colorKey[i] = "green";
                            colorKey[i+1] = "green";
                        }
                        setArray([...arr]);
                        colorKey[i] = "blueviolet";
                        colorKey[i+1] = "blueviolet";
                    }
                }
                for(let i=0 ; i<colorKey.length ; i++) {
                    colorKey[i] = "blueviolet";
                }
                setArray([...arr]);
                break;
            case "Selection Sort":
                for(let i=0 ; i<arr.length ; i++) {
                    let min = arr[i];
                    let minIndex = i;
                    for(let j=i+1 ; j<arr.length ; j++) {
                        colorKey[i] = "red";
                        colorKey[j] = "red";
                        await waitMe(speed);
                        if(min > arr[j]) {
                            if(i!==minIndex)
                                changeColor(minIndex);
                            min = arr[j];
                            minIndex = j;
                            if(i!==minIndex)
                                colorKey[minIndex] = "green";
                        }
                        if(j!==minIndex)
                            changeColor(j);
                        setArray([...arr]);
                    }
                    let temp = arr[i];
                    arr[i] = arr[minIndex];
                    arr[minIndex] = temp;
                    changeColor(minIndex);
                    changeColor(i);
                    setArray([...arr]);
                }
                for(let i=0 ; i<colorKey.length ; i++) {
                    colorKey[i] = "blueviolet";
                }
                setArray([...arr]);
                break;

            case "Insertion Sort":
                for(let i=1 ; i<arr.length ; i++) {
                    let j = i-1;
                    let key = arr[i];
                    
                    while(true) {
                        await waitMe(speed);
                        if(j<0 || arr[j] < key) {
                            arr[j+1] = key;
                            colorKey[j+1] = "green";
                            break;
                        }
                        else {
                            arr[j+1] = arr[j];
                            colorKey[j] = "red";
                            j--;
                        }
                        setArray([...arr]);
                    }
                    for(let i=0 ; i<colorKey.length ; i++) {
                        changeColor(i);
                    }
                    setArray([...arr]);
                }
                for(let i=0 ; i<colorKey.length ; i++) {
                    colorKey[i] = "blueviolet";
                }
                setArray([...arr]);
                break;

            case "Quick Sort":
                // code here
                break;

            default:
                break;
        }
        
        setIsRunning(false);
    }
    return (
        <>
            <AppContainer>
                <InputContainer>
                    <Selector onClick={setChoice}>
                        <Option>Bubble Sort</Option>
                        <Option>Selection Sort</Option>
                        <Option>Insertion Sort</Option>
                    </Selector>
                    <LengthContainer>
                        <Text>Length Of Array: </Text>
                        <Slider type="range" min={10} max={30} step={1} value={size} onChange={combinedFunction} disabled={isRunning} ></Slider>
                    </LengthContainer>
                    <RandomizeBtn onClick={arrayGenerator} disabled={isRunning} >Randomize</RandomizeBtn>
                    <SpeedContainer>
                        <Text>Speed: </Text>
                        <Slider type="range" min={200} max={2000} step={1} value={speed} onChange={speedSlider} disabled={isRunning} ></Slider>
                    </SpeedContainer>
                    <SortBtn onClick={sortingAlgorithms} disabled={isRunning} >Sort</SortBtn>
                </InputContainer>
                <BarContainer>{
                    array.map(function(array, index){
                        return <Bars key={index} prop={array} bG={colorKey[index]}>{array}</Bars>
                    })    
                }</BarContainer>
            </AppContainer>
        </>
    )
}

export default AppSection
