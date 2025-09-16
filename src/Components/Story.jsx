import image from "../assets/images/me.jpg";
import { ReactComponent as Icon } from "../assets/icons/mission.svg";

export default function Story() {
  const more = () => {
    let open = document.getElementById("open");
    let see = document.getElementById("see");
    open.classList.add("open");
    see.style.display = "none";
  };

  const close = () => {
    let open = document.getElementById("open");
    let see = document.getElementById("see");
    open.classList.remove("open");
    see.style.display = "inline-block";
  };
  return (
    <div>
      <section className="my-40 m-auto" id="story">
        <h2 className="mb-10 m-auto " data-aos="fade-right" >
          My Story
          <span className="w-[auto] h-[1px] bg-gray-400 opacity-[0.3] block relative top-[-15px]  ml-[150px] max-w-[350px]  "></span>
        </h2>
        <div className="flex flex-col gap-10 md:flex-row " data-aos="fade-up" >
          <div className="">
            <p>
              I wasn’t always a developer. In fact, I used to be afraid of code.
              I began as a writer with fire in my bones desperate to change.
            </p>
            <br></br>
            <p>
              I wrote about change, about purpose, about healing. I began
              walking into university lecture halls, speaking to strangers,
              seniors, classmates, all with one message: “God loves you. You
              were made for greatness. Choose purpose. Make a change.”
            </p>
            <br></br>
            <p>
              I also had a skill: design. I’d trained as a brand identity
              designer, but something about it left me empty. I didn’t just want
              to make things look good. I wanted to build things people could
              interact with. I wanted to create tools that would live in
              someone’s hands and heart. That’s how I found code. Or maybe, how
              code found me.&nbsp;
              <span
                className="dark:text-darkpurple text-purple more  cursor-pointer"
                id="see"
                onClick={more}
              >
                See more...
              </span>
            </p>
            <br></br>
            <div className="close" id="open">
              <p>
                A friend gave me access to a Fullstack course, and I saw the
                power for the first time: you could build something from
                nothing. You could reach a child in the most remote corner of
                the world with a phone and change their story forever.
              </p>
              <br></br>
              <p>
                I’m still learning, still a beginner in many ways. But I’m
                growing fast. Because to me, coding is more than syntax and
                logic it’s how I’ll reach the ones I couldn’t reach before.
              </p>
              <br></br>
              <p>
                I believe in excellence. But more than that, I believe in
                kindness, in living with purpose, and in being guided by God.
                With these three, I believe we can transform lives not just our
                own, but the lives of those around us. And that’s why I code.
                <span
                  className="dark:text-darkpurple text-purple more  cursor-pointer"
                  id="close"
                  onClick={close}
                >
                  &nbsp;See less...
                </span>
              </p>

              <div className="card w-[400px] max-w-full mt-5">
              <Icon className="w-12 h-20 fill-gray-500 mb-3 opacity-[0.3]" />
              <h3 className="opacity-[0.3] mb-5 text-gray-500">
                My Mission Statement{" "}
              </h3>

              <p>
                My mission is to live a life of love, kindness, and Impact.
                Striving for excellence, serving generously, inspiring others to
                grow and fulfill their God-given potential, and leaving the
                world better than I found it.
              </p>
            </div>
            </div>
          </div>
          <div>
            <div data-aos="fade-up" >
              <img src={image} className="w-[400px] rounded-lg " alt="Me" />
            </div>
        
          
          </div>
        </div>
      </section>
    </div>
  );
}
