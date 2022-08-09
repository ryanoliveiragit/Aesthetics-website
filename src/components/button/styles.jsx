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
        margin-top: 2%!important;
        font-size: 0.9rem;
        font-weight: 400;
        color: white;
    }
`