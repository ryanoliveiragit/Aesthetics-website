import styled from "styled-components";

export const ButtonStyle = styled.button`
    justify-content: center;
    margin-top: 8%;
    display: flex;
    align-items: center;
    width: 20%;
    padding: 1.3%;
    font-size: 1rem;
    border: none;
    background-color: var(--button);
    border-radius: 3px;
    color: white;
    &.browns {
        padding: 0%;
        align-items: left;
        justify-content: left;
        margin-top: 2%!important;
        font-size: 0.9rem;
        font-weight: 400;
        color: var(--text);
        background-color: var(--transparent)!important;
    }
    &.buttonStyleOrange {
        background-color: var(--orange);
        color: var(--paragraph);
    }
`