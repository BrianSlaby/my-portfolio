import React from "react"


export default function Overview(): React.ReactNode {

    return (
        <>
            <h2>Overview</h2>

            <p>I've used paper shopping lists for most of my life, and this app is a solution for the drawbacks of paper.  I can't tell you how many times I've thought of something I need to add to my shopping list, but I don't have the list on me.  Even if I make a note somewhere else to add that item later, now I have to remember that I have items in two different places (or more, if it happens again).  With Shopping Helper, I can simply log into my account from my phone or laptop and add the item to my list, keeping everything in one place.  And with all of the list data stored in Google Firebase, I can't lose my list!</p>

            <p>I'll admit that I don't have the neatest hand writing.  On top of that, my paper shopping lists aren't necessarily in any sort of logical order, especially if I added items to it when I happened to think of them.  If I'm in the produce section, I probably have to scan through my entire list to make sure I'm not forgetting anything, because all of the produce isn't necessarily grouped together on paper.  Yes, I frequently need to revisit sections of the grocery store because I realize I forgot something earlier.  With Shopping Helper I can group items together logically by creating multiple custom lists.  Now when I'm in the produce section, I open up my "produce" list and don't need to scan through more information than is necessary.</p>

            <p>I'm not the kind of person who carries pens or pencils everywhere I go.  And I don't really want to juggle a pen while shopping, either.  It <em>will</em> fall through the slats of the cart and get lost.  Since I'm not crossing off items on a paper list as I shop, the amount of information that I need to scan through doesn't get any smaller as I make my way through the store.  So it's not surprising that I need to backtrack sometimes when I realize I've forgotten something.  That's exactly why I implemented check boxes in Shopping Helper.  With a single tap on my phone screen I can denote that I've acquired an item, and once items are checked they're automatically sorted to the bottom of the list.  Of course items can also be deleted, but the nice thing about the check boxes?  For items that I buy regularly I can just uncheck everything after I'm done shopping and now a big chunk of next week's list is already done, for almost zero effort!</p>
        </>
    )
}