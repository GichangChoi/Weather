import React, {useState} from "react";
import styled, {createGlobalStyle, css} from "styled-components";
import Weather from "../../weather/weather";
import Osaka from "../osaka";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        width: 100%;
        margin: 0;
    }
`;

function Main() {
    const [cold, setCold] = useState();
    //오른쪽 오사카 버튼
    return (
        <div style={{display: "flex"}}>
            <Wrapper className="App" cold={cold}>
                <GlobalStyle/>
                <Weather setCold={setCold}/>
            </Wrapper>

            <div style={{
                height: "50px", color: "white",
                fontSize: "25px", cursor: "pointer", position: "absolute", top: "calc(50% - 50px)", right: "10px"
            }}>Osaka
            </div>
        </div>
    );
}

export default Main;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: cornflowerblue;
    ${(props) =>
            props.cold &&
            css`
                background-color: skyblue;
            `}
`;