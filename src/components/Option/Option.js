import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Option.css';

const customId = "removeToastDuplicate";


const Option = ({ option, questionId, correctAnswer }) => {

    // const [toast, setToast] = useState('');

    // const notify = () => toast("Wow so easy!");

    const handleAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success("Right Answer", {
                theme: "colored",
                toastId: customId
            });
        }
        else {
            toast.error("Wrong Answer", {
                theme: 'colored',
                toastId: customId
            });
        }
    }

    return (
        <div>
            <label onClick={() => handleAnswer(option)} className="option-label bg-light w-75 my-2 mx-auto text-start rounded px-2 py-3">
                <input className="me-2" type="radio" name={questionId} value={option} />
                {option}
            </label>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Option;