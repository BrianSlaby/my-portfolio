import React from "react"


export default function Features(): React.ReactNode {


    return (
        <>
            <h2>Features</h2>
                <ul className="features-container">
                    <li>Account creation and login through Firebase Authentication.</li>
                    <li>Firebase Security Rules keep your data secure.</li>
                    <li>Input allows for creation of multiple custom named lists.</li>
                    <li>All data are stored in a Google Firebase Firestore Database.</li>
                    <li>Inactive lists have contents hidden to prevent clutter.</li>
                    <li>Active lists show contents, and input to create new list items.</li>
                    <li>List items have checkboxes; checking an item moves it to the bottom of the list.</li>
                    <li>List items can be deleted individually; entire lists can also be deleted.</li>
                </ul>
        </>
    )
}