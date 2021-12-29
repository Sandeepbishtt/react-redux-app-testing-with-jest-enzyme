import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  const data = [
    {
      title: "About",
      img: "images/about-header.jpg",
      headline: "Introduction",
      content:
        "Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip suntelit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniamreprehenderit laborum occaecat id proident nulla veniam. Duis enimdeserunt voluptate aute veniam sint pariatur exercitation. Iruremollit est sit labore est deserunt pariatur duis aute laboriscupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.",
      sub_headline: "Irure mollit est sit labore",
      content_two:
        "Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip suntelit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniamreprehenderit laborum occaecat id proident nulla veniam. Duis enimdeserunt voluptate aute veniam sint pariatur exercitation. Iruremollit est sit labore est deserunt pariatur duis aute laboriscupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.",
    },
  ];
  return (
    <div className="mdl-grid portfolio-max-width">
      {data.map((value, index) => {
        return <AboutCard key={index} value={value} />;
      })}
    </div>
  );
};

export default About;
