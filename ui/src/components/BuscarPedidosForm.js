import React from 'react';
import styles from './BuscarPedidosForm.module.css';

function buscarPedido(e) {
    e.preventDefault();
    console.log('Buscando pedido...');
    const numeroTelefone = e.target.elements.numeroTelefone.value;
    console.log(numeroTelefone);
}

function BuscarPedidosForm() {

    return (
        <div className={styles.BuscarPedidosForm}>
            <form onSubmit={buscarPedido}>
                <label>
                    <input className={styles.formTextInput} type="text" name="numeroTelefone" placeholder='Digite seu telefone' />
                </label>
                <button className={styles.formButton} type="submit">Buscar</button>
            </form>
        </div>
    );
}

export default BuscarPedidosForm;