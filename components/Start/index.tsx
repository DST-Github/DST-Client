import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Start: React.FC = () => {
  return (
    <S.Positioner>
      <S.StartWrapper>
        <span>Design Project Collaboration</span>
      </S.StartWrapper>
      <S.Background>
        <Image
          src={"/backgroundFigure.png"}
          layout="fixed"
          width={320}
          height={300}
        />
      </S.Background>
      <S.StartBtn>
        <Link href="/dashboard">시작하기</Link>
      </S.StartBtn>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Background: styled.div`
    position: absolute;
    top: calc(50% - 200px);
  `,
  StartWrapper: styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    span {
      font-weight: 300;
      font-size: 72px;
      line-height: 83px;

      color: #ffffff;
    }
  `,
  StartBtn: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    & > * {
      padding: 20px 60px;
      margin-top: 100px;
      border: 2px solid #ffffff;
      box-sizing: border-box;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;

      color: #ffffff;
    }
  `,
};
export default Start;
