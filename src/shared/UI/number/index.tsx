import React from "react";
import styled from "styled-components";

interface NumberProps {
    title: string;
}

export const Number: React.FC<NumberProps> = ({ title }) => {
    const Block = styled.div`
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 100%;
        transition: 0.2s;
        &:hover {
            color: #fff;
            background: #ff3030;
        }
    `;

    const Content = styled.span`
        font-family: sans-serif;
    `;
    return (
        <Block>
            <Content>{title}</Content>
        </Block>
    );
};
