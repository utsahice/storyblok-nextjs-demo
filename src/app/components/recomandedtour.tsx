import Link from "next/link";

export const RecommendedTour = (props: any) => {
  return (
    <div >
          <h3>{props.story.content.name}</h3>
          
        <Link
          className="font-bold text-base mt-8 block underline"
          href={`/${props.story.full_slug}`}
        >
          View Tour
        </Link>
      </div>
  );
};