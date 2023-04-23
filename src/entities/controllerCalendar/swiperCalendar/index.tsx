import styled from "styled-components";
import { ClickIcon } from "../../../shared";
import iconArrowRight from "../../../shared/assets//img/iconArrowRight.svg";
import iconArrowLeft from "../../../shared/assets//img/iconArrowLeft.svg";
import React from "react";

export const SwiperCalendar: React.FC<any> = ({ setSwiperCount, setPage }) => {
    const Block = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const Title = styled.h4`
        font-size: 18px;
        font-weight: 400;
    `;

    return (
        <Block>
            <ClickIcon
                onClick={() => {
                    setSwiperCount((prev: number) =>
                        prev > -504 ? prev : prev + 504
                    );
                }}
                size="small"
                icon={iconArrowLeft}
            />
            <Title>March 2019</Title>
            <ClickIcon
                onClick={() => {
                    setSwiperCount((prev: number) => prev - 504);
                }}
                size="small"
                icon={iconArrowRight}
            />
        </Block>
    );
};
