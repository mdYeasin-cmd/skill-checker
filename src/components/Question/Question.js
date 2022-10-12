import React, { useState } from 'react';
import { stripHtmlFormQuestion } from '../../utilities/stripHtmlFromQuestion';
import Option from '../Option/Option';
import './Question.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const Question = ({ singleQuestion, index }) => {

    const [rightAnswer, setRightAnswer] = useState('');
    const { id, question, options, correctAnswer } = singleQuestion;

    const handleRightAnswer = (id) => {
        if (id === singleQuestion.id) {
            setRightAnswer(singleQuestion.correctAnswer);
        }
    }

    return (
        <div className="question-container py-4 mb-3 bg-danger text-white">

            <div className="d-flex align-items-center justify-content-between">
                <h3 className="text-start question">{`${index + 1}. ${stripHtmlFormQuestion(question)}`}</h3>
                <div>
                    <EyeIcon onClick={() => handleRightAnswer(id)} className="answer-visible"></EyeIcon>
                </div>
            </div>

            <div>
                {
                    options.map((option, idx) => <Option
                        key={idx}
                        option={option}
                        index={idx}
                        questionId={id}
                        correctAnswer={correctAnswer}
                    ></Option>)
                }
            </div>

            <div>
                <p className={`right-answer fs-5 rounded bg-success w-75 mx-auto py-2 ${rightAnswer ? 'd-block' : 'd-none'}`}>{rightAnswer}</p>
            </div>

        </div>
    );
};

export default Question;