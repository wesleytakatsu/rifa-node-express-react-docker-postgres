// Criação do componente Botao

//botão que recebe um texto e um 'true' ou 'false' para preencher o botão de verde ou preto.
//o botão também recebe uma função que é executada ao ser clicado.
//o botão também recebe um 'true' ou 'false' para desabilitar o botão.
//o botão tem a borda arredondada verde e a cor do texto é branca se o botão for verde e verde se o botão for preto.

import React from 'react';
import styles from './Botao.module.css';

function Botao({ texto, verde, onClick, desabilitado }) {
    return (
        <button
            className={`${styles.Botao} ${verde ? 'verde' : 'preto'}`}
            onClick={onClick}
            disabled={desabilitado}
        >
            {texto}
        </button>
    );
}

export default Botao;
