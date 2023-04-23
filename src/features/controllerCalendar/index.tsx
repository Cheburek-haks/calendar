import React from "react";
import styled from "styled-components";
import { DaysCalendar, SwiperCalendar } from "../../entities";
import { getCurrentWeek } from "../../shared";

interface ControllerCalendarProps {}

export const ControllerCalendar: React.FC<ControllerCalendarProps> = ({}) => {
    const Block = styled.div`
        padding: 5px 15px;
        background: rgba(194, 198, 203, 0.2);
        border-top: 2px solid #c2c6cb;
        border-bottom: 2px solid #c2c6cb;
    `;

    const Title = styled.h1`
        font-family: sans-serif;
    `;

    const { days } = getCurrentWeek();
    const [swiperCount, setSwiperCount] = React.useState<number>(0);
    const [data, setData] = React.useState<any>(days);

    return (
        <Block>
            <DaysCalendar data={data} swiperCount={swiperCount} />
            <SwiperCalendar setData={setData} setSwiperCount={setSwiperCount} />
        </Block>
    );
};
