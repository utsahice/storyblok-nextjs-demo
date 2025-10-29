import { StoryblokComponent } from "@storyblok/react"

export const Feature = (params:any)=>{
    return(
        <section>
        <h1>{params.blok.headline}</h1>
        <p>{params.blok.content}</p>
        </section>
    )
}