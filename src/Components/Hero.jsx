export default function hero() {
  return (
    <div>
      <section id= "home" className=" my-14" data-aos="fade-up" data-aos-delay="800"> 
        <p className="mono mb-1 max-md:text-[14px] ">Hi, my name is</p>
        <h1 class="dark:text-gray-300 text-gray-950 text-7xl max-ss:text-3xl max-md:text-4xl  ">Adeola Omomowo. </h1>
        <div className="typewriter flex-wrap flex overflow-x-auto">
        <h1 className="mb-6 animate-typing text-6xl max-md:text-3xl max-xs:text-[14px] max-ss:text-xl break-words">I write, I speak, and I code.</h1>
        </div>
        <p className="mb-6 max-w-xl max-md:max-w-lg">
          I have a dream to harness the power of technology not just to build
          systems, but to build lives, shift minds, and awaken the greatness
          within every soul. Front-end development, to me, isn’t just a career
          it’s a superpower. One that, when wielded with purpose, can shape lives in
          ways we’ve yet to imagine.
        </p>
        <a href="#projects"><button className="btn">Check Out My Projects!</button></a>
      </section>
    </div>
  );
}
