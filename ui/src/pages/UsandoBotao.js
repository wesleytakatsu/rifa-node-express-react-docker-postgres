import React, { useState } from 'react';
import Botao from '../components/Botao';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';

import BuscarPedidosForm from '../components/BuscarPedidosForm';

function App() {
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        alert('Botão clicado!');
    };

    const toggleButtonState = () => {
        setIsDisabled(!isDisabled);
    };

    return (
        <div>
            <TopBar />
            <HeaderBar />


            <h1>Exemplo de Uso do Botão</h1>

            <Botao 
                texto="Clique em mim" 
                verde={true} 
                onClick={handleClick} 
                desabilitado={isDisabled} 
            />

            <Botao 
                texto="Outro Botão" 
                verde={false} 
                onClick={handleClick} 
                desabilitado={false} 
            />

            <button onClick={toggleButtonState}>
                {isDisabled ? 'Habilitar Botão' : 'Desabilitar Botão'}
            </button>

<br />
<br />

            <BuscarPedidosForm />

            <Footer />
        </div>
    );
}

export default App;
