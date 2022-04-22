// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Character = styled.div`
color: red;
padding: 5px;
border: 2px solid black;
`


const StarWarsChar = (props) => {
    return (
        <Character className='starwarschar'>
            <h1>
                {props.character.name}
            </h1>
        </Character>
    )
}


export default StarWarsChar;