
import MVO from "@/app/about/section/MVO";
import OurTeam from "@/app/about/section/OurTeam"
import Gallery1 from "@/app/about/section/Gallery1";
import Gallery2 from "@/app/about/section/Gallery2";
import DynamicHero from "@/app/components/shared/DynamicHero";
import { generateDynamicMetadataHandler } from "@/helpers/generateDynamicMetadataHandler";
import CustomCursor from "@/ui/CustomCursor";
import "@/styles/CustomCursor.css";

// Dynamic metadata generation function
export async function generateMetadata() {
  const page_slug = "/about";
  const url = 'http://localhost:3000/';
  const redirect_url = `${url}/${page_slug}`;

  const result = await generateDynamicMetadataHandler({
    redirect_url,
    title: "About us",
  });
  return result;
}

const page = () => {
  return (
    <div>
      <CustomCursor/>
      <DynamicHero page="about"/>
      <OurTeam/>
      <MVO/>
      {/* <Gallery1></Gallery1>
      <Gallery2></Gallery2> */}
    </div>
  );
};

export default page;