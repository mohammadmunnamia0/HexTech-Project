import MVO from "./section/MVO";
import OurTeam from "./section/OurTeam"
import Gallery from "./section/Gallery"
import Gallery2 from "./section/Gallery2";


const page = () => {
  return (
    <div>
      <OurTeam/>
      <MVO/>
      {/* <Gallery></Gallery>
      <Gallery2></Gallery2> */}
    </div>
  );
};

export default page;