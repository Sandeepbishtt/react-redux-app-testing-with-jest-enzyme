import React from "react";

const AboutCard = (props) => {
  return (
    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">{props.value.title}</h2>
      </div>
      <div className="mdl-card__media">
        <img
          className="article-image"
          src={props.value.img}
          border="0"
          alt=""
        />
      </div>

      <div className="mdl-grid portfolio-copy">
        <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">
          {props.value.headline}
        </h3>
        <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
          <p>{props.value.content}</p>
        </div>

        <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">
          {props.value.sub_headline}
        </h3>

        <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
          <p>{props.value.content_two}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
