import React from "react";
import * as S from "./Button.style";
import git2 from "../../assets/github.svg";

function Button({ children, handleClick, color, type, target, href }) {
  switch (type) {
    case "github":
      return (
        <S.Blink color={color} target={target} href={href}>
          <S.Svg src={git2} />
          {children}
        </S.Blink>
      );

    default:
      return (
        <S.Button onClick={handleClick} color={color}>
          {children}
        </S.Button>
      );
  }
}

export default Button;
