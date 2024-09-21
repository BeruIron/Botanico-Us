
import { Link } from "react-router-dom";
function QuestionComponent({ textquestion, textparagraph }) {
    return (
        <div className="flex flex-col justify-center items-center text-center text-slate-800 h-[150px] overflow-hidden max-sm:h-[100px]">

            <h1 className="font-abc font-bold text-[30px] max-sm:text-[15px]">{textquestion}</h1>
            <p className="text-[20px] font-abc max-sm:text-[10px] mt-[30px]">

        Are you interested in selling real Cambodian craft beer at your F&B business? <br />
        We provide draft beer as well as bottles. Contact us <Link className="text-red-600" to="/story">here</Link>.
      </p>
        </div>
    );
}

export default QuestionComponent;