import Image from "next/image";
import React from "react";

interface ButtonImageProps {
  text: string;
  onClick: () => void;
}

const ButtonImage: React.FC<ButtonImageProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-block border-none bg-transparent"
    >
      {/* Hardcoded Image */}
      <Image
        width={300}
        height={80}
        src="/button.png"
        alt="Button"
        className="w-68 h-auto"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Centered Text */}
      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
        {text}
      </span>
    </button>
  );
};

export default ButtonImage;
