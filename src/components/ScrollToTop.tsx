import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Solution for getting project page links to start at top of page:
// https://dev.to/kunalukey/scroll-to-top-when-route-changes-reactjs-react-router-3bgn

export default function ScrollToTop(): React.ReactNode {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}