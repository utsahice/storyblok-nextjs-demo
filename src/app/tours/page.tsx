import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'
import { RecommendedTour } from '../components/recomandedtour'
import { draftMode } from 'next/headers'
export const generateStatic = async () => {
  const client = getStoryblokApi()
  const response = await client.getStories({
    content_type: 'tour',
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
  })
  return response.data.stories.map((story) => ({ slug: story.slug }))
}
const fetchToursPage = async () => {
  const client = getStoryblokApi()
  const response = await client.getStory(`tours`, {
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
    resolve_relations: 'recommended_tours.tours',
  })
  return response.data.story
}
const fetchAllTours = async () => {
  const { isEnabled } = await draftMode()

  const client = getStoryblokApi()
  const response = await client.getStories({
    content_type: 'tour',
    version:
      process.env.NODE_ENV === 'development' || isEnabled
        ? 'draft'
        : 'published',
  })
  return response.data.stories
}
const Tours = async () => {
  const story = await fetchToursPage()
  const tours = await fetchAllTours()
  return (
    <div>
      <StoryblokStory story={story} />
      <div className='grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16'>
        {tours.map((tour) => (
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </div>
  )
}
export default Tours
