import React from 'react';
import { TopBarContainer, Logo, Title } from "./TopBarElements";
import logo from "../../images/graph-bar.svg";

const TopBarSection = () => {
    return (
        <>
            <TopBarContainer id="topbar">
                <Logo src={logo}></Logo>
                <Title>Sorting Visualizer</Title>
            </TopBarContainer>
        </>
    )
}

export default TopBarSection