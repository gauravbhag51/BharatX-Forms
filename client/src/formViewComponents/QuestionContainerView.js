import React, { useContext, useState } from "react";
import { selectViewQuestion } from "../utils";
import { AppContext } from "../AppContext";
export default function QuestionContainerView({ question }) {
	const { formResponse } = useContext(AppContext);
	return (
		<div className="w-full bg-white p-6 flex-col flex gap-6 rounded-lg border-[1px] border-[#dadce0]">
			<h1 className="text-xl font-normal">{question["question-title"]}</h1>
			{selectViewQuestion(question, question["question-type"])}
			{console.log(question["question-type"])}
			{
				(question["question-type"] === "paragraph" || question["question-type"] === "short-input")
				&&
				<h1>Word Count:&nbsp;
					{formResponse["answers"].filter(answer => answer.questionId === question._id)[0] ? formResponse["answers"].filter(answer => answer.questionId === question._id)[0]["answer"].length : 0}
				</h1>
			}
		</div>
	);
}
