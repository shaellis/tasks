/* eslint-disable brace-style */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element 
{
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        setSelectedOption(event.target.value);
    };

    const isCorrect = selectedOption == expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form>
                <Form.Group controlId = "multipleChoiceSelect">
                    <Form.Control as = "select" value = {selectedOption} onChange = {handleOptionChange}>
                        {options.map((option, index) => (
                            <option key = {index} value = {option}>
                                {option}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>
            {isCorrect ? (
                <p>✔️</p>
            ) : (
                <p>
                    ❌
                </p>
            )}
        </div>
    );
}
