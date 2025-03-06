import Image from "next/image";
import React from "react";

interface ButtonImageProps {
  text: string;
  onClick: () => void;
  icon?: string; // Optional icon prop
}

const ButtonImage: React.FC<ButtonImageProps> = ({ text, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-block border-none bg-transparent"
    >
      {/* Responsive Background Image */}
      <Image
        width={350}
        height={80}
        src="/button.png"
        alt="Button"
        className="w-[350px] h-auto md:w-[250px] sm:w-[200px]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Centered Text with Optional Icon */}
      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-[24px] md:text-[18px] sm:text-[16px] gap-2">
        {icon && (
          <Image
            src={icon}
            alt="Icon"
            width={24}
            height={24}
            className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4"
          />
        )}
        {text}
      </span>
    </button>
  );
};

export default ButtonImage;
