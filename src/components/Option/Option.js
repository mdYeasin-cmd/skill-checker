import React from 'react';

const Option = ({ options, index }) => {

    console.log(options)

    // const singleOption = option.map(op => console.log(op))

    


    return (
        <div>
            <form action="">
                
                <label htmlFor={index}>
                <input type="radio" name="option" id={index} />
                   {options[0]}
                </label>
                <label htmlFor={index}>
                <input type="radio" name="option" id={index} />
                   {options[1]}
                </label>
                <label htmlFor={index}>
                <input type="radio" name="option" id={index} />
                   {options[2]}
                </label>
                <label htmlFor={index}>
                <input type="radio" name="option" id={index} />
                   {options[3]}
                </label>

            </form>
        </div>
    );
};

export default Option;