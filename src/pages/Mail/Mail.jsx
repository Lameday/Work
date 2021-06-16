import React, { useState } from "react";
import AddNew from "./AddNew/AddNew.jsx";
import AccordionComponent from "./Accordion/AccordionComponent.jsx";

const Mail = () => {
  const [posts, setPosts] = useState([
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
  ]);
  const handleAdd = () => {
    setPosts(posts.concat());
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <AddNew />
      {posts.map(({ title, subtitle, content }) => (
        <AccordionComponent
          title={title}
          subtitle={subtitle}
          content={content}
          handleAdd={handleAdd}
        />
      ))}
    </div>
  );
};

export default Mail;
