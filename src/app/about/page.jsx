import MVO from "./section/MVO";
import OurTeam from "./section/OurTeam"
import Gallery from "./section/Gallery"


const page = () => {
  return (
    <div>
      <OurTeam/>
      <MVO/>
      <Gallery></Gallery>
    </div>
  );
};

export default page;