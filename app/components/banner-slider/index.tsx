"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const BannerAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".sec-5-move-anim", {
      opacity: 1,
      top: 0,
      duration: 0.7,
      ease: "power1",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".sec-5-trigger",
        start: "top 70%",
      },
    });
  }, []);

  const technologies = [
    { title: "React", image: "/1.png" },
    { title: "Tailwind CSS", image: "/2.png" },
    { title: "GraphQL", image: "/3.png" },
    { title: "GraphQL", image: "/4.png" },
    { title: "GraphQL", image: "/5.png" },
  ];

  return (
    <div
      className={`mt-[87px] border flex justify-center items-center border-[#403E44] sec-5-trigger  mx-auto w-full overflow-hidden`}
    >
      <div className="flex flex-col gap-8 md:gap-16 w-full">
        <div className="sec-5-move-anim relative top-[200px] flex flex-col gap-11 opacity-0 md:gap-16">
          <div className="h-[11.125rem] py-6 flex justify-center w-full overflow-hidden">
            <Marquee loop={0} autoFill className="max-w-full">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="mx-4 flex flex-col items-center gap-1 md:mx-8"
                >
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    className="w-auto h-[40px] max-w-[150px]"
                    width={100}
                    height={40}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAnimation;
