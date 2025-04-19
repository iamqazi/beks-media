"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
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
    {
      title: "React",
      image: "/astrova.png",
      link: "https:www.astorvia.com",
    },
    {
      title: "Tailwind CSS",
      image: "/senate.png",
      link: "//www.senate-europe.org/",
    },
    {
      title: "GraphQL",
      image: "/conference.png",
      link: "//www.conf3rence.com/",
    },
    { title: "GraphQL", image: "/starz.png", link: "https://starzz.eu/" },
    {
      title: "GraphQL",
      image: "/suite.png",
      link: "https://www.finsuiteconsulting.co/",
    },
    {
      title: "GraphQL",
      image: "/luns.png",
      link: "https://lunadesigner.net/",
    },
    {
      title: "GraphQL",
      image: "/blockchain.png",
      link: "https://womeninblockchaintalks.com/",
    },
    {
      title: "GraphQL",
      image: "/TCU.png",
      link: "https://www.thecryptoupdates.com/",
    },
    {
      title: "GraphQL",
      image: "/element.png",
      link: "https://clementius.com/",
    },
    {
      title: "GraphQL",
      image: "/startups.png",
      link: "https//www.urstartupsucks.com/",
    },
  ];

  return (
    <>
      <h2 className="font-[800] md:text-[48px] leading-[100%] mt-10 text-white tracking-[0%] max-w-[950px] mx-auto  text-center font-akira  text-[30px]">
        Our Strategic Partners
      </h2>
      <div className="mt-[87px] border-y border-[#403E44] flex flex-col items-center sec-5-trigger mx-auto w-full overflow-hidden">
        <div className="flex flex-col gap-8 md:gap-16 w-full">
          <div className="sec-5-move-anim relative top-[200px] flex flex-col gap-11 opacity-0 md:gap-16">
            <div className="h-[11.125rem] py-6 flex justify-center w-full overflow-hidden">
              <Marquee loop={0} autoFill className="max-w-full">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="mx-4 flex flex-col items-center gap-1 md:mx-8"
                  >
                    <Link href={tech.link} className="cursor-pointer">
                      <Image
                        src={tech.image}
                        alt={tech.title}
                        className="w-auto h-[40px] max-w-[150px]"
                        width={100}
                        height={40}
                      />
                    </Link>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerAnimation;
