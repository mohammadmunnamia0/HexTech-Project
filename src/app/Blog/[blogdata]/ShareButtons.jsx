"use client";

import { useEffect, useState } from "react";

const ShareButtons = ({ title }) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // Get the current URL in the client
    setCurrentUrl(window.location.href);
  }, []);

  const handleTwitterShare = () => {
    const text = `Check out this article: ${title}`;
    // This still works as Twitter redirects automatically
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(currentUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppShare = () => {
    const text = `Check out this article: ${title} ${currentUrl}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button
        onClick={handleTwitterShare}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Share on X
      </button>
      <button
        onClick={handleFacebookShare}
        className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition"
      >
        Share on Facebook
      </button>
      <button
        onClick={handleWhatsAppShare}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Share on WhatsApp
      </button>
    </>
  );
};

export default ShareButtons;
