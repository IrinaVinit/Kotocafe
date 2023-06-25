import React from "react";
import "./about.css";
import Title, { TitleSize } from "../../ui/title/title";

function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__texts">
          <Title size={TitleSize.BIG}>Первое в России котокафе</Title>
          <p className="about__text">
            Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый из них
            ищет новый дом. Животных можно гладить, фотографировать, играть с ними.
          </p>
          <p className="about__text about__text_work-time">
            Рабочее время с 8:00 до 23:00
          </p>
          <p className="about__text about__text_address">
            Санкт-Петербург, набережная реки Карповки, дом 5, литера П
          </p>
        </div>
        <div className="about__img"></div>
      </div>
    </section>
  );
}

export default About;
