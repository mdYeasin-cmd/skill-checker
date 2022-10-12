import React from 'react';
import { stripHtmlFormQuestion } from '../../utilities/stripHtmlFromQuestion';
import Option from '../Option/Option';
import './Questions.css';

const Questions = ({ singleQuestion, index }) => {

    const {question, options} = singleQuestion;
    
    return (
        <div className="question-container bg-danger text-white">
            <h3 className="text-start question">{`${index + 1}. ${stripHtmlFormQuestion(question)}`}</h3>
            <Option options={options}></Option>
            {/* {
                options.map((option, idx) => <Option
                    key={idx}
                    option={option}
                    index={idx}
                ></Option>)
            } */}
            {/*   */}
        </div>
    );
};

export default Questions;