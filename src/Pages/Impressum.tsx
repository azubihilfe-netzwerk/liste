import React, { FC } from "react";

const Impressum: FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-6 ">
      <h1 className="text-4xl font-bold text-navbar-blue" text-navbar-blue>
        Impressum
      </h1>
      <p>Dies ist eine temporäre Demo-Website für Präsentationszwecke.</p>
      <p>Kontakt:</p>
      <p>Frederik König</p>
      <p>frederik.koeonig@posteo.de</p>
    </div>
  );
};

export default Impressum;
