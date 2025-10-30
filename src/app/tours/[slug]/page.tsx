import '@/app/components/StoryBlokProvider'
import { StoryblokStory, getStoryblokApi } from '@storyblok/react/rsc'
// import { json } from "stream/consumers";
import { draftMode } from 'next/headers'

const fetchTourPage = async (slug: string) => {
  const { isEnabled } = await draftMode()
  const client = getStoryblokApi()
  const response = await client.getStory(`tours/${slug}`, {
    version:
      process.env.NODE_ENV === 'development' || isEnabled
        ? 'draft'
        : 'published',
  })
  return response.data.story
}
const TourPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const story = await fetchTourPage(slug)
  return <StoryblokStory story={story} />
}
export default TourPage
