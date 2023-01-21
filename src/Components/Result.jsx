import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { QUESTIONS, Quiz } from './questionData';

const Result = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const [result, setResult] = useState("");
    const [isFinal, setIsFinal] = useState(false);

    useEffect(()=>{
        showResult();
    });
    
    const TransTop = () => {
        console.log(`Quiz index : ${Quiz.index}`);
        console.log(`Quiz MIN : ${Quiz.MIN}`);
        console.log(`Question length : ${QUESTIONS.length}`);
        Quiz.correctCount = Number(location.state.correct);
        if(Quiz.MIN === QUESTIONS.length){
            Quiz.MIN = 0;
            navigate("/final");
        } else {
            navigate("/");
        }
       
        
    }

    const showResult = () => {
        if (Quiz.MIN === QUESTIONS.length) {
            setIsFinal(true);
        }
        if(Number(location.state.correct) === QUESTIONS.length) {
            setResult("全問正解です。");
        } else {
            setResult(`${location.state.correct}問正解!!`);
        }
    }

    const showFinalView = (isFinal) => {
        if (isFinal) {
            return <Button onClick={TransTop}>クイズを終わる。</Button>
        } else {
            return <Button onClick={TransTop}>クイズを続ける。</Button>
        }
    }
    
    return(
        <React.StrictMode>
            <TITLE>結果発表</TITLE>
            <RESULT>{result}</RESULT>
            <RESULT>{location.state.point}ポイント<ul /></RESULT>
            {showFinalView(isFinal)}
        </React.StrictMode>
        
    );
}

const TITLE = styled.h1`
    font-family: "ヒラギノ丸ゴ ProN";
    margin-top: 32px;
    margin-bottom: 64px;
    font-size: 56px;
`;

const RESULT = styled.h2`
    font-family: "ヒラギノ丸ゴ ProN";
    line-height: 64px;
    margin-top: 16px;
    magin-bottom: 64px;
    font-size: 40px;
`;

const Button = styled.button`
    width: 100%;
    height: 48px;
    margin-top: 150px;
    line-height: 48px;
    border-radius: 8px;
    color: white;
    background-color: #4366ff;
    font-family: "ヒラギノ丸ゴ ProN";
    
`;

export {Result};