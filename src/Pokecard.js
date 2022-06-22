import React from 'react';
import './Pokecard.css';

const POKEMON_API = 'https://raw.githubusercontent.com/' +
    'PokeAPI/sprites/master/sprites/pokemon/';

//Single Pokemon card

const Pokecard = (props) => {
    let imgSrc = `${POKEMON_API}${props.id}.png`;

    return (
        <div className='Pokecard'>
            <div className='Pokecard-title'>{props.name}</div>
            <img className='Pokecard-image' src={imgSrc} alt="Pokemon card" />
            <div className='Pokecard-data'>Type: {props.type}</div>
            <div className='Pokecard-data'>Experience: {props.exp}</div>
        </div>
    )
}

export default Pokecard;