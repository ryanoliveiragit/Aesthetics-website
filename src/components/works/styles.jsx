import styled from "styled-components";

export const WorksSectionStyle = styled.div`
    color: white;
    height: 100vh;
    color: var(--text);
    background-color: azure;
    position: absolute;
    width: 100%;
    .titleWork {
        margin-top: 5%;
        align-items: center;
        text-align: center;
    }
    .give>h3 {
        padding-top: 12%;
        font-size: 0.9rem;
    }
    .take>h3 {
        padding-top: 12%;
        font-size: 0.9rem;
    }
    .receive>h3 {
        padding-top: 12%;
        font-size: 0.9rem;
    }
    .iconsWorks {
        text-align: center;
        margin-top: 4%;
        font-size: 0.6rem;
        padding: 1% 20%;
        display: flex;
        justify-content: space-around;
        align-items: center; 
    }
    .img {
        margin-top: 5%;
        margin-bottom: 5%;
        display: flex;
    }
    .titleWorks {
        width: 25%;
    }
    img {
        margin-right: 2%;
        margin-left: 22%;
        width: 30%;
    }
`