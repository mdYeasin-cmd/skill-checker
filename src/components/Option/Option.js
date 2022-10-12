import React from 'react';
import './Option.css';
const Option = ({ option, index, questionId }) => {

    // console.log(option, questionId)

    // const singleOption = option.map(op => console.log(op))




    return (
        <div>
            <label className="option-label bg-light w-75 my-2 mx-auto text-start rounded px-2 py-3">
                <input className="me-2" type="radio" name={questionId} />
                {option}
            </label>
        </div>
    );
};

export default Option;