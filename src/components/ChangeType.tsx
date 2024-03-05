/* eslint-disable brace-style */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element 
{
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const processChangeType = () => 
    {
        setQuestionType(
            questionType == "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            <Button onClick={processChangeType}>Change Type</Button>
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {questionType === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
