import React from "react";
import Card from "./Card/Card";

const MainContent = () => {
  const mainData = [
    {
      img: "images/example-work01.jpg",
      title: "Blog template",
      content:
        "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt.Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
      options: "Read more",
    },
    {
      img: "images/example-work07.jpg",
      title: "Sunt nulla",
      content:
        "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt.Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
      options: "Read more",
    },
    {
      img: "images/example-work02.jpg",
      title: "Android.com website",
      content:
        "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt.Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
      options: "Read more",
    },
    {
      img: "images/example-work04.jpg",
      title: "Text-heavy website",
      content:
        "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt.Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
      options: "Read more",
    },
    {
      img: "images/example-work08.jpg",
      title: "Ex officia laborum",
      content:
        "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt.Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
      options: "Read more",
    },
    {
      img: "images/example-work06.jpg",
      title: "MDL website",
      content:
        "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt.Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.",
      options: "Read more",
    },
  ];

  return (
    <div className="mdl-grid portfolio-max-width">
      {mainData.map((val, index) => {
        return <Card key={index} val={val} data-test ='card'/>;
      })}
    </div>
  );
};

export default MainContent;
