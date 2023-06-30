import React from "react";
import Title, { TitleSize } from '../title/title'
import "./star-card.css";
import StarIcon from "../star-icon/star-icon";

function StarCard({star}) {
  return (
    <article className="star-card">
      <figure className="star-card__figure">
        <img
          src={star.image}
          className="star-card__image"
          width={313}
          height={320}
          alt={star.name}
        />
       <StarIcon className="star-card__icon" feature={star.feature} />
      </figure>
      <Title size={TitleSize.SMALL}>{star.name}</Title>
      <p className="star-card__text"  dangerouslySetInnerHTML={{ __html: star.about }}>
       
      </p>
    </article>
  );
}

export default StarCard;