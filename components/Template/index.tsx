import React from 'react';
import styled from 'styled-components';
import { Logo, Menu, AddIcon, FileIcon, GithubIcon } from './../../assets';

const Template: React.FC = ({children}) => {
    return(
        <S.Positioner>
            <S.LogoPlace>
                <Logo />
                <S.LogoText>
                    Designer & Frontend project tool
                </S.LogoText>        
            </S.LogoPlace>
            <S.Container>
                <S.Side />
                <S.SideMenu>
                    <S.Icons><Menu /></S.Icons>
                    <S.Icons><AddIcon /></S.Icons>
                    <S.Icons><FileIcon /></S.Icons>
                    <S.GitIcon><GithubIcon /></S.GitIcon>
                </S.SideMenu>

                <S.Content>
                    {children}
                </S.Content>               
            </S.Container>          
        </S.Positioner>
    )
}

const S = {
    Positioner: styled.div`
        display: flex;
        flex-direction: column;
        width : 100vw;
        height : 100vh;
    `,
    LogoPlace: styled.div`
        display: flex;
        align-items: center;
        width: auto;
        height: 50px;

        padding-top: 20px;
        padding-left: 20px;
        color: #AAAAAA;
    `,
    LogoText: styled.div`
        padding-left: 10px;
    `,
    SideMenu: styled.div`
        display: flex;
        position: fixed;

        flex-direction: column;
        top: 100px;
        align-items:center;
        width: 50px;
        height: auto;
        margin-top: 100px;
        padding-left: 10px;
    `,
    Side: styled.div`
        display: flex;
        width: 50px;
        height: auto;
        margin-top: 100px;
        padding-left: 10px;
    `,
    Icons: styled.div`
        margin-top: 30px;

        &:hover {
            cursor: pointer;
        }
    `,
    GitIcon: styled.div`
        position: fixed;

        top: 685px;
        left: 12px;

        &:hover {
            cursor: pointer;
        }
    `,
    Container: styled.div`
        display: flex;
        width: 100%;
        height: 90%;
    `,
    Content: styled.div`
        width: 90%;
        height: 90%;

        margin-left: 20px;
    `
}

export default Template;