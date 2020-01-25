import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  margin: 5%;
  overflow: hidden;
  text-decoration: none;
  background-color: lightslategray;
  width: 500px;
`;

const CardImg = styled.img`
  margin: 2%;
  width: 200px;
  border: 1px solid darkblue;
`;

const CardInfo = styled.div`
margin: 2%;
text-decoration: none;
`;



export default function CharacterCard({character}) {
  return (
      <CardWrapper>
        <CardImg src={character.image} alt={character.name}/>
        <CardInfo>
            <h3>Name:</h3>
            <p>{character.name}</p>

        </CardInfo>
        <CardInfo>
            <h3>Gender:</h3>
            <p>{character.gender}</p>
        </CardInfo>

        <CardInfo>
            <h3>Species:</h3>
            <p>{character.species}</p>
        </CardInfo>

      </CardWrapper>
  )
};
