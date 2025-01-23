import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sobre() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <header className="bg-dark text-white py-3 shadow">
        <div className="container text-center">
          <h1 className="display-4">Nossa Empresa</h1>
        </div>
      </header>
      <main className="flex-grow-1">
        <section className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="bg-white p-4 rounded shadow-sm">
                <h2 className="h4">Sobre Nós</h2>
                <p className="text-muted">
                  Bem-vindo à Agenda.Site! Somos fornecedores de agendas. Com uma equipe dedicada de profissionais, estamos comprometidos em oferecer serviços de alta qualidade que atendam e superem as expectativas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="bg-white p-4 rounded shadow-sm">
                <h2 className="h4">Missão</h2>
                <p className="text-muted">
                  Nossa missão é ajudar nossos clientes a se organizarem diariamente. Estamos dedicados a criar um impacto positivo através de nossas agendas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="bg-white p-4 rounded shadow-sm">
                <h2 className="h4">Visão</h2>
                <p className="text-muted">
                  Ser reconhecidos como líderes no mercado, proporcionando soluções que ajudam a organização e impulsionam o sucesso dos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="bg-white p-4 rounded shadow-sm">
                <h2 className="h4">Valores</h2>
                <p className="text-muted">
                  Nossos valores fundamentais incluem integridade, inovação, excelência e compromisso com o cliente. Acreditamos que esses valores são essenciais para construir relações duradouras e de confiança com nossos parceiros e clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Sobre;
