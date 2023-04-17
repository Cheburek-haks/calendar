import styled from "styled-components";
import React from "react";
import {
    ContentCalendar,
    ControllerCalendar,
    InterviewCalendar,
} from "../../features";

export const Calendar = () => {
    const Block = styled.div`
        width: 560px;
        border: 3px solid #c2c6cb;
        border-radius: 10px;
    `;

    return (
        <Block>
            <InterviewCalendar />
            <ControllerCalendar />
            <ContentCalendar />
        </Block>
    );
};
