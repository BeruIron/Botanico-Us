function QuestionComponent({ textquestion, textparagraph }) {
    return (
        <div className="flex flex-col justify-center items-center text-center text-slate-800 h-[150px] ">
            <h1 className="text-3xl font-bold">{textquestion}</h1>
            <h1>{textparagraph}</h1>
        </div>
    );
}

export default QuestionComponent;
