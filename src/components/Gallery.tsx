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
    // const touchStartX = useRef<number | null>(null)
    const scrollIncrement = galleryRef.clientWidth
    // figure this out above
    // ALSO, after the scroll event is handled and currentIndex is assigned
        // based on figure in view, set scrollPosition = currentIndex * scrollIncrement
    // obviously implement debouncing after everything else is handled
    // set state in useEffect vs handleScroll

    console.log(galleryRef)

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

    // function handleTouchStart(e: TouchEvent): void {
    //     touchStartX.current = e.touches[0].clientX
    // }

    // function handleTouchScroll(e: TouchEvent): void {
    //     setIsScrolling(true)
    //     if (touchStartX.current !== null) {
    //         const touchEndX = e.touches[0].clientX
    //         const difference = touchStartX.current - touchEndX
    //         if (difference > 50) {
    //             toggleGalleryForward()
    //         } else if (difference < -50) {
    //             toggleGalleryBackward()
    //         }
    //         touchStartX.current = null
    //     }
    //     setIsScrolling(false)
    // }

    // function handleWheelScroll(e: WheelEvent): void {
    //     setIsScrolling(true)
    //     console.log("isScrolling", isScrolling)
    //     if (e.deltaX !== 0) {
    //         if (e.deltaX > 50) {
    //             toggleGalleryForward()
    //         } else if (e.deltaX < -50) {
    //             toggleGalleryBackward()
    //         }
    //     }
    //     setIsScrolling(false)
    // }

    function handleScroll(event: React.UIEvent<HTMLElement>) {
        const target = event.target as HTMLElement
        const parentEl = event.currentTarget as HTMLElement
        const { scrollLeft, scrollWidth, clientWidth } = target
        const position = Math.ceil(scrollLeft / (scrollWidth - clientWidth) * 100)

        const figures = document.querySelectorAll(".gallery-figure")
        figures.forEach((figure, index) => {
            // figure out how to get index from dataset later
            //console.log("figure as HTMLElement", figure as HTMLElement)
                if (isElementInView(figure as HTMLElement, parentEl)) {
                    setCurrentIndex(index)
                }
            
        })

        setScrollPosition(scrollLeft)
    }

    // function debounce(func: any, delay: number = 300) {
    //     let timer: number | undefined
    //     return (...args: any[]) => {
    //         if (!timer) {
    //             func.apply(args) 
    //             console.log("debounce function worked")
    //         }
    //         clearTimeout(timer)
    //         timer = setTimeout(() => {
    //             timer = undefined
    //         }, delay)
    //     }
    // }   

    function isElementInView(el: HTMLElement, parent: HTMLElement | null) {
        if (!parent) {
            return false
        }

        const rect = el.getBoundingClientRect()
        const parentRect = parent?.getBoundingClientRect()
        
        // const windowHeight = window.innerHeight || document.documentElement.clientHeight
        // const windowWidth = window.innerWidth || document.documentElement.clientWidth


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
        // const figures = document.querySelectorAll(".gallery-figure")
        // figures.forEach((figure, index) => {
        //     // figure out how to get index from dataset later
        //     console.log("figure as HTMLElement", figure as HTMLElement)
        //         if (isElementInView(figure as HTMLElement, galleryRef)) {
        //             setCurrentIndex(index)
        //         }
            
        // })

        console.log("currentIndex", currentIndex)
        console.log("scrollPosition", scrollPosition)

    }, [scrollPosition])

    // useEffect(() => {
    //     if (galleryRef.current) {
    //         galleryRef.current.addEventListener("touchstart", handleTouchStart)
    //         galleryRef.current.addEventListener("touchmove", debounce(() => handleTouchScroll))
    //         galleryRef.current.addEventListener("wheel", debounce(() => handleWheelScroll))
    //     }
    //     return () => {
    //         if (galleryRef.current) {
    //             galleryRef.current.removeEventListener("touchstart", handleTouchStart)
    //             galleryRef.current.removeEventListener("touchmove", debounce(() => handleTouchScroll))
    //             galleryRef.current.removeEventListener("wheel", debounce(() => handleWheelScroll))
    //         }
    //     }
    // }, [])

    // useEffect(() => {
    //     const figures = document.querySelectorAll(".gallery-figure")
    //     figures.forEach((figure, index) => {
    //         if (isElementInView(figure as HTMLElement)) {
    //             setCurrentIndex(index)
    //         }
    //     })

    //     if (galleryRef.current) {
    //         galleryRef.current.addEventListener("touchstart", handleTouchStart)
    //         galleryRef.current.addEventListener("touchmove", debounce(() => handleTouchScroll))
    //         galleryRef.current.addEventListener("wheel", debounce(() => handleWheelScroll))
    //     }

    //     return () => {
    //         if (galleryRef.current) {
    //             galleryRef.current.removeEventListener("touchstart", handleTouchStart)
    //             galleryRef.current.removeEventListener("touchmove", debounce(() => handleTouchScroll))
    //             galleryRef.current.removeEventListener("wheel", debounce(() => handleWheelScroll))
    //         }
    //     }
    // }, [isScrolling])

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
                    const currentClass = figure.index === currentIndex ? "current" : ""
                    return (
                        <figure 
                            className={`gallery-figure ${currentClass}`}
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