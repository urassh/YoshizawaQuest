import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import '../App.css';

const Top = () => {
    const navigate = useNavigate();

    const moveAnswerView = () => {
        navigate("/answer")
    }

    return(
        <React.StrictMode>
            <div id="top-bg">
                <SUB_TITLE>3-3専用クイズアプリ</SUB_TITLE>
                <TITLE>YOSHIZAWA QUEST</TITLE>
                <Button onClick={moveAnswerView}>クイズに挑戦</Button>
            </div>
        </React.StrictMode>
    );
}

const TITLE = styled.h1`
    margin-bottom: 280px;
    font-family: "Noto Serif JP";
`;

const SUB_TITLE = styled.h3`
    font-family: "ヒラギノ丸ゴ ProN";
    font-size: 20px;
    
`;

const Button = styled.button`
    width: 100%;
    height: 48px;
    margin-top: 16px;
    padding:16px 0 ;
    line-height: 48px;
    border-radius: 8px;
    color: white;
    background-color: #ff4343;
    font-family: "ヒラギノ丸ゴ ProN";
    font-size: 24px;
`;

export {Top};