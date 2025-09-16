import { useState, useEffect } from "react";

export default function Work() {
  const [active, setActive] = useState("tab1");
  const [activeIndex, setActiveIndex] = useState(0);
  const [vertical, setVertical] = useState(window.innerWidth > 770);

  useEffect(() => {
    const handleResize = () => {
      setVertical(window.innerWidth > 770);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const tabs = [
    { id: "tab1", label: "Stack" },
    { id: "tab2", label: "Skills" },
    { id: "tab3", label: "Learning" },
  ];

  const tabContent = {
    tab1: (
      <div>
        <h3 className="mb-6">Tech Stack</h3>
        <div>
          <ol className="space-y-5  para">
            <li>
              <span className="font-bold">Frontend Development:</span> HTML,
              CSS, JavaScript, Tailwind and React
            </li>
            <li>
              <span className="font-bold">
              Version Control & Collaboration:</span> Git and Git-Hub
            </li>
            <li >
              <span className="font-bold">Deployment Platforms:</span> Git-Hub
              Pages and Firebase
            </li>
          </ol>
        </div>
      </div>
    ),
    tab2: (
      <div>
        <h3 className="mb-6">Skills</h3>
        <ol className="whitespace-pre-line para  space-y-5 ">
          <li>Writing clean, maintainable code </li>
          <li>Debugging and solving UI/UX problems </li>
          <li>Turning ideas into functional interfaces</li>
          <li>Designing intuitive, visually appealing user interfaces </li>
          <li>
            Creating emotion and clarity through layout, color, and typography
          </li>
          <li>Deep research and problem discovery </li>
          <li>Communicating clearly through writing and visuals</li>
        </ol>
      </div>
    ),
    tab3: (
      <div className="">
        <h3 className="mb-6">What I’m Currently Learning</h3>
        <div >
          <ol className="list-decimal space-y-5 para ">
            <li>
              <span className="font-bold">Backend Development:</span> I’m about
              to start learning Node.js to build server-side applications and
              better understand backend processes.
            </li>
            <li>
              <span className="font-bold">UI/UX Product Design:</span> Enhancing
              my skills in user interface (UI) and user experience (UX) design
              to create products that are not only functional but also intuitive
              and userfriendly.
            </li>
            <li>
              <span className="font-bold"> Personal Growth:</span> I’m reading
              The 7 Habits of Highly Effective People to better understand time
              management, leadership, and personal effectiveness.
            </li>
          </ol>
        </div>
      </div>
    ),
  };
 

  return (
    <div>
      <section id="work">
        <div className="flex flex-row flex-1 justify-center">
          <span className="w-[auto] h-[1px] bg-gray-400 opacity-[0.3] align-middle flex-1 relative top-5 mr-5 max-w-52 "></span>
          <h2 className="mb-10 text-center " data-aos="fade-up" >Workflow</h2>
          <span className="w-[auto] h-[1px] bg-gray-400 opacity-[0.3] flex-1 relative top-5 ml-5 max-w-52 "></span>
        </div>
        <div data-aos="fade-up"  className=" rounded-1xl dark:border-darkpurple border-purple border dark:bg-lightblack  bg-lightwhite p-8 mx-1  shadow-lg mb-40 rounded-lg flex w-auto justify-center flex-wrap  max-w-full ">
          <div className="flex   gap-10 flex-row max-md:flex-col max-md:flex-wrap justify-center ">
            <div className="max-md:justify-center flex ">
              <div className=" flex-wrap flex flex-col max-md:flex-row  max-md:flex-wrap  max-md:justify-start max-md:relative max-xs:justify-center ">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    className={`max-md:border-l-0 text-[14px] max-md:text-[12px] whitespace-nowrap max-md:border-b-2 max-md:py-4 max-md:w-[65px] max-md:px-1 max-md:items-center  max-md:justify-center border-gray-500 h-9 flex-wrap font-mono flex flex-col items-start justify-center border-l-2  p-4 border-opacity-[0.3] ${
                      active === tab.id
                        ? "dark:text-darkpurple text-purple dark:bg-[#2f2f2f] bg-[#efeeee] dark:max-xs:border-b-darkpurple max-xs:border-b-purple "
                        : "dark:text-gray-400 text-gray-800 dark:hover:text-darkpurple hover:text-purple dark:hover:bg-[#2f2f2f] hover:bg-[#efeeee] "
                    }`}
                    onClick={() => {
                      setActive(tab.id);
                      setActiveIndex(index);
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
                <div
                  className={`absolute dark:bg-darkpurple bg-purple transition-all duration-500 max-xs:hidden `}
                  style={{
                    height: vertical ? "36px" : "2px",
                    width: vertical ? "2px" : "65px",
                    transform: vertical
                      ? `translateY(${activeIndex * 36}px)`
                      : `translateX(${activeIndex * 65}px)`,
                    bottom: vertical ? "auto" : "0",
                  }}
                />
              </div>
            </div>

            <div className="max-w-[450px] flex-wrap ">{tabContent[active]}</div>
          </div>
        </div>
      </section>
      <section className="mb-40" data-aos="fade-up" >
        <h3 className="text-center my-10">How I Work</h3>
        <p className=" m-auto text-center">
          I believe meaningful solutions begin with understanding not just the
          surface-level problem, but the story behind it. Here’s how I approach
          every project, every idea, every challenge:
        </p>
        <div className="flex flex-row gap-10 justify-center py-10 max-md:flex-col">
          <div className="card" data-aos="fade-up" >
            <div >
              <div className="dark:bg-darkpurple bg-purple  text-lightwhite dark:text-lightblack font-mono rounded-full size-6 py-1 text-center text- text-xs font-bold mb-2 ">
                1
              </div>
            </div>
            <h4>Deep Discovery</h4>
            <p>
              I start with questions. I take time to understand the people, the
              problem, and the purpose. Because real change comes from clarity.
            </p>
          </div>
          <div className="text-right card" data-aos="fade-up" >
            <div className="flex justify-end">
              <div className="dark:bg-darkpurple bg-purple  text-lightwhite dark:text-lightblack font-mono rounded-full size-6 py-1 text-center text-xs font-bold mb-2 ">
                2
              </div>
            </div>
            <h4>Principle-Driven Craft</h4>
            <p className="ml-auto">
              I don’t just build for the moment I build on principles. Whether
              in code, design, or life, I aim for work that’s rooted,
              thoughtful, and built to last.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 justify-center  max-md:flex-col">
          <div className="card" data-aos="fade-up" >
            <div className="dark:bg-darkpurple bg-purple  text-lightwhite dark:text-lightblack font-mono rounded-full size-6 py-1 text-center text- text-xs font-bold mb-2 ">
              3
            </div>

            <h4>Iterative Growth</h4>
            <p>
              I value reflection, and the process of refining. And above all I
              welcome feedback. One of the greatest gifts is when someone looks
              at my work and say, “Here’s what could be better.”
            </p>
          </div>
          <div className="text-right card" data-aos="fade-up" >
            <div className="flex justify-end">
              <div className="dark:bg-darkpurple bg-purple text-lightwhite dark:text-lightblack font-mono rounded-full size-6 py-1 text-center text- text-xs font-bold mb-2 ">
                4
              </div>
            </div>
            <h4>Collaborative Spirit</h4>
            <p className="text-right ml-auto">
              I love focused solo work but I also believe in the magic of
              collaboration. I welcome ideas, challenges, and diverse
              perspectives. Great work is rarely done alone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
