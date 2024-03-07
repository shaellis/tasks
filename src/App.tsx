/* eslint-disable prettier/prettier */
import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Shamus Ellis CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <h1>This is my header for Task 3!</h1>
            <img src="https://sabr.org/wp-content/uploads/2020/09/Schmidt-Mike-Phillies-1979-600x400-1.jpg" alt="The Best Baseball Player" />
            <Button onClick={ () => console.log ("Hello World!") }>Log Hello World</Button>
            Unordered List:
            <ul>
                <li>My favorite sport is Baseball</li>
                <li>My favorite team is the Phillies</li>
                <li>My favorite Phillie is Mike Schimdt</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            className= "App"
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            className= "App"
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default App;