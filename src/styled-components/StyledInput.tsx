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
    
    input {
        padding: 10px 35px;
        border: 2px solid;    
    }

    &:before {
        content: '';
        height: 2px;
        width: 50%;
        background-color: #000;
        position: absolute;
        top: 90%;
        right: ${props => props.active ? "50%" : "100%"};
        transition: 0.2s;
    }
    &:after {
        content: '';
        height: 2px;
        width: 50%;
        background-color: #000;
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
