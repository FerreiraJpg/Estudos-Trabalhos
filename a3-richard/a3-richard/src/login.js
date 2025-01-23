// Login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ onLogin, onSignupClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light" style={{height: '100vh', width: '100vw'}}>
      <div className="card shadow-sm p-4">
        <h2 className="h4 mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">Entrar</button>
        </form>
        <div className="text-center">
          <p className="mb-0">Ainda não tem uma conta?</p>
          <button className="btn btn-link" onClick={onSignupClick}>Cadastre-se aqui</button>
        </div>
      </div>
    </div>
  );
}

export default Login;