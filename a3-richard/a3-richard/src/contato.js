import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contato = ({ setPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendEmail(formData);
      console.log('Resposta do envio de email:', response);
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
    }

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const sendEmail = async (formData) => {
    // Simulação de envio de email
    console.log('Enviando email para o Suporte:', formData);

    // aqui ficaria o backend para o envio do email
    return 'Email enviado com sucesso!';
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Entre em Contato</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Assunto</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensagem</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
      </form>
    </div>
  );
};

export default Contato;
