import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {

    const quizQuestionObj = useLoaderData();
    const { name, questions } = quizQuestionObj.data;

    return (
        <div>
            <h2 className="my-4 fs-1">{name} Quiz</h2>
            {
                questions.map((singleQuestion, idx) => <Question
                    key={singleQuestion.id}
                    singleQuestion={singleQuestion}
                    index={idx}
                ></Question>)
            }
        </div>
    );
};

export default Quiz;