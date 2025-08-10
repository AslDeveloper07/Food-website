import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "bounce.out",
        stagger: 0.05,
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1,
      }
    );
  }, []);

  const title = "Order your favourite food here";

  return (
    <div className="header h-[32rem] my-[20px] mx-0 relative">
      <div className="absolute flex flex-col items-start gap-1.5 max-w-[50%] bottom-[15%] left-[4vw]">
        <h2
          className="title font-medium text-white text-4xl flex flex-wrap"
          ref={titleRef}
        >
          {title.split("").map((char, index) => (
            <span key={index} className="letter inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <p
          className="mt-6 w-[600px] text-white font-medium leading-relaxed"
          ref={paragraphRef}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa illum
          minima natus mollitia unde voluptates hic fuga accusamus quisquam
          placeat.
        </p>

        <button className="bg-white py-2 px-5 rounded-4xl text-[14px] mt-6 cursor-pointer">
          View menu
        </button>
      </div>
    </div>
  );
};

export default Header;
