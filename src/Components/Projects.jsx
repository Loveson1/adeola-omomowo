import p1 from "../assets/images/1.png";
import p2 from "../assets/images/2.png";
import p3 from "../assets/images/3.png";
import { ReactComponent as Icon } from "../assets/icons/mission.svg";

export default function Projects() {
  return (
    <div>
      <section id="projects" className=" my-14 " data-aos="fade-up" >
        <h2 className="mb-20">
          Project Overview
          <span className="w-[auto] h-[1px] bg-gray-400 opacity-[0.3] block relative top-[-15px]  ml-[250px] max-w-sm "></span>
        </h2>

        <div className=" relative flex w-full flex-row justify-between max-w-full h-full mb-40 max-md:flex-col flex-wrap ">
          <div>
            <div data-aos="fade-right"  className="absolute width-full max-w-full max-md:relative max-md:w-full">
              <img
                src={p1}
                alt="project 1 "
                className="w-[600px] max-w-full h-auto max-md:object-cover max-md:shadow-lg max-md:h-[400px] max-md:max-h-[auto] max-md:relative  max-xs:h-[500px] bg-opacity-40 bg-blend-darken bg-white dark:bg-black"
              />
            </div>
          </div>
          <div data-aos="fade-left"  className="  max-md:p-6 max-md:text-left max-w-full relative w-[500px] max-md:w-[600px]  text-right space-y-4 max-md:absolute  max-md:bg-white dark:max-md:bg-black max-md:dark:bg-opacity-80 max-md:bg-opacity-80 max-md:h-full">
            <p className="accent dark:text-darkpurple text-purple mb-[-15px] ">
              Featured Project 1
            </p>
            <h3>Nutritionist</h3>
            <p className=" max-sm:text-[16px] hover:shadow-md dark:bg-lightblack bg-lightwhite max-md:shadow-none max-md:hover:shadow-none shadow-sm max-md:p-0 max-md:py-4 p-6 text-right rounded-lg bg-opacity-90 max-md:bg-none max-md:dark:bg-opacity-0 max-md:bg-opacity-0 max-md:text-left ">
              A clean and modern landing page designed to build trust with
              health-conscious users. Features clear calls-to-action, engaging
              copy, and a layout optimized for conversions.
            </p>
            <p className="accent">HTML CSS JAVASCRIPT</p>
            <div className="flex justify-end max-md:justify-start">
              {" "}
              <a
                href="https://nutritionist-ebon.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 dark:text-gray-400 text-gray-800  hover:text-purple  dark:hover:text-darkpurple"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" relative flex-row-reverse flex w-full items-center justify-between max-w-full h-full mb-40 max-md:flex-col- flex-wrap ">
          <div>
            <div data-aos="fade-left"  className="absolute width-full max-w-full max-md:relative max-md:w-full top-4 right-0">
              <img
                src={p2}
                alt="project 2 "
                className="w-[600px] top-[-16px] max-w-full h-auto max-md:object-cover max-md:shadow-lg max-md:h-[400px] max-md:max-h-[auto] max-md:relative  max-xs:h-[500px] bg-opacity-40 bg-blend-darken bg-white dark:bg-black"
              />
            </div>
          </div>
          <div data-aos="fade-right"  className=" bottom-[-30px] max-md:bottom-0 justify-items-start max-md:m-auto max-md:p-6 max-md:text-left max-w-full relative w-[500px] max-md:w-[600px] text-right space-y-4 max-md:absolute  max-md:bg-white  dark:max-md:bg-black max-md:bg-opacity-80 max-md:dark:bg-opacity-80 max-md:h-full">
            <p className="accent dark:text-darkpurple text-purple mb-[-15px] ">
              Featured Project 2
            </p>
            <h3>Sushiman</h3>
            <p className=" text-start max-md:shadow-none max-md:hover:shadow-none hover:shadow-md max-sm:text-[16px] dark:bg-lightblack bg-lightwhite shadow-sm max-md:p-0 max-md:py-4 p-6  rounded-lg bg-opacity-90 max-md:bg-opacity-0 max-md:bg-none max-md:dark:bg-opacity-0 max-md:text-left ">
              A vibrant and appetizing landing page for online food ordering and
              reservations. Built with responsive design to highlight menu items
              and deliver a smooth user experience across all devices.
            </p>

            <p className="accent">HTML CSS JAVASCRIPT</p>
            <div className="flex justify-end max-md:justify-start">
              {" "}
              <a
                href="https://sushiman-swart.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 dark:text-gray-400 text-gray-800 hover:text-purple dark:hover:text-darkpurple"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" relative flex w-full flex-row justify-between max-w-full h-full mb-40 max-md:flex-col flex-wrap ">
          <div>
            <div data-aos="fade-right"  className="absolute top-10 width-full max-w-full max-md:relative max-md:w-full">
              <img
                src={p3}
                alt="project 3 "
                className="w-[600px] max-w-full top-[-40px] h-auto max-md:object-cover max-md:shadow-lg max-md:h-[400px] max-md:max-h-[auto] max-md:relative  max-xs:h-[500px] bg-opacity-40 bg-blend-darken bg-white dark:bg-black"
              />
            </div>
          </div>
          <div data-aos="fade-left"  className=" bottom-[-60px] max-md:bottom-0  max-md:p-6 max-md:text-left max-w-full relative w-[500px] max-md:w-[600px] text-right space-y-4 max-md:absolute dark:max-md:bg-black max-md:bg-white max-md:bg-opacity-80 max-md:dark:bg-opacity-80 max-md:h-full">
            <p className="accent dark:text-darkpurple text-purple mb-[-15px] ">
              Featured Project 3
            </p>{" "}
            <h3>Growth App </h3>
            <p className=" max-md:shadow-none max-md:hover:shadow-none shadow-sm hover:shadow-md  max-sm:text-[16px] dark:bg-lightblack bg-lightwhite max-md:p-0 max-md:py-4 p-6 text-right rounded-lg bg-opacity-90  max-md:bg-none max-md:bg-opacity-0 max-md:dark:bg-opacity-0 max-md:text-left ">
              A sleek, professional landing page tailored for SaaS startups.
              Focused on showcasing product value, driving sign-ups, and
              supporting fast-growing businesses with a conversion-driven
              design.
            </p>
            <p className="accent"> HTML CSS JAVASCRIPT</p>
            <div className="flex justify-end max-md:justify-start">
              {" "}
              <a
                href="https://growthapp-steel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 dark:text-gray-400 text-gray-800 hover:text-purple  dark:hover:text-darkpurple"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="my-56">
        <h3 className="text-center mb-10" data-aos="fade-up" >Other Noteworthy Projects</h3>
        <div className="flex flex-row justify-center  gap-10 max-sm:flex-col">
          <div data-aos="fade-up"  className=" max-sm:m-auto card w-[400px] max-w-full hover:translate-y-[-10px] transition-all duration-500 flex flex-col justify-between  ">
            <div>
              <div className="flex justify-between items-center">
                <Icon className="w-10 h-20 fill-gray-500 opacity-[0.3]" />
                <div>
                  <a
                    href="https://loveson1.github.io/modern-productivity/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 text-gray-500   hover:text-purple  dark:hover:text-darkpurple"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="opacity-[0.3] text-gray-500 mb-5">
                Modern Productivity
              </h3>

              <p>
                A simple yet effective landing page crafted to promote the
                Modern Productivity eBook. Designed for clarity and lead
                generation with a clean call-to-action flow.
              </p>
            </div>
            <div className="mono mt-5 text-[12px]  ">HTML CSS</div>
          </div>
          <div data-aos="fade-up"  className="max-sm:m-auto card w-[400px] max-w-full hover:translate-y-[-10px] transition-all duration-500 flex flex-col justify-between ">
            <div>
              <div className="flex justify-between items-center">
                <Icon className="w-10 h-20 fill-gray-500 opacity-[0.3]" />
                <div>
                  <a
                    href="https://typemaster-omega.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 text-gray-500  hover:text-purple  dark:hover:text-darkpurple"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className="opacity-[0.3] mb-5 text-gray-500">Typemaster</h3>

              <p>
                A bold, product-focused landing page highlighting the Typemaster
                keyboard. Built to showcase key features with a sleek, minimal
                design that drives customer interest.
              </p>
            </div>
            <div className="mono mt-5 text-[12px]  ">HTML CSS</div>
          </div>
        </div>
        <div className="flex flex-row justify-center  gap-10 max-sm:flex-col mt-5">
          <div data-aos="fade-up" className=" max-sm:m-auto card w-[400px] max-w-full hover:translate-y-[-10px] transition-all duration-500 flex flex-col justify-between  ">
            <div>
              <div className="flex justify-between items-center">
                <Icon className="w-10 h-20 fill-gray-500 opacity-[0.3]" />
                <div>
                  <a
                    href="https://mini-weather-8079d.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 text-gray-500   hover:text-purple  dark:hover:text-darkpurple"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="opacity-[0.3] text-gray-500 mb-5">
                Mini Weather App
              </h3>

              <p>
                A modern, responsive weather app delivering real-time forecasts
                for any city worldwide. Built with clean UI and intuitive
                functionality for a smooth user experience.
              </p>
            </div>
            <div className="mono mt-5 text-[12px]  "> HTML CSS REACT</div>
          </div>
          <div data-aos="fade-up" className="max-sm:m-auto card w-[400px] max-w-full hover:translate-y-[-10px] transition-all duration-500 flex flex-col justify-between ">
            <div>
              <div className="flex justify-between items-center">
                <Icon className="w-10 h-20 fill-gray-500 opacity-[0.3]" />
                <div>
                  <a
                    href="https://loveson1.github.io/To-win-list/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 text-gray-500  hover:text-purple  dark:hover:text-darkpurple"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className="opacity-[0.3] mb-5 text-gray-500">
                Mini To-Win List App
              </h3>

              <p>
                A lightweight to-do list app for managing daily tasks. Features
                task creation, deletion, and recovery with a simple,
                user-friendly interface.
              </p>
            </div>
            <div className="mono mt-5 text-[12px]  ">HTML CSS JAVASCRIPT</div>
          </div>
        </div>
      </section>
    </div>
  );
}
