import React from "react";
import Title from "../../ui/title/title";
import "./stars-list.css";
import StarCard from "../../ui/star-card/star-card";
import Button from "../../ui/button/button";

function StarsList({ stars }) {
  return (
    <section className="star-list">
      {stars?.length ? (
        <>
          <Title>Наши звезды</Title>
          <ul className="star-list__list">
            {stars.map((star) => (
              <li className="star-list__item">
                <StarCard star={star} />
              </li>
            ))}
          </ul>
          <Button minWidth={353}>Купить билет</Button>
        </>
      ) : null}
    </section>
  );
}

export default StarsList;
