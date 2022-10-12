import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Option.css';

const Option = ({ option, questionId, correctAnswer }) => {

    const handleAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success("Right Answer", {
                theme: "colored",
            });
        }
        else {
            toast.error("Wrong Answer", {
                theme: 'colored',
            });
        }
    }

    return (
        <div>

            <label className="option-label bg-light w-75 my-2 mx-auto text-start rounded px-2 py-3">
                <input onClick={() => handleAnswer(option)} className="me-2" type="radio" name={questionId} value={option} />
                {option}
                <ToastContainer></ToastContainer>
            </label>

        </div>
    );
};

export default Option;