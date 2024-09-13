function QuestionComponent({ textquestion, textparagraph }) {
    return (
        <div className="flex flex-col justify-center items-center text-center text-slate-800 h-[150px] overflow-hidden max-sm:h-[100px]">
            <h1 className="text-3xl font-bold max-sm:text-[15px]">{textquestion}</h1>
            <h1>{textparagraph}</h1>
        </div>
    );
}

export default QuestionComponent;
