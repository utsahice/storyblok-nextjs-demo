import "@/app/components/StoryBlokProvider"; 
import { StoryblokStory, getStoryblokApi } from "@storyblok/react/rsc";
// import { json } from "stream/consumers";

const fetchTourPage = async (slug:string)=>{
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`,{
    version:"draft",
  });
  return response.data.story;
}
const TourPage = async ({ params }: { params: Promise<{ slug: string }> }) =>{
  const { slug } = await params; 
  const story = await fetchTourPage(slug);
  return <StoryblokStory story = {story}/>
}
export default TourPage;


