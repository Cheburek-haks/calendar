import React from "react";
import styled from "styled-components";

interface ClickIconProps {
    icon: string;
    size?: string;
    onClick?: () => void;
}

export const ClickIcon: React.FC<ClickIconProps> = ({
    icon,
    size,
    onClick,
}) => {
    const IconBlock = styled.div`
        cursor: pointer;
        display: inline-flex;
        padding: 5px;
        border-radius: 100%;
        transition: 0.2s;
        &:hover {
            background: rgba(0, 0, 0, 0.2);
        }
    `;

    const ImgPrimary = styled.img`
        width: 18px;
        height: 18px;
    `;
    const ImgSecodary = styled.img`
        width: 20px;
        height: 20px;
    `;
    return (
        <IconBlock onClick={onClick}>
            {size === "small" && <ImgPrimary src={icon} alt={icon} />}
            {size === "large" && <ImgSecodary src={icon} alt={icon} />}
        </IconBlock>
    );
};
