import logo from "../../assets/MHInteriorsLogo.png";

const NavbarLogo = () => {
  return (
    <div className="z-50">
      <a
        href="/"
        aria-label="Home"
        className="flex flex-shrink-0 items-center gap-1.5"
      >
        <img src={logo} alt="FAMedia Logo" width={60} height={40} />
        <h2 className="text-4xl uppercase font-special1 text-[#0a646c] hidden md:block">
          MH Interiors
        </h2>
      </a>
    </div>
  );
};

export default NavbarLogo;
