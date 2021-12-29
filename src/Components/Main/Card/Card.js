/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Card = ({ val }) => {
  return (
    <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
      <div className="mdl-card__media">
        <img className="article-image" src={val.img} border="0" alt="" />
      </div>
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">{val.title}</h2>
      </div>
      <div className="mdl-card__supporting-text">{val.content}</div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent">
          {val.option}
        </a>
      </div>
    </div>
  );
};

export default Card;
