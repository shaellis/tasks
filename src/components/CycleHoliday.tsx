/* eslint-disable brace-style */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = 
[
    { name: "Dragon Boat Festival", emoji: "🎏" },
    { name: "Halloween", emoji: "🎃"},
    { name: "Diwali", emoji: "🪔" },
    { name: "Christmas", emoji: "🎄"},
    { name: "Birthday", emoji: "🎂"}
];

export function CycleHoliday(): JSX.Element 
{
    const [currentHoliday, setCurrentHoliday] = useState(0);

    const getNextHolidayABC = () => 
    {
        setCurrentHoliday((currentHoliday + 1) % holidays.length);
    };

    const getNextHolidayByYear = () => 
    {
        setCurrentHoliday((currentHoliday + 1) % holidays.length);
    };

    return (
        <div>
            <p>Holiday: {holidays[currentHoliday].emoji}</p>
            <Button onClick={getNextHolidayABC}>
                Advance by Alphabet
            </Button>
            <Button onClick={getNextHolidayByYear}>
                Advance by Year
            </Button>
        </div>
    );
}
