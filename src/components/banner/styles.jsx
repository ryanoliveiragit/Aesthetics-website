import styled from "styled-components";
import Background from '../../assets/Backgroundteste.jpg'

export const BackgroundBanner = styled.section`
  align-items: columns;
  padding: 0% 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  .photo>img {
    width: 50%;
  }
  .parentSection {
    width: 100%;
  }
  .photo {
    align-items: center;
    display: flex;
  }
  .text {
    margin-left: 5%;
  }
  &.size {
    font-size: 2rem;
  }
  `