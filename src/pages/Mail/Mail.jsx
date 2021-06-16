import React from "react";

import AccordionComponent from "./Accordion/AccordionComponent.jsx";

const posts = [
  {
    title: "First title",
    subtitle: "First subtitle",
    content: "First content"
  },
  {
    title: "Second title",
    subtitle: "Second subtitle",
    content: "Second content"
  },
  {
    title: "Third title",
    subtitle: "Third subtitle",
    content: "Third content"
  },
  {
    title: "Fourth title",
    subtitle: "Fourth subtitle",
    content: "Fourth content"
  },
  {
    title: "Fifth title",
    subtitle: "Fifth subtitle",
    content: "Fifth content"
  },
  {
    title: "Sixth title",
    subtitle: "Sixth subtitle",
    content: "Sixth content"
  }
];

const Mail = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {posts.map(({ title, subtitle, content }) => (
        <AccordionComponent
          title={title}
          subtitle={subtitle}
          content={content}
        />
      ))}
    </div>
  );
};

export default Mail;
