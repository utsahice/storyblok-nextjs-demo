import { StoryblokComponent } from '@storyblok/react'

export const Page = (params: any) => {
  console.log(params)
  return (
    <main>
      {params.blok.blocks.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}
