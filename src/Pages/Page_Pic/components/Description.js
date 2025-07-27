import React from "react";
import "../styles/fotos.css";

function Description({ description }) {
  const transformDescription = (desc) => {
    return desc.replace(
      /https?:\/\/[^\s]+/g,
      (url) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
    );
  };

  return (
    <div
      className="container__descp"
      dangerouslySetInnerHTML={{ __html: transformDescription(description) }}
    />
  );
}

export default Description;
