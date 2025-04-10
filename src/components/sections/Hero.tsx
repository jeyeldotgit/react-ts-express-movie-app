const Hero = () => {
  return (
    <div>
      <section className="min-h-screen w-full flex justify-center items-center bg-[url(./images/bg.jpg)] bg-cover bg-left md:bg-center ">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <h1 className="text-text-primary text-7xl text-center font-russo">
          All of the <br />
          <span className="text-accent-blue"> Movies </span>
          <br /> On The Go
        </h1>
      </section>
    </div>
  );
};

export default Hero;
