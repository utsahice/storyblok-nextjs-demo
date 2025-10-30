import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

export default function Page(params: any) {
  return (
    <main {...storyblokEditable(params.blok)}>
      {params?.blok?.blocks?.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}
