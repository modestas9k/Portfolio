import React from "react";
import { Card, Button, Section } from "../../components";
import * as S from "./Home.style";
import Img1 from "../../assets/wineSite1.png";
import theme from "../../theme";

function Home() {
  return (
    <>
      <S.Hero>
        <Section>
          <S.HI>Hi</S.HI>
          <S.H1>I'm Modestas Skirius</S.H1>
          <S.P>
            And this portfolio are all about me getting{" "}
            <S.Strong>Front-End</S.Strong> developer job
          </S.P>
          {/* <S.H2>and this is my portfolio site.</S.H2> */}
          <S.PhotoLink>
            <S.aLink
              target="_blank"
              rel="noreferrer"
              href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >
              Photo by Paweł Czerwiński
            </S.aLink>
          </S.PhotoLink>
        </Section>
      </S.Hero>
      <Section background={theme.colors.yellow}>
        <S.H2>
          Let's see <S.Strong>work</S.Strong> or <S.Strong>bio</S.Strong>?
        </S.H2>
      </Section>
      <Section background={theme.colors.green}>
        <S.CardHolder>
          <Card
            img={Img1}
            alt="wine site screenshot"
            title="Wine Site"
            description="This was cool exercise to connect react, node.js and Azure mySql database"
            color="green"
          >
            <Button
              type="github"
              target="_blank"
              href="https://github.com/modestas9k/WineSite"
            >
              See Code
            </Button>
          </Card>
        </S.CardHolder>
      </Section>
    </>
  );
}

export default Home;
