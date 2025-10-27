// lib/storyblok.ts
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react/rsc";

// Initialize once
storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN, // make sure this exists
  use: [apiPlugin], // ✅ this is required
});

export { getStoryblokApi };
