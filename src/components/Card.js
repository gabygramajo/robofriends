import React from 'react'; // importando react

// Creando la funcion que retorne nuestro componente.
const Card = ({name, email, id }) => {
    // const {name, email, id } = props; lo podemos hacer directamente en los parametros
    return (
        <div className='tc bg-light-green dib br3 pa3  ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

// https://robohash.org/ es una api que genera imagenes de robot aleatoreamente.
// ?200x200 es para indicar que sea un imagen de 200px en alto y ancho.
// className='bg-light-green dib br3 pa3  ma2 grow' son clases de paquete tachyons
// props son propiedades que se pueden recibir como parametros en el componente y todo lo que sea js debe ir entre {}
// en img tenemos src={`https://robohash.org/${props.id}?200x200`} y usamos props.id para generar un imagen distinta en cada Card, con destruturing solo queda id.