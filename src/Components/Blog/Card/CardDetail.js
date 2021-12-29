import React from "react";

const CardDetail = ({ val }) => {
  return (
    <div className="mdl-grid mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
      <div className="mdl-card__media mdl-cell mdl-cell--12-col-tablet">
        <img className="article-image" src={val.img} border="0" alt="" />
      </div>
      <div className="mdl-cell mdl-cell--8-col">
        <h2 className="mdl-card__title-text">{val.title}</h2>
        <div className="mdl-card__supporting-text padding-top">
          <span>{val.postHistory}</span>
          <div id="tt1" className="icon material-icons portfolio-share-btn">
            share
          </div>
          <div className="mdl-tooltip" for="tt1">
            {val.share}
          </div>
        </div>
        <div className="mdl-card__supporting-text no-left-padding">
          <p>{val.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
