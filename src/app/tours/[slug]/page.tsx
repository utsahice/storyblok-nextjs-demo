interface TourPageProps {
  params: Promise<{ slug: string }>;
}

const TourPage = async ({ params }: TourPageProps) => {
  const { slug } = await params; 

  return <pre>{JSON.stringify({ slug }, null, 2)}</pre>;
};

export default TourPage;
