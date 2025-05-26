import { useState } from "react";

const ServiceCard = ({ icon, title, subtitle, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 220; // character limit before truncation

  const shouldTruncate = description.length > limit;
  const displayedText =
    isExpanded || !shouldTruncate
      ? description
      : description.slice(0, limit) + "...";

  return (
    <section className="flex-1 p-6 rounded-lg transition bg-white flex flex-col items-center text-center shadow-md">
      <div className="mb-2">{icon}</div>
      <h1 className="text-xl font-bold mb-1">{title}</h1>
      <h3 className="text-sm font-semibold mb-2">{subtitle}</h3>
      <p className="text-gray-700 text-sm">
        {displayedText}
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 ml-1 hover:underline text-sm"
          >
            {isExpanded ? "...read less" : "...read more"}
          </button>
        )}
      </p>
    </section>
  );
};

export default ServiceCard;
