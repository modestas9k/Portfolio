import styled from "styled-components";
import theme from "../../theme";

export const Button = styled.button`
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5em 2em;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.background
        : props.theme.secondary.hover.background};
  }
  &:focus {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.focus.background
        : props.theme.secondary.focus.background};
  }
`;

export const Blink = styled.a`
  background: ${(prop) => theme.colors[prop.color]};
  display: inline-block;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;

  z-index: 1;
  padding: 0.5rem 2em;
  text-align: center;
  color: ${theme.colors.black};
  border-radius: 10px;

  align-items: center;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    to right,
    hsl(211, 100%, 50%),
    hsl(179, 100%, 30%)
  );
  &::before {
    position: absolute;
    content: "";
    border-radius: 10px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      hsl(344, 100%, 50%),
      hsl(31, 100%, 40%)
    );
    /* border-bottom: 2px solid #d3f3ee;
    border-right: 1px solid #d3f3ee; */

    z-index: -1;
    transition: opacity 0.3s linear;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const Svg = styled.img`
  width: 24px;
  margin-right: 10px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    305deg,
    rgba(255, 255, 255, 0.20351890756302526) 0%,
    rgba(255, 255, 255, 0.8337710084033614) 100%
  );
  border-radius: 50px;
`;
