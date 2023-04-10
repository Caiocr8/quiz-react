import React, { useState } from 'react';

export default function App() {
  const questions = [
    {
      questionText: 'O que é Front-end?',
      answerOptions: [
          { answerText: 'Parte de um sistema que é oculta para o usuario', isCorrect: false },
          { answerText: 'Parte de um sistema que é visivel e interativa ao usuario', isCorrect: true },
          { answerText: 'Parte lógica que recebe as regras de négocios', isCorrect: false },
          { answerText: 'Nenhuma das alternativas anteriores', isCorrect: false },
      ],
    },
    {
      questionText: 'O que é React JS?',
      answerOptions: [
          { answerText: 'Uma poderosa biblioteca JavaScript', isCorrect: true },
          { answerText: 'Uma linguagem de programação', isCorrect: false },
          { answerText: 'Um servidor de Cloud', isCorrect: false },
          { answerText: 'Todas as respostas anteriores', isCorrect: false },
      ],
    },
    {
      questionText: 'Quais são as principais tecnologias do mundo Front-end?',
      answerOptions: [
          { answerText: 'Java, Golang e python', isCorrect: false },
          { answerText: 'AWS, Google cloud, Azure', isCorrect: false },
          { answerText: 'Kotlin, HTML e CSS', isCorrect: false },
          { answerText: 'HTML, CSS e JavaScript', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if(isCorrect === true){
      setScore(score+1)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
  }

  return (
    <div className='app'>
        {/* HINT: substitua "falso" pela lógica para exibir o
   pontuação quando o usuário respondeu a todas as perguntas
*/}
        {showScore ? (
            <div className='score-section'>Você acertou {score} de {questions.length}</div>
        ) : (
            <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion+1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                  {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button onClick={() => handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
                </div>
            </>
        )}
    </div>
  );


}
