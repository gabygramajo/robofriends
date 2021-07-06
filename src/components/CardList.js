import React from 'react';
import Card from './Card'; // importando nuestro componente card.



const CardList = ({ robots }) => {
    
    return (
        <div>
            {
                robots.map( (user,i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        /> 
                    )})
            }
        </div>
    );
}

export default CardList;
/*
    const cardArrayComponent = robots.map( (user,i) => {
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
            /> 
        );
    });
    return (
        <div>
            {cardArrayComponent}
        </div>
    );
    const cardArrayComponent = robots.map( (user,i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/> ;
    });
    Estamos creando un componente Card dinamicamente y almacenandolo en un array para asi poder renderizar todas las tarjetas.
*/