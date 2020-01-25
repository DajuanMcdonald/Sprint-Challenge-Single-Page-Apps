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
`;

const CardImg = styled.img`
  margin: 2%;
  width: 300px;
  border: 1px solid darkblue;
`;

const CardInfo = styled.div`
margin: 2%;
`;



export default function CharacterCard({character}) {
  return (
      <CardWrapper>
        <CardImg src={character.image} alt={character.name}/>
        <CardInfo>
            <h3>{character.name}</h3>

        </CardInfo>
        <CardInfo>

            <h3>{character.gender}</h3>
        </CardInfo>

      </CardWrapper>
  )
};
