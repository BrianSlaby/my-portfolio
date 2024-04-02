import React from "react"


export default function Features(): React.ReactNode {


    return (
        <>
            <h2>Features</h2>
                <ul className="features-container">
                    <li>Check boxes in the monster selection modal allows monsters to be filtered by level.</li>
                    <li>Monsters (filtered by level) are selected from a dropdown menu in the monster selection modal.</li>
                    <li>Each selected monster gets its own card. If you have duplicates of a monster in the same battle, they can be tracked individually.</li>
                    <li>Mook cards have an input for entering the number of mooks within a single group. As the mook group takes damage and individuals are taken down, the card updates how many mooks are remaining in the group.</li>
                    <li>Monster damage is entered in the damage input field and current hit points are tracked on the card. When a monster becomes Staggered (takes damage equal to half of its total hit points), its current hit points text turns red.</li>
                    <li>Monster cards are visually split into different sections for improved readability, including separate sections for defenses and hit points, attacks, and abilities.</li>
                    <li>Individual cards can be deleted with the delete icon on the right side of the header in order to clean up the UI once monsters are taken out of the fight. A "clear monsters" button on the top of the page will delete all current cards.</li>
                </ul>
        </>
    )
}