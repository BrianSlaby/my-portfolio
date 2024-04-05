import React, { useState, useRef, useEffect } from "react"
import "../gallery.css"
import { galleryImage } from "../../types"
import LeftArrow from "../../assets/LeftArrow"
import RightArrow from "../../assets/RightArrow"

export default function Gallery(): React.ReactNode {
    const [ currentIndex, setCurrentIndex ] = useState<number>(0)
    const [ scrollPosition, setScrollPosition ] = useState<number>(0)
    const [ backBtnClass, setBackBtnClass ] = useState<"hidden" | "">("hidden")
    const [ fwdBtnClass, setFwdBtnClass ] = useState<"hidden" | "">("")

    const galleryRef = useRef<HTMLDivElement | null>(null)

    const galleryImages: galleryImage[] = [
        {
            url: "/public/images/shopping-helper-capture.png",
            alt: "",
            caption: "Shopping Helper authentication screen.",
            index: 0,
            isCurrent: true
        },
        {
            url: "/public/images/shopping-helper-capture2.png",
            alt: "",
            caption: "Logged in UI with example lists, all collapsed.",
            index: 1,
            isCurrent: false
        },
        {
            url: "/public/images/shopping-helper-capture3.png",
            alt: "",
            caption: "Logged in UI with a list open.",
            index: 2,
            isCurrent: false
        }
    ]


    function toggleGalleryForward(): void {
        setCurrentIndex((prevIndex) => prevIndex + 1)
        setBackBtnClass("")
        
        const newScrollPosition = scrollPosition + 750
        setScrollPosition(newScrollPosition)
        if (galleryRef.current) {
            galleryRef.current.scrollLeft = newScrollPosition
        }
    }

    function toggleGalleryBackward(): void {
        setCurrentIndex((prevIndex) => prevIndex - 1)
        setFwdBtnClass("")
       
        const newScrollPosition = scrollPosition - 750
        setScrollPosition(newScrollPosition)
        if (galleryRef.current) {
            galleryRef.current.scrollLeft = newScrollPosition
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