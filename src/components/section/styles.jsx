import styled from "styled-components";

export const BackgroundSection = styled.section`
  background-color: white;
  height: 100%;
  align-items: columns;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .direction>img {
    padding: 1%;
    width: 50%;
    border-radius: 25px;
  }
  .parentSection {
    width: 100%;
  }
  .titleSection {
    text-align: center;
    padding: 5%;
  }
  .direction{
    align-items: center;
    display: flex;
  }
  .text {
    margin-left: 5%;
  }
  .right {
    margin-top: 0%!important;
  }
  .right>.text {
    margin-right: 5%;
  }
`