/* eslint-disable brace-style */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element 
{
    const [isEditMode, setIsEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [studentStatus, setStudentStatus] = useState(true);

    const enableEditMode = () => 
    {
        setIsEditMode(!isEditMode);
    };

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => 
    {
        setUserName(event.target.value);
    };

    const handleStudentStatus = () => 
    {
        setStudentStatus(!studentStatus);
    };
    return (
        <div>
            <Form>
                <Form.Group controlId="editModeToggle">
                    <Form.Check
                        type="switch"
                        id="editModeToggle"
                        label="Edit Mode"
                        checked={isEditMode}
                        onChange={enableEditMode}
                    />
                </Form.Group>
  
                {!isEditMode ? (
                    <div>
                        <p>
                            {userName} is {studentStatus ? "a student" : "not a student"}
                        </p>
                    </div>
                ) : (
                    <div>
                        <Form.Group controlId="userName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={userName}
                                onChange={handleUserNameChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="studentStatus">
                            <Form.Check
                                type="checkbox"
                                label="Are you a student?"
                                checked={studentStatus}
                                onChange={handleStudentStatus}
                            />
                        </Form.Group>
                    </div>
                )}
            </Form>
        </div>
    );
}
