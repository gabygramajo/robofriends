// // import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;
/*
<Scroll>
    <CardList robots={filteredRobots}/>
 </Scroll>

 El componente Scroll envuelve al componente CardList para poder utilizar la propiedad de react de props.children. O sea, CardList pasa a ser hijo de Scroll, por lo tanto podemos acceder a sus hijos utilizando props.children.

 style={ style es un atributo como el de html, osea como className.
     {
        overflowY: 'scroll', 
        border: '2px solid black', 
        height: '800px'
     }
    }>
*/