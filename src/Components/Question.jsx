import { Link } from "react-router-dom";
function QuestionComponent({ textquestion }) {
  return (
    <div className="flex flex-col justify-center items-center text-center text-slate-800 h-[150px] overflow-hidden max-sm:h-[100px]">
      <h1 className="font-abc font-bold text-[30px] max-sm:w-[70%] max-sm:text-[15px]">
        {textquestion}
      </h1>
     
    </div>
  );
}

export default QuestionComponent;
