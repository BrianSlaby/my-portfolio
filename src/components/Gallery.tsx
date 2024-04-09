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

    let scrollIncrement: number = 750
    if (galleryRef.current) {
        scrollIncrement = galleryRef.current.clientWidth
    }

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

    function handleScroll(event: React.UIEvent<HTMLElement>): void {
        const parentEl = event.currentTarget as HTMLElement
        const figures = document.querySelectorAll(".gallery-figure")
        figures.forEach((figure, index) => {
                if (isElementInView(figure as HTMLElement, parentEl)) {
                    setCurrentIndex(index)
                    setScrollPosition(scrollIncrement * index)
                }
        })
    }  

    function isElementInView(el: HTMLElement, parent: HTMLElement | null): boolean {
        if (!parent) {
            return false
        }

        const rect = el.getBoundingClientRect()
        const parentRect = parent?.getBoundingClientRect()

        return (
            rect.left === parentRect.left
        )
    }

    useEffect(() => {
        if (currentIndex === 0) {
            setBackBtnClass("hidden")
        } else {
            setBackBtnClass("")
        }

        if (currentIndex === galleryImages.length -1) {
            setFwdBtnClass("hidden")
        } else {
            setFwdBtnClass("")
        }

    }, [currentIndex])

    useEffect(() => {
        if (galleryRef.current) {
            scrollIncrement = galleryRef.current.clientWidth
        }
    }, [galleryRef.current?.clientWidth])

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
                onScroll={handleScroll}
            >

            {
                galleryImages.map(figure => {
                    return (
                        <figure 
                            className={`gallery-figure`}
                            key={figure.index}
                            data-index={figure.index}
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