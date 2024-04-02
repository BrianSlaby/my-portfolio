import React from "react"


export default function Features(): React.ReactNode {


    return (
        <>
            <h2>Features</h2>
                <ul className="features-container">
                    <li>A dropdown menu allows users to select a category for their quiz, or get questions from all categories.</li>
                    <li>Each quiz consists of 5 questions randomly selected from the Open Trivia Database API, filtered by category if a category was selected.</li>
                    <li>Selected answers for each question can be changed at any point before clicking the "check answers" button.</li>
                    <li>Quiz results show all correct answers as well as any incorrect answers, and reports the total score.</li>
                    <li>From the results screen users can click "play again" to get 5 new random questions from the same category, or "reset" to return to the home screen and select a new category.</li>
                </ul>
        </>
    )
}