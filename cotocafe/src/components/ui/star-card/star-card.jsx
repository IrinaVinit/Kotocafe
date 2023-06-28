import React from "react";
import Title, { TitleSize } from '../title/title'
import "./star-card.css";

function StarCard() {
  return (
    <article className="star-card">
      <figure className="star-card__figure">
        <img
          src="https://i.ibb.co/27Mdx7k/Rectangle-4-2.png"
          className="star-card__image"
          width={313}
          height={320}
          alt="изображение кота"
        />
        <span className="star-card__icon">Ласковый</span>
      </figure>
      <Title size={TitleSize.SMALL}>Кошка Сью</Title>
      <p className="star-card__text">
        Эта юная красавица очень общительная и ласковая уже с первого дня, как
        приехала в кафе.
      </p>
    </article>
  );
}

export default StarCard;