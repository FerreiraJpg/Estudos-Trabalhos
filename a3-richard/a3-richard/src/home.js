import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    
    <div className="d-flex flex-column min-vh-100 bg-light">
      <header className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Nosso Serviço de Agenda</h1>
          <p className="lead">Organize seus compromissos de forma eficiente e prática</p>
        </div>
      </header>
      <main className="flex-grow-1">
        <section className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="card-title h4">Sobre o Serviço</h2>
                  <p className="card-text text-muted">
                    Nosso serviço de agenda foi projetado para ajudar você a gerenciar seus compromissos de maneira eficiente. Com uma interface amigável e funcionalidades avançadas, você pode facilmente adicionar, editar e visualizar seus eventos diários.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="card-title h4">Funcionalidades</h2>
                  <p className="card-text text-muted">
                    Oferecemos uma variedade de funcionalidades para atender suas necessidades, incluindo marcação de lembretes, bloco de notas embutido e opções de compartilhamento de eventos com outros usuários.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="card-title h4">Benefícios</h2>
                  <p className="card-text text-muted">
                    Usar nosso serviço de agenda traz diversos benefícios, como aumento da produtividade, melhor gestão do tempo e redução do estresse. Você estará sempre atualizado sobre seus compromissos importantes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="card-title h4">Como Funciona</h2>
                  <p className="card-text text-muted">
                    É simples começar a usar nosso serviço de agenda. Basta criar uma conta e começar a adicionar seus compromissos. Nossa interface intuitiva facilita todo o processo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
