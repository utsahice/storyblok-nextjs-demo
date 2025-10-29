import { StoryblokComponent } from "@storyblok/react"

export const Grid = (params:any)=>{
    return(
        <section>
        <h1>{params.blok.headline}</h1>
        <p>{params.blok.recommended_tours}</p>
        </section>
    )
}