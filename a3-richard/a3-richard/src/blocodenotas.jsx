import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const Notepad = ({ onClose }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    html2canvas(document.querySelector('.notepad')).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const img = document.createElement('a');
      img.href = imgData;
      img.download = 'notepad.png';
      img.click();
    });
  };

  return (
    <div className="container mt-5 notepad">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-dark text-light">
              <h3 className="card-title">Bloco de Notas</h3>
            </div>
            <div className="card-body">
              <textarea
                className="form-control mb-3"
                value={text}
                onChange={handleChange}
                placeholder="Escreva aqui..."
                rows={10}
              />
              <div className="d-grid gap-2">
                <button className="btn btn-danger" onClick={onClose}>
                  Fechar
                </button>
                <button className="btn btn-primary" onClick={handleSave}>
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notepad;
