import { StoryblokComponent } from "@storyblok/react"

export const Testimonial  = (params:any)=>{
    return(
        <section>
        <h1>{params.blok.name}</h1>
        <p>{params.blok.comment}</p>
        </section>
    )
}