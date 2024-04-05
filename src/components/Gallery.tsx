import React, { useState, useRef, useEffect } from "react"
import "./gallery.css"
import { galleryProps } from "../types"
import LeftArrow from "../assets/LeftArrow"
import RightArrow from "../assets/RightArrow"

export default function Gallery({ galleryImages }: galleryProps): React.JSX.Element {
    const [ currentIndex, setCurrentIndex ] = useState<number>(0)
    const [ scrollPosition, setScrollPosition ] = useState<number>(0)
    const [ backBtnClass, setBackBtnClass ] = useState<"hidden" | "">("hidden")
    const [ fwdBtnClass, setFwdBtnClass ] = useState<"hidden" | "">("")

    const galleryRef = useRef<HTMLDivElement | null>(null)
    const touchStartX = useRef<number | null>(null)
    const scrollIncrement = 750

    console.log("currentIndex:", currentIndex)
    console.log("scrollPosition:", scrollPosition)

    function toggleGalleryForward(): void {
        setCurrentIndex((prevIndex) => prevIndex + 1)
        setBackBtnClass("")
        
        let newScrollPosition = scrollPosition + scrollIncrement
        if (newScrollPosition > galleryImages.length * scrollIncrement) {
            newScrollPosition = galleryImages.length  * scrollIncrement
        }
        setScrollPosition(newScrollPosition)
        if (galleryRef.current) {
            galleryRef.current.scrollLeft = newScrollPosition
        }
    }

    function toggleGalleryBackward(): void {
        setCurrentIndex((prevIndex) => prevIndex - 1)
        setFwdBtnClass("")
       
        let newScrollPosition = scrollPosition - scrollIncrement
        if (newScrollPosition < 0) {
            newScrollPosition = 0
        }
        setScrollPosition(newScrollPosition)
        if (galleryRef.current) {
            galleryRef.current.scrollLeft = newScrollPosition
        }
    }

    function handleTouchStart(e: TouchEvent): void {
        touchStartX.current = e.touches[0].clientX
    }

    function handleTouchScroll(e: TouchEvent): void {
        if (touchStartX.current !== null) {
            const touchEndX = e.touches[0].clientX
            const difference = touchStartX.current - touchEndX
            if (difference > 50) {
                toggleGalleryForward()
            } else if (difference < -50) {
                toggleGalleryBackward()
            }
            touchStartX.current = null
        }
    }

    function handleWheelScroll(e: WheelEvent): void {
        if (e.deltaX !== 0) {
            if (e.deltaX > 50) {
                toggleGalleryForward()
            } else if (e.deltaX < -50) {
                toggleGalleryBackward()
            }
        }
    }

    useEffect(() => {
        if (currentIndex === 0) {
            setBackBtnClass("hidden")
        }

        if (currentIndex === galleryImages.length -1) {
            setFwdBtnClass("hidden")
        }

    }, [currentIndex])

    useEffect(() => {
        if (galleryRef.current) {
            galleryRef.current.addEventListener("touchstart", handleTouchStart)
            galleryRef.current.addEventListener("touchmove", handleTouchScroll)
            galleryRef.current.addEventListener("wheel", handleWheelScroll)
        }
        return () => {
            if (galleryRef.current) {
                galleryRef.current.removeEventListener("touchstart", handleTouchStart)
                galleryRef.current.removeEventListener("touchmove", handleTouchScroll)
                galleryRef.current.removeEventListener("wheel", handleWheelScroll)
            }
        }
    }, [])

    return (
        <div className="gallery-outer-wrapper">
        
            <button 
                className={`gallery-btn back ${backBtnClass}`} 
                onClick={toggleGalleryBackward}
            
            > <LeftArrow /> </button>
            <button 
                className={`gallery-btn fwd ${fwdBtnClass}`}
                onClick={toggleGalleryForward} 
            
            > <RightArrow /> </button>

            <div 
                className="gallery-container"
                ref={galleryRef}
            >

            {
                galleryImages.map(figure => {
                    const currentClass = figure.index === currentIndex ? "current" : ""
                    return (
                        <figure 
                            className={`gallery-figure ${currentClass}`}
                            key={figure.index}
                        >
                            <img
                                src={figure.url} 
                                alt={figure.alt}
                                className={`gallery-img`}
                            />
                            <figcaption>{figure.caption}</figcaption>
                        </figure>
                    )
                })
            }

            </div>
        </div>
    )
}