import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {

    const quizQuestionObj = useLoaderData();
    console.log(quizQuestionObj)
    const { name, questions } = quizQuestionObj.data;

    return (
        <div>
            <h2 className="my-4 fs-1">{name} Quiz</h2>
            {
                questions.map((singleQuestion, idx) => <Questions
                    key={singleQuestion.id}
                    singleQuestion={singleQuestion}
                    index={idx}
                ></Questions>)
            }
        </div>
    );
};

export default Quiz;