import styled from "styled-components";

export const Container = styled.div`
    color: var(--textPrimary);
    font-weight: 400;
    nav {
        display: flex;
        justify-content: space-between
    }
    ul {
        display: flex;
    }
    li {
        color: var(--textPrimary);
        font-size: 0.8vw;
        margin-left: 40px;
        text-decoration: none;
        list-style: none;
    }
    .name {
        font-size: 1.1vw;
        font-weight: 900;
    }
`
