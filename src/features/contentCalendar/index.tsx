import styled from "styled-components";
import { Table } from "../../entities";

interface ContentCalendarProps {
    data: any;
}

export const ContentCalendar: React.FC<ContentCalendarProps> = ({ data }) => {
    const Block = styled.div`
        height: 400px;
        overflow: scroll;
        padding: 0 5px;
        display: flex;
    `;

    return (
        <Block>
            <Table data={data} />
        </Block>
    );
};
