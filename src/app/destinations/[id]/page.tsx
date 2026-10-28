import { notFound } from "next/navigation";
import { DestinationDetails } from "@/components/site/destination-details";
import type { Destination } from "@/components/site/destination-card";

const DestinationDetailsPage = async ({
  params,
}: PageProps<"/destinations/[id]">) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const data: { result: Destination } = await res.json();

  if (!data.result) {
    notFound();
  }

  return <DestinationDetails destination={data.result} />;
};

export default DestinationDetailsPage;
