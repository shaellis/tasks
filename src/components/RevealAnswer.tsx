/* eslint-disable brace-style */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element 
{
    const [visible, setToVisible] = useState(false);

    const showAnswer = () => 
    {
        setToVisible(!visible);
    };

    return (
        <div>
            <Button onClick = {showAnswer}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
