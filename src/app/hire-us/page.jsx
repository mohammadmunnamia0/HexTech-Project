import HireUs from "@/app/hire-us/section/HireUs";
import MeetTeam from "@/app/hire-us/section/MeetTeam";
import DynamicHero from "@/app/components/shared/DynamicHero";
import { generateDynamicMetadataHandler } from "@/helpers/generateDynamicMetadataHandler";

// Dynamic metadata generation function
export async function generateMetadata() {
  const page_slug = "/hire-us";
  const url = 'http://localhost:3000/';
  const redirect_url = `${url}/${page_slug}`;

  const result = await generateDynamicMetadataHandler({
    redirect_url,
    title: "Hire us",
  });
  return result;
}

export default function HiringPage() {
  return (
    <section>
      <DynamicHero page="hire-us" />
      <section className="py-20">
        <HireUs />
        <MeetTeam />
      </section>
    </section>
  );
}
