import React from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import produtoTeste from "../assets/produto_teste_.webp";
import fisioterapiaImg from "../assets/fisioterapia.png";
import acumputuraImg from "../assets/acumputura.jpg";
import ozonioterapiaImg from "../assets/ozonioterapia.png";
import auriculoterapiaImg from "../assets/auriculoterapia.png";
import drenagemImg from "../assets/drenagem-linfatica.jpg";
import pilatesImg from "../assets/pilates.jpg";
import limpezaImg from "../assets/limpeza-de-pele.jpg";
import esteticaImg from "../assets/estetica-facial.jpg";

const services = [
  {
    title: "Fisioterapia",
    desc: "Avaliação e tratamento personalizado para reabilitação física, alívio de dores e promoção do bem-estar.",
    img: fisioterapiaImg,
  },
  {
    title: "Acupuntura",
    desc: "Técnica milenar que utiliza agulhas para estimular pontos do corpo, auxiliando no equilíbrio energético e no tratamento de dores.",
    img: acumputuraImg,
  },
  {
    title: "Ozonioterapia",
    desc: "Terapia que utiliza ozônio medicinal para potencializar processos de cura, melhorar a circulação e fortalecer o sistema imunológico.",
    img: ozonioterapiaImg,
  },
  {
    title: "Auriculoterapia",
    desc: "Tratamento que estimula pontos específicos na orelha para promover equilíbrio físico e emocional.",
    img: auriculoterapiaImg,
  },
  {
    title: "Drenagem Linfática",
    desc: "Massagem suave que estimula o sistema linfático, reduzindo inchaços, toxinas e promovendo relaxamento.",
    img: drenagemImg,
  },
  {
    title: "Pilates",
    desc: "Exercícios focados em força, flexibilidade e postura, promovendo saúde física e prevenção de lesões.",
    img: pilatesImg,
  },
  {
    title: "Limpeza de Pele",
    desc: "Procedimento estético que remove impurezas, células mortas e controla oleosidade, deixando a pele mais saudável.",
    img: limpezaImg,
  },
  {
    title: "Estética Facial",
    desc: "Tratamentos personalizados para rejuvenescimento, hidratação e revitalização da pele do rosto.",
    img: esteticaImg,
  },
];

const whatsappNumber = "555521999692539"; // Substitua pelo número real

const serviceTemplate = (service) => {
  const message = encodeURIComponent(`Gostaria de saber mais sobre ${service.title}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
  return (
    <div className="carousel-card animate-pop-in">
      <img
        src={service.img}
        alt={service.title}
        className="carousel-img animate-on-scroll"
      />
      <h3 className="animate-on-scroll">{service.title}</h3>
      <p className="animate-on-scroll">{service.desc}</p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="carousel-action animate-on-scroll"
        style={{ textDecoration: "none" }}
      >
        Saiba mais
      </a>
    </div>
  );
};

const responsiveOptions = [
  {
    breakpoint: "900px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "600px",
    numVisible: 1,
    numScroll: 1,
  },
];

export default function CarouselPrime() {
  return (
    <section className="carousel-section">
      <h2 className="section-title">Serviços</h2>
      <Carousel
        value={services}
        itemTemplate={serviceTemplate}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        circular
        showIndicators
        showNavigators
      />
    </section>
  );
}
