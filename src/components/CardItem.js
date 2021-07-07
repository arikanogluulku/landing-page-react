import React from "react";
import { Link } from "react-router-dom";
function CardItem({ src, text, label, path }) {
  return (
    <>
      <li className="cards_item">
        <Link className="cards_item_link" to={path}>
          <figure className="cards_item_pic-wrap" data-category={label}>
            <img src={src} alt="imgfdsfs" className="cards_item_img"></img>
          </figure>
          <div className="cards_item_info">
            <h5 className="cards_item_text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
