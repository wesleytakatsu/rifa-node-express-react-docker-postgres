import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComprarNumeroRifa = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token'); // Supondo que você armazene o token no localStorage
      try {
        const response = await axios.post('http://localhost:3001/rifa/comprarnumerorifa', {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsername(response.data.username);
      } catch (err) {
        setError('Token inválido ou usuário não autorizado');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? <p>{error}</p> : <p>Bem-vindo, {username}! Você pode comprar um número da rifa.</p>}
    </div>
  );
};

export default ComprarNumeroRifa;
