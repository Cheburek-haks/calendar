import styled from "styled-components";
import { ClickIcon } from "./../../shared";
import iconPlus from "../../shared/assets/img/iconPlus.svg";

export const InterviewCalendar = () => {
    const Block = styled.div`
        padding: 30px 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const Title = styled.h1`
        font-family: sans-serif;
    `;

    return (
        <Block>
            <Title>Interview Calendar</Title>
            <ClickIcon size="small" icon={iconPlus} />
        </Block>
    );
};
