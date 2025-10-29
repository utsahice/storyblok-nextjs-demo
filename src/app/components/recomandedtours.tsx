import { RecommendedTour } from "./recomandedtour";
import { storyblokEditable } from "@storyblok/react/rsc";

export const RecommendedTours = (params: any) => {
  return (
    <section>
      <h2>
        {params.blok.headline}
      </h2>
      <div>
        {params.blok.tours.map((tour: any) => (
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </section>
  );
};