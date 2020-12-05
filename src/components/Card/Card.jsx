import React from "react";
import * as S from "./Card.style";

function Card({ img, alt, title, description, children, color }) {
  return (
    <S.Card color={color}>
      <S.Colum1>
        <S.Img src={img} alt={alt} />
      </S.Colum1>
      <S.Colum2>
        <S.Text>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Text>
        <S.LinkWrapper>{children}</S.LinkWrapper>
      </S.Colum2>
    </S.Card>
  );
}

export default Card;
