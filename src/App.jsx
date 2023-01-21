import { Top } from './Components/Top';
import { Answer } from './Components/Answer';
import { Result } from './Components/Result';
import { FinalView } from './Components/FinalView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from "styled-components";

const App = () => {
  return (
    <BrowserRouter>
      <QuizContainer>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/result" element={<Result />} />
          <Route path="/final" element={<FinalView />} />
        </Routes>
      </QuizContainer>
    </BrowserRouter>
    
  );
}

const QuizContainer = styled.div`
  margin: 30px auto 0;
  width: 330px;
  height: 600px;
  background-color: white;
  text-align: center;
  padding: 16px;
`;
export default App;