import styled from "styled-components";
interface ModalCalendarProps {
    setModalVisible: (arg: boolean) => void;
    onClick: () => void;
    value: string;
    setValue: any;
}
export const ModalCalendar: React.FC<ModalCalendarProps> = ({
    setModalVisible,
    onClick,
    value,
    setValue,
}) => {
    const Block = styled.div`
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    `;
    const Content = styled.div`
        width: 400px;
        height: 280px;
        background: #fff;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
    `;
    const TextField = styled.input`
        margin-bottom: 15px;
        width: 85%;
        height: 30px;
        border-radius: 5px;
        border: 1px solid black;
        transition: 0.2s;
        // &:focus {
        //     outline: 1px solid darkgray;
        //     border: 1px solid darkblue;
        // }
        // &:hover {
        //     border: 1px solid darkblue;
        // }
    `;
    const Buttons = styled.div`
        width: 100%;
        height: 60px;
        border-top: 1px solid black;
    `;
    const Button = styled.button`
        cursor: pointer;
        font-size: 18px;
        width: 50%;
        height: 100%;
        border: none;
        background: none;
        border-right: 1px solid black;
        &:last-child {
            border: none;
        }
    `;

    return (
        <Block onClick={() => setModalVisible(false)}>
            <Content onClick={(e) => e.stopPropagation()}>
                <TextField
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Buttons>
                    <Button onClick={() => setModalVisible(false)}>
                        Cancel
                    </Button>
                    <Button onClick={onClick}>OK</Button>
                </Buttons>
            </Content>
        </Block>
    );
};
