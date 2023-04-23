import React from "react";
import styled from "styled-components";
interface TableProps {
    data: any;
}
export const Table: React.FC<TableProps> = ({ data }) => {
    const Table = styled.table`
        width: 100%;
        margin-top: 10px;
        border-collapse: collapse;
    `;
    const Tr = styled.tr``;
    const Th = styled.td`
        height: 50px;
        width: 4%;
        max-width: 14%;
        background: black;
        color: #fff;
        padding: 0;
        position: relative;
        &:first-child {
            background: #fff;
        }
    `;
    const Td = styled.td`
        cursor: pointer;
        height: 50px;
        width: 10%;
        max-width: 14%;
        color: #fff;
        padding: 0;
        position: relative;
        border-top: 1px solid rgb(194, 198, 203);
        border-right: 1px solid rgb(194, 198, 203);
        &:first-child {
            background: #fff;
        }
        &:last-child {
            border-right: none;
        }
    `;

    const Title = styled.h5`
        color: #c2c6cb;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 7%;
        position: absolute;
        top: -8px;
    `;

    const Content = styled.div`
        margin: auto;
        width: 90%;
        height: 90%;
        transition: 0.2s;
        &:hover {
            background: rgba(0, 0, 0, 0.2);
        }
    `;

    return (
        <Table>
            {data.map((item: any, indexOne: number) => (
                <Tr key={indexOne}>
                    <Th>
                        <Title>{item.hour}</Title>
                    </Th>
                    {item.content.map((cells: any, indexTwo: number) => (
                        <Td
                            onClick={() =>
                                cells.onClick(indexOne, indexTwo, cells.title)
                            }
                            key={indexTwo}
                        >
                            <Content
                                style={{
                                    background:
                                        cells.title.length > 0 ? "green" : "",
                                }}
                            ></Content>
                        </Td>
                    ))}
                </Tr>
            ))}
        </Table>
    );
};
