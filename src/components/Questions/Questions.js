import React from 'react';
import { stripHtmlFormQuestion } from '../../utilities/stripHtmlFromQuestion';
import Option from '../Option/Option';
import './Questions.css';

const Questions = ({ singleQuestion, index }) => {

    // console.log(singleQuestion);

    const {id, question, options} = singleQuestion;

    // console.log(options)
    
    return (
        <div className="question-container py-4 mb-3 bg-danger text-white">
            <h3 className="text-start question">{`${index + 1}. ${stripHtmlFormQuestion(question)}`}</h3>
            {/* <Option options={options}></Option> */}
            {
                options.map((option, idx) => <Option
                    key={idx}
                    option={option}
                    index={idx}
                    questionId={id}
                ></Option>)
            }
        </div>
    );
};

export default Questions;