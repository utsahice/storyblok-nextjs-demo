// app/tours/[slug]/page.tsx
import StoryblokClient from "storyblok-js-client";
import Image from "next/image";

interface TourPageProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

interface TourContent {
  description: string;
  price: string;
  image: { filename: string };
  location: string;
  body: any;
  [key: string]: any;
}

interface StoryblokStory {
  name: string;
  content: TourContent;
}

const storyblokApiToken = process.env.STORYBLOK_API_TOKEN;

if (!storyblokApiToken) {
  throw new Error(
    "STORYBLOK_API_TOKEN is undefined. Check your .env.local and restart the dev server."
  );
}

const storyblok = new StoryblokClient({
  accessToken: storyblokApiToken,
  cache: { clear: "auto", type: "memory" },
});

export default async function TourPage(props: TourPageProps) {
  const { slug } = await props.params;

  try {
    const response = await storyblok.get(`cdn/stories/tours/${slug}`, {
      version: "draft",
    });

    const story: StoryblokStory = response.data.story;
    const { name, content } = story;

    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Name */}
        <h1 className="text-4xl font-bold text-gray-800">{name}</h1>

        {/* Description / Introduction */}
        <p className="text-lg text-gray-600">{content.description}</p>

        {/* Price & Location */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-gray-700">
          <span className="font-semibold">Price: </span>
          <span>{content.price}</span>
          <span className="font-semibold">Location: </span>
          <span>{content.location}</span>
        </div>

        {/* Image */}
        {content.image?.filename && (
          <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={content.image.filename}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Body content */}
        <div className="prose max-w-full">
          {content.body ? (
            <div dangerouslySetInnerHTML={{ __html: content.body }} />
          ) : (
            <p>No additional content.</p>
          )}
        </div>
      </div>
    );
  } catch (err: any) {
    console.error("Storyblok fetch error:", err.response?.data || err.message);

    return (
      <div className="p-6 text-red-600">
        <h1 className="text-2xl font-bold">Error loading tour</h1>
        <p>{err.response?.data?.error || err.message}</p>
      </div>
    );
  }
}
