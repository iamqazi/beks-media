import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  email: string;
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
    bio: "Rebekah Jenkins was a national award-winning tennis coach before launching her career in Marketing. She is now the youngest Senator in the Senate of Economy International, a Fintech start-up founder, and one of the leading founders of Beks Media. Her passion is to help businesses develop a winning strategy that makes them the #1 choice in their niche. Rebekah has a B.S. in Psychology: Human Development & is currently pursuing her MBA.",
    imageUrl: "/t2.png",
    email: "beks@beksmedia.com",
    socialLinks: {
      facebook: "https://www.linkedin.com/in/rebekah-jenkins-0739b051/",
      linkedin: "https://www.linkedin.com/in/rebekah-jenkins-0739b051/",
      instagram:
        "https://www.instagram.com/cryptowomannft/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
      twitter: "https://www.linkedin.com/in/rebekah-jenkins-0739b051/",
    },
  },
  {
    id: "feridun-gueven",
    name: "FERIDUN GUEVEN",
    title: "PARTNER",
    bio: "With a talent for inspiring others, he has trained managers and held major motivational seminars. Today, he works as a strategic business consultant, using his diverse experience to drive growth and empower people to reach their full potential. His career includes activities in sales development, sales management, and the foundation of EREA WORLD AG, a fintech startup & blockchain company, which he accompanies as a strategic advisor.",
    imageUrl: "/t1.png",
    email: "beks@beksmedia.com",
    socialLinks: {
      facebook: "https://www.facebook.com/feridun.guven.3",
      linkedin: "https://www.linkedin.com/in/feridun-g%C3%BCven-319ab899/",
      instagram:
        "https://www.instagram.com/f.gven/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
      twitter: "https://x.com/feridun_gven1?s=21&t=hV5PnoF3efn8nwmG8h8Bug",
    },
  },
];
const socialIcons: Record<
  "facebook" | "linkedin" | "instagram" | "twitter",
  string
> = {
  facebook: "/facebook.png",
  linkedin: "/linkedin.png",
  instagram: "/insta.png",
  twitter: "/x.png",
};

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
            {/* Image container */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[430px] lg:w-[430px] lg:h-[530px]">
                <Link
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                >
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={430}
                    height={530}
                    className="w-full h-auto lg:h-[530px] object-contain grayscale cursor-pointer"
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* Member Details */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-4xl md:text-[44px] font-[800]">
                {member.name}
              </h2>
              <p className="text-gray-400 font-akira font-[800] uppercase tracking-wider">
                {member.title}
              </p>
              <p className="text-[18px] leading-[28px] font-[300] md:text-[24px] text-justify font-inter ">
                {member.bio}
              </p>
              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                {Object.entries(member.socialLinks).map(([platform, url]) =>
                  url && platform in socialIcons ? (
                    <Link
                      key={platform}
                      href={url}
                      aria-label={platform}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={socialIcons[platform as keyof typeof socialIcons]}
                        alt={platform}
                        width={24}
                        height={24}
                        className="hover:opacity-75 transition-opacity"
                      />
                    </Link>
                  ) : null
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
