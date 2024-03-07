/* eslint-disable brace-style */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element 
{
    const [selectedColor, setSelectedColor] = useState<string>("black");

    const Colors = 
    [
        {label: "Red", value: "red"},
        {label: "Orange", value: "orange"},
        {label: "Yellow", value: "yellow"},
        {label: "Green", value: "green"},
        {label: "Blue", value: "blue"},
        {label: "Purple", value: "purple"},
        {label: "Cyan", value: "cyan"},
        {label: "Magenta", value: "magenta"},
    ];

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => 
    {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {Colors.map((color, index) => (
                    <Form.Check
                        key = {index}
                        type = "radio"
                        label = {color.label}
                        id = {"color-${index}"}
                        inline
                        value = {color.value}
                        checked = {selectedColor === color.value}
                        onChange ={handleColorChange}
                    />
                ))}
            </Form>
            <div data-testid = "colored-box" style = {{ backgroundColor: selectedColor }}>
                <span style={{ color: selectedColor == "white" || selectedColor == "yellow" ? "black" : "white" }}>{selectedColor}</span>
                Example Text!
            </div>
        </div>
    );
}
