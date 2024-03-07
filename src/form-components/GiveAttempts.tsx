/* eslint-disable brace-style */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element 
{
    const [attemptsTotal, setAttemptsTotal] = useState(3);
    const [askedAttempts, setAskedAttempts] = useState("");

    const decreaseAttempts = () => 
    {
        if (attemptsTotal > 0)
        {
            setAttemptsTotal(prevAttempts => prevAttempts - 1);
        }
    };
    const increaseAttempts = () => 
    {
        const request = parseInt(askedAttempts);
        if (!isNaN(request) && request > 0)
        {
            setAttemptsTotal(prevAttempts => prevAttempts + request);
            setAskedAttempts("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsTotal}</p>
            <input
                type="number"
                value={askedAttempts}
                onChange={(e) => setAskedAttempts(e.target.value)}
            />
            <Button onClick = {decreaseAttempts} disabled={attemptsTotal == 0}>
                Use
            </Button>
            <Button onClick={increaseAttempts}>
                Gain
            </Button>
        </div>
    );
}
