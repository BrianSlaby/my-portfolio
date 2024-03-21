import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

// Solution for using hash links to scroll to IDs in React Router 6 found here:
// https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op

export default function ScrollToAnchor() {
    const location = useLocation()
    const lastHash = useRef('')

    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1)
        }

        if (lastHash.current && document.getElementById(lastHash.current)) {
            setTimeout(() => {
                document.getElementById(lastHash.current)?.scrollIntoView({
                    behavior: 'smooth', block: 'start'
                })
                lastHash.current = ''
            }, 100)
        }

    }, [location])

    return null
}