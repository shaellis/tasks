/* eslint-disable brace-style */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element 
{
    const [numberAttempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setQuizInProgress(true);
        setAttempts(numberAttempts - 1);
    };

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || numberAttempts < 1}
            > 
                Start Quiz
            </Button>
            <Button 
                onClick={() => setQuizInProgress(false)} 
                disabled={!quizInProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(numberAttempts + 1)}
                disabled={quizInProgress}
            >
                Mulligan
            </Button>
            Number of Attempts: <span> {numberAttempts}</span>
        </div>
    );
}
