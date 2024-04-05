
type projectComponentProps = {
    src: string,
    alt: string,
    title: string,
    linkTo: string,
    description: string
}

type projectHeroHeaderProps = {
    title: string,
    description: string
}

type projectLinksProps = {
    liveUrl: string,
    githubUrl: string
}

type galleryImage = {
    url: string,
    alt: string,
    caption: string,
    index: number,
    isCurrent: boolean
}

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