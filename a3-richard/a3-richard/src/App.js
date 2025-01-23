import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './Calendar';
import Home from './home';
import Sobre from './sobre';
import Login from './login';
import Signup from './singup';
import TaskModal from './TaskModal';
import Contato from './contato';
import Notepad from './blocodenotas';

function App() {
  const [page, setPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [users, setUsers] = useState([]);

  const handleLogin = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setIsAuthenticated(true);
      setPage('home');
    } else {
      alert('Credenciais inválidas');
    }
  };

  const handleSignupClick = () => {
    setPage('signup');
  };

  const handleSignup = (newUser) => {
    setUsers([...users, newUser]);
    setPage('login');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPage('login');
  };

  const handleClose = () => {
    setSelectedTask(null);
    setPage('home');
  };

  const handlePrevDay = () => {
    // Lógica para dia anterior
  };

  const handleNextDay = () => {
    // Lógica para próximo dia
  };

  const handleDeleteTask = (taskId) => {
    // Lógica para deletar tarefa
  };

  const renderPage = () => {
    if (!isAuthenticated) {
      switch (page) {
        case 'login':
          return <Login onLogin={handleLogin} onSignupClick={handleSignupClick} setPage={setPage} />;
        case 'signup':
          return <Signup onSignup={handleSignup} />;
        default:
          return <Login onLogin={handleLogin} onSignupClick={handleSignupClick} setPage={setPage} />;
      }
    }

    switch (page) {
      case 'Notepad':
        return <Notepad />;
      case 'home':
        return <Home />;
      case 'contato':
        return <Contato />;
      case 'sobre':
        return <Sobre />;
      case 'calendar':
        return (
          <Calendar
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
        );
      case 'taskModal':
        return (
          <TaskModal
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            setPage={setPage}
            onClose={handleClose}
            onPrevDay={handlePrevDay}
            onNextDay={handleNextDay}
            onDeleteTask={handleDeleteTask}
          />
        );
      case 'blocoDeNotas':
        return <Notepad />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {isAuthenticated && (
        <header className="bg-dark text-white py-3 shadow-sm">
          <div className="container d-flex justify-content-between align-items-center">
            <h1 className="h3 mb-0">Agenda.Site</h1>
            <div>
              <button className="btn btn-primary me-2" onClick={() => setPage('home')}>Home</button>
              <button className="btn btn-primary me-2" onClick={() => setPage('sobre')}>Sobre Nós</button>   
              <button className="btn btn-primary me-2" onClick={() => setPage('contato')}>Contato</button>
              <button className="btn btn-primary me-2" onClick={() => setPage('calendar')}>Calendário</button>
              <button className="btn btn-primary me-2" onClick={() => setPage('Notepad')}>Bloco de notas</button>
              <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </header>
      )}
      <main className="container my-4 flex-grow-1 d-flex flex-column align-items-center">
        {renderPage()}
      </main>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        © 2024 Agenda.Site. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
