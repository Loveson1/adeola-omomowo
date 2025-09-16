import { useEffect, useRef, useState } from "react";
import T1 from "../assets/images/T1.jpg";
import T2 from "../assets/images/T2.jpg";
import T3 from "../assets/images/T3.jpg";
import T4 from "../assets/images/T4.jpg";
import T5 from "../assets/images/T5.jpg";

const testimonials = [
  {
    name: "Mr. Arikawe Sunday",
    title: "Founder, Abundant Light Mega Academy & Mentor",
    image: T1,
    text: `"Adeola played multiple roles in our school — teacher, designer, media team, exam board and did them all with excellence. What impressed me most was his honesty, work ethic, and heart for God. He supported me in every area, both spiritually and physically. He is a peaceful, promising leader. Any organization that has him will never want him to leave."`,
  },
  {
    name: "David Debajo",
    title: "Serial Entrepreneur & Creative Partner.",
    image: T2,
    text: `"Adeola is a high-value asset and an intuitive individual who taps deeply into knowledge and personal growth. His drive to improve and his ability to serve with excellence have always made him worthy of my time and investment."`,
  },
  {
    name: "Fashola Christiana",
    title: "Biochemist & University Peer ",
    image: T3,
    text: `"Adeola has always been someone who goes out of his way to help others. During university, he used his printing business to support fellow students, often offering help on credit. His selflessness and joy in serving others made a difference for many of us."`,
  },
  {
    name: "Victor Nwachukwu",
    title: "Fellow Educator & NYSC Colleague",
    image: T4,
    text: `"Serving alongside Adeola at Habsan Achievers Academy was incredibly inspiring. He brought out the best in everyone — students and teachers alike. His commitment to carrying others along, spotting potential, and going the extra mile is rare and deeply impactful. He's a blessing to every space he enters."`,
  },
  {
    name: " Hamza Shuaibu",
    title: "Junior Fullstack Developer & Mentee",
    image: T5,
    text: `"Since you started guiding me, it feels like the things I thought would take five years now feel like one. You've accelerated my growth, made me believe in myself, and supported me in ways I'll never forget. I’m deeply grateful and promise to make you proud."`,
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);
  const cardWidth = 300 + 20; // card width + gap

  const totalCards = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % totalCards;
        scrollRef.current.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });
        return nextIndex;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [totalCards, cardWidth]);

  return (
    <section id="testimonials" data-aos="fade-up" >
      <h2 className="text-center mb-10">
        What People I’ve Worked With Say About Me.
      </h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="whitespace-nowrap overflow-x-auto overflow-y-auto snap-x snap-mandatory scroll-smooth scroll-hide"
        >
          <div className="flex flex-row gap-5 mt-10 mb-10">
            {testimonials.map((item, i) => (
              <div key={i} className="card w-[300px] shrink-0 snap-start">
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-24 rounded-full border-darkpurple border-2 mb-2 "
                  />
                </div>
                <h3 className="text-center">{item.name}</h3>
                <h4 className="mono text-xs mb-10 text-center whitespace-normal break-words">
                  {item.title}
                </h4>
                <p className="text-sm whitespace-pre-line">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="dark:bg-lightblack bg-lightwhite inline-flex gap-4 p-2.5 rounded-full">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => {
                  setIndex(i);
                  scrollRef.current.scrollTo({
                    left: i * cardWidth,
                    behavior: "smooth",
                  });
                }}
                className={`size-1 rounded-full cursor-pointer ${
                  index === i ? "dark:bg-darkpurple bg-purple" : "dark:bg-black bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
