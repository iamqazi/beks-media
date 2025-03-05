// components/TeamSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "rebekah-jenkins",
    name: "REBEKAH JENKINS",
    title: "LEADING PARTNER",
    bio: "Rebekah Jenkins was a national award winning tennis coach before launching her career in Marketing. She is now the youngest Senator in the Senate of Economy International, a Fintech start-up founder and one of the leading founders of Beks Media. Her passion is to help businesses to develop a winning strategy that makes them the #1 choice in their niche. Rebekah has a B.S. in Psychology: Human Development & is currently pursuing her MBA.",
    imageUrl: "/t2.png",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: "feridun-gueven",
    name: "FERIDUN GUEVEN",
    title: "PARTNER",
    bio: "With a talent for inspiring others, he has trained managers and held major motivational seminars. Today, he works as a strategic business consultant, using his diverse experience to drive growth and empower people to reach their full potential. His career includes activities in sales development, sales management and the foundation of EREA WORLD AG, a fintech startup & blockchain company, which he accompanies as a strategic advisor.",
    imageUrl: "/t1.png",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-6 mb-20 items-center`}
          >
            {/* Image container with much more padding to accommodate rotation */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-sm px-12 py-12">
                {/* Centered container for the image with rotation */}
                <div>
                  {/* Image container */}
                  <div className="w-full h-full overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={430}
                      height={520}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      className="grayscale"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-4xl md:text-[44px] font-[800] ">
                {member.name}
              </h2>
              <p className="text-gray-400 font-akira font-[800] uppercase tracking-wider">
                {member.title}
              </p>
              <p className="text-sm md:text-base font-akira leading-relaxed">
                {member.bio}
              </p>

              <div className="flex space-x-4 pt-2">
                {member.socialLinks.facebook && (
                  <Link
                    href={member.socialLinks.facebook}
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-6 h-6 text-white hover:text-gray-300" />
                  </Link>
                )}
                {member.socialLinks.linkedin && (
                  <Link
                    href={member.socialLinks.linkedin}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6 text-white hover:text-gray-300" />
                  </Link>
                )}
                {member.socialLinks.instagram && (
                  <Link
                    href={member.socialLinks.instagram}
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-6 h-6 text-white hover:text-gray-300" />
                  </Link>
                )}
                {member.socialLinks.twitter && (
                  <Link href={member.socialLinks.twitter} aria-label="Twitter">
                    <FaTwitter className="w-6 h-6 text-white hover:text-gray-300" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
