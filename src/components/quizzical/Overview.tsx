import React from "react"


export default function Overview(): React.JSX.Element {

    return (
        <>
            <h2>Overview</h2>

            <p>Quizzical was the capstone solo project for the React Basics module of <a target="_blank" href="https://scrimba.com/learn/frontend">Scrimba's Frontend Developer Career Path</a>.  The project requirements were for there to be a home screen and a quiz screen, the quiz screen should consist of 5 questions randomly pulled from the Open Trivia Database API, and correct answers should be tallied when the "check answers" button is clicked.</p>

            <p>I decided to expand the scope of the project by implementing a dropdown menu to select specific categories for the quiz questions.  The default option is for questions to be pulled from any category, as per the minimum project requirements.  Because the Open Trivia Database API includes such a long list of categories, including many that I lack a basic working knowledge of, I found the experience of taking the quizzes to be unsatisfying.  After implementing the category selection option I started clicking the "play again" button more frequently.</p>

            <p>As a nod to my biology background, I styled this app in the palette of a green jay.  Birding is one of my hobbies, but I've also done ornithological surveys professionally.  Truth be told, I kept hitting a brick wall when I was trying to design the UI for this project, but eventually I thought to myself why not take some inspiration from nature?  After all, I already knew the colors looked good together on the bird!</p>
        </>
    )
}