import React from 'react';
import './App.css';

const timelineData = [
  { year: '1995', place: 'Ação Cristã Vicente Moretti', desc: 'Tratamentos voltados para PCDs.' },
  { year: '1999', place: 'Hospital Estadual Pedro II', desc: 'Tratamentos com doenças gerais.' },
  { year: '2006', place: 'Instituto Nacional de Câncer – INCA', desc: 'Tratamentos com doenças oncológicas.' },
  { year: '2014', place: 'Secretaria de Estado de Administração Penitenciária', desc: 'Tratamentos gerais de internos.' },
];

export default function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="section-title">Experiências Profissionais</h2>
      <div className="timeline">
        {timelineData.map((item, idx) => (
          <div className="timeline-item animate-pop-in" key={idx}>
            <div className="timeline-year animate-on-scroll">{item.year}</div>
            <div className="timeline-place animate-on-scroll">{item.place}</div>
            <div className="timeline-desc animate-on-scroll">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
