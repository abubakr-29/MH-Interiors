import HeroText from "./HeroText";
import HeroLeft from "./HeroLeft";
import SubHero from "./SubHero";

const HeroMain = () => {
  return (
    <div className="pt-35" id="hero">
      <div className="flex flex-wrap xl:flex-row">
        <HeroLeft />
        <HeroText />
        <SubHero />
      </div>
    </div>
  );
};

export default HeroMain;
