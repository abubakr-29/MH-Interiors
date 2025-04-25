import heroImage1 from "../../assets/hero/hero-image1.jpeg";

const HeroLeft = () => {
  return (
    <div className="w-full xl:w-[40%]">
      <div className="flex justify-center pb-2 xl:justify-between xl:p-4">
        <img
          src={heroImage1}
          alt="Image"
          className="rounded-xl w-full h-[350px] sm:h-[450px] xl:w-[450px] xl:h-[700px] object-cover shadow-lg shadow-black/50"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>
    </div>
  );
};

export default HeroLeft;
