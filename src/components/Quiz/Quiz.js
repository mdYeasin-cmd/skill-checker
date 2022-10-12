import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {

    const quizQuestionObj = useLoaderData();
    const quizQuestions = quizQuestionObj.data.questions;

    // console.log(quizQuestions);


    // const { correctAnswer, question, options } = quizQuestion;

    // console.log(correctAnswer, question, options)



    return (
        <div>
            {
                quizQuestions.map((singleQuestion, idx) => <Questions
                    key={singleQuestion.id}
                    singleQuestion={singleQuestion}
                    index={idx}
                ></Questions>)
            }
        </div>
    );
};

export default Quiz;