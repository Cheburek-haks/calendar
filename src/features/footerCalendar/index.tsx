import styled from "styled-components";
interface FooterCalendarProps {
    value: string;
}
export const FooterCalendar: React.FC<FooterCalendarProps> = ({ value }) => {
    const Block = styled.div`
        height: 45px;
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        border-radius: 0 0 7px 7px;
    `;
    const Title = styled.h2`
        font-size: 20px;
        font-weight: 400;
        color: #ff5252;
        cursor: pointer;
    `;
    return (
        <Block>
            <Title>Today</Title>
            <Title>Delete</Title>
        </Block>
    );
};
