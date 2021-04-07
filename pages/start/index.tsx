import React from "react";
import styled from "styled-components";
import { Start } from "../../components";

const StartPage: React.FC = () => {
  return (
    <S.Positioner>
      <Start />
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
  `,
};

export default StartPage;
