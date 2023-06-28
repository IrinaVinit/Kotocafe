import React from "react";
import Title from "../../ui/title/title";
import "./stars-list.css";
import StarCard from "../../ui/star-card/star-card";
import Button from "../../ui/button/button";

function StarsList() {
  return (
    <section className="star-list">
      <Title>Наши звезды</Title>
      <ul className="star-list__list">
        <li className="star-list__item">
            <StarCard/>
        </li>
      </ul>
      <Button minWidth={353}>Купить билет</Button>
    </section>
  );
}

export default StarsList;
