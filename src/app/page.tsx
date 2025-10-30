import './layout'
import '@/app/components/StoryBlokProvider'
import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { draftMode } from 'next/headers'

const fetchHomePage = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi()
  if (!client) {
    throw new Error("Storyblok API client not initialized — check storyblokInit()");
  }
   const response = await client.getStory("home", {
    version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
    resolve_relations: "recommended_tours.tours",
  });

  return response.data.story
}

export default async function Home() {
  const story = await fetchHomePage()
  return <StoryblokStory story={story} />
}
