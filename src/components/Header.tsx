import { Link } from "react-router-dom"
import './components.css'

export default function Header() {

    return(
        <header>
            <p>Avatar Placeholder</p>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
}