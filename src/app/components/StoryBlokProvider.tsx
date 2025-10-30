import type { PropsWithChildren } from 'react'
import { storyblokInit ,apiPlugin } from '@storyblok/react/rsc'
import Tour from '@/app/components/tour'
import Page  from './page'
import { Hero } from './hero'
import { Grid } from './grid'
import { features } from 'process'
import { Feature } from './feature'
import { Testimonial } from './testimonial'
import { RecommendedTours } from './recomandedtours'
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
  },

  enableFallbackComponent: true,
})
export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>
}
