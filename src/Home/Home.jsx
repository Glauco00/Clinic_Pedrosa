import React, { useEffect } from "react";
import NavBar from "./NavBar";
import bannerImg from "../assets/image.png";
import profImg from "../assets/foto-dr.jpg";
import Timeline from "./Timeline";
import Carousel from "./Carousel";
import Footer from "./Footer";
import whatsappLogo from "../assets/WhatsApp.svg";
import "./App.css";

function Home() {
  useEffect(() => {
    const animateElements = [
      { selector: ".animate-on-scroll", active: "animate-fade-up" },
      { selector: ".animate-on-scroll-left", active: "animate-fade-left" },
      { selector: ".animate-on-scroll-right", active: "animate-fade-right" },
      { selector: ".animate-pop-in", active: "animate-pop-in-active" },
    ];
    animateElements.forEach(({ selector, active }) => {
      const elements = document.querySelectorAll(selector);
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(active);
            } else {
              entry.target.classList.remove(active);
            }
          });
        },
        { threshold: 0.15 }
      );
      elements.forEach((el) => observer.observe(el));
    });
  }, []);
  return (
    <>
      <NavBar />
      <main>
        {/* Banner chamativo com Bootstrap */}
        <section
          id="banner"
          className="container-fluid py-0 animate-on-scroll"
          style={{
            background: "linear-gradient(135deg, #e3eafc 40%, #1976d2 100%)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            minHeight: "350px",
            width: "100%",
            marginTop: "3.5rem",
            borderRadius: "12px",
            overflow: "hidden"
          }}
        >
          <div className="row align-items-stretch" style={{ minHeight: "350px" }}>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-0" style={{ background: "#e3eafc", minHeight: "220px" }}>
              <img
                src={bannerImg}
                alt="Banner Saúde"
                className="img-fluid animate-on-scroll-left"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  border: "none",
                  borderRadius: "0"
                }}
              />
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-0" style={{ background: "transparent", color: "#fff", minHeight: "220px" }}>
              <h1
                className="text-center fw-bold w-100 animate-on-scroll-right"
                style={{
                  fontWeight: 700,
                  padding: "2rem",
                  margin: 0,
                  background: "transparent",
                  fontSize: "5rem"
                }}
              >
                <span className="d-none d-md-block" style={{ fontSize: "4rem" }}>LADO A LADO CUIDANDO DA SUA SAÚDE</span>
                <span className="d-none d-sm-block d-md-none" style={{ fontSize: "2.2rem" }}>LADO A LADO CUIDANDO DA SUA SAÚDE</span>
                <span className="d-block d-sm-none" style={{ fontSize: "2rem" }}>LADO A LADO CUIDANDO DA SUA SAÚDE</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Sobre o profissional */}
        <section id="sobre" className="sobre-profissional-section">
          <div className="sobre-profissional-container">
            <div className="sobre-profissional-img-wrapper">
              <img
                src={profImg}
                alt="Profissional"
                className="sobre-profissional-img animate-pop-in"
              />
            </div>
            <div className="sobre-profissional-text">
              <h2 className="animate-on-scroll">Sobre o Profissional</h2>
              <p className="animate-on-scroll">
                Olá, meu nome é Deuza e sou fisioterapeuta formada desde 1994 pela
                Universidade Castelo Branco (UCB). Ao longo desses mais de 30 anos
                de trajetória, dediquei minha vida ao cuidado com a saúde, à
                reabilitação e ao bem-estar dos meus pacientes, sempre com
                compromisso, empatia e atualização constante. Sou pós-graduada em
                Fisioterapia Ortopédica e Traumatológica, especialista em
                Acupuntura pela Faculdade de Reabilitação do ASCE, e também tenho
                pós-graduação em Cosmetologia e Estética Avançada pela Estácio.
                Além disso, aprofundei meus conhecimentos com uma especialização
                em Fisioterapia Intensiva pelo Centro de Estudos do Hospital e
                Clínica São Gonçalo (FISICO).
              </p>
              <p className="animate-on-scroll">
                Buscando oferecer um atendimento completo e humanizado, realizei
                ainda diversos cursos, entre eles:
              </p>
              <ul style={{ marginLeft: "1rem" }}>
                <li className="animate-pop-in">Curso completo de RPG (Escola Brasileira de Saúde)</li>
                <li className="animate-pop-in">
                  Curso completo de Pilates (Instituto Brasileiro de Fisioterapia)
                </li>
                <li className="animate-pop-in">Curso de Ozonioterapia e Terapias Integrativas</li>
                <li className="animate-pop-in">Curso de Ozonioterapia Estética (INAESP Educacional)</li>
                <li className="animate-pop-in">Curso de Skinbooster Estético (INAESP Educacional)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Linha do tempo */}
        <section className="timeline-section">
          <Timeline />
        </section>

        {/* Carrossel de serviços */}
        <section id="servicos" className="carousel-section">
          <Carousel />
        </section>

        {/* Rodapé com contatos e mapa */}
        <footer id="footer" className="footer">
          <Footer />
        </footer>

        {/* Botão flutuante do WhatsApp */}
        <a
          href="https://wa.me/5521999692539?text=Olá, gostaria de agendar uma consulta!" // Substitua pelo número real da doutora
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Fale com a Doutora pelo WhatsApp"
        >
          <img
            src={whatsappLogo}
            alt="WhatsApp"
            className="whatsapp-logo"
            width={48}
            height={48}
          />
        </a>
      </main>
    </>
  );
}

export default Home;
