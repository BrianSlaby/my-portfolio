import React from "react"


export default function Overview(): React.ReactNode {

    return (
        <>
            <h2>Overview</h2>

            <p>13th Age is a tabletop roleplaying game (RPG) similar to Dungeons & Dragons (D&D).  In fact, the two designers worked on different editions of D&D, and 13th Age was an attempt to design a quirkier, streamlined, and more narrative-focused game without the baggage of working within the constraints of a big, well-known brand.  It has been one of my preferred tabetop RPGs for many years.  One thing it does really well is having dynamic battles with lots of monsters that all have interesting abilities.  One of my pet peeves with the game is that as characters level up the math for hit points and damage escalates dramatically.  Combine those two things together, and tracking the math during battles can become a huge chore, especially at high levels.</p>

            <p>Using electronic devices at the table can be a divisive topic.  After all, part of the charm of tabletop RPGs is taking a break from screens, sitting around a table with friends and tracking everything with paper and pencil.  Possibly moving little plastic or pewter minis around on a map, if you're so inclined.  But after the first few levels, combat becomes a slog in 13th Age.  An exciting, cinematic battle can become slow and boring as the Game Master spends more time doing math on scrap paper than describing the action.  The 13th Age Monster Tracker was the first independent project I created after learning JavaScript because I was about to start a 13th Age campaign, and I simply needed a better way to handle the math.</p>

            <p>Creating a combat encounter with the 13th Age Monster Tracker is very straightforward; simply click the check boxes for whatever monster levels you want to use, and the dropdown list is filtered to include only monsters of those levels (sorted alphabetically).  Each selected monster will have its own individual card with the entire stat block for ease of reference during game play.  But the main feature is the automated math.  Simply input however much damage a monster takes after a player attacks, and the app will subtract it from the monster's total hit points.  Once a monster is at or lower than half of its maximum hit points, it is Staggered which sometimes has effects in-game.  Staggered monsters are easy to note at a glance, because their current hit points text becomes red.  I used the Monster Tracker app for my entire 13th Age campaign and it made a huge difference!  My increased efficiency running the game made it well worth it to have a laptop at the table.</p>
        </>
    )
}