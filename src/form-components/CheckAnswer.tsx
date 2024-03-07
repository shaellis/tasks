/* eslint-disable brace-style */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element 
{
    const [inputAnswer, setInputAnswer] = useState("");

    const processChange = (event: React.ChangeEvent<HTMLInputElement>) => 
    {
        setInputAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={inputAnswer} onChange={processChange} />
            {inputAnswer == expectedAnswer ? (
                <span>✔️</span>
            ) : (
                <span>❌</span>
            )}
        </div>
    );
}
