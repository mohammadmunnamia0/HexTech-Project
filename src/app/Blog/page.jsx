import Blog from "@/app/Blog/section/Blog";
import DynamicHero from "@/app/components/shared/DynamicHero";
import { generateDynamicMetadataHandler } from "@/helpers/generateDynamicMetadataHandler";

// Dynamic metadata generation function
export async function generateMetadata() {
  const page_slug = "/blog";
  const url = "http://localhost:3000/";
  const redirect_url = `${url}/${page_slug}`;

  const result = await generateDynamicMetadataHandler({
    redirect_url,
    title: "Blog",
  });
  return result;
}

const Page = () => {
  return (
    <section>
      <DynamicHero page="blog" />
      <Blog />
    </section>
  );
};

export default Page;
