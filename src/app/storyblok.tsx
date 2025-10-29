// lib/storyblok.ts
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react/rsc";

// Initialize once
storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN, 
  use: [apiPlugin], 
});

export { getStoryblokApi };
