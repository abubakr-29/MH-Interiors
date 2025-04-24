import heroImage2 from "../../assets/hero/hero-image2.jpeg";

const HeroBottom = () => {
  return (
    <div className="pt-2 xl:pt-0 2xl:pt-6">
      <img
        src={heroImage2}
        alt="Image"
        className="rounded-xl w-full h-[350px] xl:w-[700px] xl:h-[310px] object-cover shadow-lg shadow-black/50"
      />
    </div>
  );
};

export default HeroBottom;
