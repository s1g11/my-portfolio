import { useState } from "react";
import styled from "styled-components";

type StyledInputType = {
    placeholder?: string
    type?: string
}

export const StyledInput = (props: StyledInputType) => {
    
    const [isActiveInput, setIsActiveInput]= useState(false)
    
    return (
        <StyledLabel active={isActiveInput} className={isActiveInput ? "active" : ""}>
            <input onFocus={() => setIsActiveInput(true)} onBlur={() => setIsActiveInput(false)} name="email" type={props.type || "string"} placeholder={props.placeholder} />
        </StyledLabel>
    )
}

type StyledLabelPropsType = {
    active: boolean
}

export const StyledLabel = styled.label<StyledLabelPropsType>`
    position: relative;
    overflow: hidden;
    color: ${props => props.theme.colors.black};
    
    input {
        width: 100%;
        padding: 10px 35px;
        border: 2px solid ${props => props.theme.colors.black};    
    }

    &:before {
        content: '';
        height: 2px;
        width: 50%;
        background-color: ${props => props.theme.colors.black};
        position: absolute;
        top: 90%;
        right: ${props => props.active ? "50%" : "100%"};
        transition: 0.2s;
    }
    &:after {
        content: '';
        height: 2px;
        width: 50%;
        background-color: ${props => props.theme.colors.black};
        position: absolute;
        top: 90%;
        left: ${props => props.active ? "50%" : "100%"};
        transition: 0.2s;
    }     
    
    &:hover {
        &:before {
            opacity: 1;
            right: 50%;
        }
        &:after {
            opacity: 1;
            left: 50%;
        }
    }

`;
