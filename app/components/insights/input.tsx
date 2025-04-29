"use client";
import { useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Replace with your Mailchimp form action URL
      const mailchimpUrl =
        "https://beksmedia.us19.list-manage.com/subscribe/post?u=0997191cc10e6d445d1f41e0f&id=ca2e8926b6&f_id=006f79e7f0";
      // Create a FormData object to mimic form submission
      const formData = new FormData();
      formData.append("EMAIL", email);

      // Submit to Mailchimp
      await fetch(mailchimpUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // Since 'no-cors' responses are opaque, assume success if no error
      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Failed to subscribe. Please try again later.");
      console.error("Mailchimp error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-stretch sm:items-center max-w-md w-full p-2 bg-transparent rounded-lg border border-white/15"
      >
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={handleChange}
          required
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          className="flex-1 p-3 text-sm font-inter text-white placeholder-gray-300/50 bg-transparent outline-none border border-white/10 rounded-md sm:rounded-none sm:border-none"
          onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => {
            (e.target as HTMLInputElement).setCustomValidity(
              "Please enter a valid email"
            );
          }}
          onInput={(e: React.FormEvent<HTMLInputElement>) => {
            (e.target as HTMLInputElement).setCustomValidity("");
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w md:w-[170px] h-[54px] font-inter text-xs md:text-[20px] font-medium px-4 py-2 text-black bg-white rounded-md ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Join Us Today"}
        </button>
      </form>
      {success && (
        <p className="mt-2 text-green-500 text-sm">Successfully subscribed!</p>
      )}
      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
    </div>
  );
}
