"use client";
import { useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Email submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center max-w-md w-full p-1 bg-transparent rounded-lg border border-white/15"
    >
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={handleChange}
        required
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        className="flex-1 p-3 font-sans text-white placeholder-gray-300 bg-transparent outline-none"
        onInvalid={(e) =>
          (e.target as HTMLInputElement).setCustomValidity(
            "Please enter a valid email"
          )
        }
        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
      />
      <button
        type="submit"
        className="font-sans w-40 text-[15px] font-[500] px-2 md:px-4 py-2 text-black bg-white rounded-md"
      >
        Join Us Today
      </button>
    </form>
  );
}
