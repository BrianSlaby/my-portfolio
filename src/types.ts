// components/home/Project.tsx
type projectComponentProps = {
    src: string,
    alt: string,
    title: string,
    linkTo: string,
    description: string
}

// components/project-page/ProjectHero.tsx
type projectHeroHeaderProps = {
    title: string,
    description: string
}

// components/project-page/ProjectLinks.tsx
type projectLinksProps = {
    liveUrl: string,
    githubUrl: string
}

// pages/*each individual project file*
type galleryImage = {
    url: string,
    alt: string,
    caption: string,
    index: number,
    isCurrent: boolean
}

// components/Gallery.tsx
type galleryProps = {
    galleryImages: galleryImage[]
}

export type {
    projectComponentProps,
    projectHeroHeaderProps,
    projectLinksProps,
    galleryImage,
    galleryProps
}