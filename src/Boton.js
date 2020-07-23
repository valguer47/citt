import React from 'react';

class Boton extends React.Component {

    state = {
        claseActiva: false,
        frase: 'Analizando...'
    }

    Consola = () => {
        console.log('Esto es un botón');
    }

    cambiarClase = () => {
        this.setState({ claseActiva: true });
        this.claseInicial();
    }

    claseInicial = () => {
        setTimeout(() => {
            this.setState({ claseActiva: false });
        }, 4000)
    }


    render() {
        return (
            <div>
                <div>
                    <button className="boton" onClick={() => alert('Esto es una alerta...')}>
                        Botón
                    </button>
                </div>
            </div>
        );
    }
}

export default Boton;