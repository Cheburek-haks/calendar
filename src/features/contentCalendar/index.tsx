import styled from "styled-components";
import { Table } from "../../entities";
import React from "react";

export const ContentCalendar = () => {
    const Block = styled.div`
        height: 400px;
        // overflow: hidden;
        padding: 0 10px;
        display: flex;
    `;

    const [data, setData] = React.useState([
        {
            hour: "1:00",
            content: [
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
            ],
        },
        {
            hour: "2:00",
            content: [
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
            ],
        },
        {
            hour: "3:00",
            content: [
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
            ],
        },
        {
            hour: "4:00",
            content: [
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
            ],
        },
        {
            hour: "5:00",
            content: [
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
                {
                    active: false,
                    onClick: (arg: any, agg2: any) => handleClick(arg, agg2),
                },
            ],
        },
    ]);

    const handleClick = (indexOne: number, indexTwo: number) => {
        const bool = data[indexOne].content[indexTwo].active;

        setData((prev) => {
            prev[indexOne].content[indexTwo].active = !bool;
            return [...prev];
        });

        console.log(data);
    };

    return (
        <Block>
            <Table data={data} />
        </Block>
    );
};
