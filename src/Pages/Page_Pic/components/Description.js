import React from "react";
import "../styles/fotos.css";

function Description({ description }) {
  const transformDescription = (desc) => {
    const withLinks = desc.replace(
      /https?:\/\/[^\s]+/g,
      (url) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
    );

    const withLineBreaks = withLinks.replace(/\n/g, "<br>");

    return withLineBreaks;
  };

  return (
    <div
      className="container__descp"
      dangerouslySetInnerHTML={{ __html: transformDescription(description) }}
    />
  );
}

export default Description;
