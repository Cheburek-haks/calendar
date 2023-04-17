import styled from "styled-components";
import { IData } from "../types";
import React from "react";
import { Number } from "../../../shared";

interface DaysCalendarProps {
    data: any;
    swiperCount: number;
}

export const DaysCalendar: React.FC<DaysCalendarProps> = ({
    data,
    swiperCount,
}) => {
    const Block = styled.div`
        overflow: hidden;
        width: 89%;
        display: flex;
        margin-top: 15px;
        padding: 0px 36px;
    `;
    const Content = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-inline: 10px 32px;
        transform: translateX(${swiperCount}px);
        transition: transform ease-in-out 0.5s;
    `;

    const Title = styled.h4`
        margin-bottom: 5px;
        font-weight: 400;
    `;

    return (
        <Block>
            {data?.map((item: any) => (
                <Content onClick={() => item.onClick}>
                    <Title>{item.day}</Title>
                    <Number title={item.date} active={item.active} />
                </Content>
            ))}
        </Block>
    );
};
